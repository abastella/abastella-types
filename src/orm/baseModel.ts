import { BigQuery } from "@google-cloud/bigquery";

export abstract class BaseModel<T> {
  protected tableName: string;
  protected bigQuery: BigQuery;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.bigQuery = new BigQuery();
  }

  async create(data: Partial<T>): Promise<void> {
    const query = `
      INSERT INTO \`${this.tableName}\`
      (${Object.keys(data).join(", ")})
      VALUES (${Object.values(data)
        .map((value) => `'${value}'`)
        .join(", ")});
    `;
    await this.bigQuery.query({ query });
  }

  async findById(id: string): Promise<T | null> {
    const query = `SELECT * FROM \`${this.tableName}\` WHERE id = '${id}' LIMIT 1;`;
    const [rows] = await this.bigQuery.query({ query });

    return (rows[0] as T) || null;
  }

  async updateById(id: string, data: Partial<T>): Promise<void> {
    const updates = Object.keys(data)
      .map((key) => {
        const value = (data as any)[key];
        if (typeof value === "string") {
          return `${key} = '${value}'`;
        } else if (value === null) {
          return `${key} = NULL`;
        } else {
          return `${key} = ${value}`;
        }
      })
      .join(", ");

    const query = `
      UPDATE \`${this.tableName}\`
      SET ${updates}
      WHERE id = '${id}';
    `;
    await this.bigQuery.query({ query });
  }

  async deleteById(id: string): Promise<void> {
    const query = `DELETE FROM \`${this.tableName}\` WHERE id = '${id}';`;
    await this.bigQuery.query({ query });
  }

  async find(query: string): Promise<T[]> {
    const [rows] = await this.bigQuery.query({ query });
    return rows as T[];
  }
}
