import { BigQuery } from "@google-cloud/bigquery";
export declare abstract class BaseModel<T> {
    protected tableName: string;
    protected bigQuery: BigQuery;
    constructor(tableName: string);
    create(data: Partial<T>): Promise<void>;
    findById(id: string): Promise<T | null>;
    updateById(id: string, data: Partial<T>): Promise<void>;
    deleteById(id: string): Promise<void>;
    find(query: string): Promise<T[]>;
}
