"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const bigquery_1 = require("@google-cloud/bigquery");
class BaseModel {
    constructor(tableName) {
        this.tableName = tableName;
        this.bigQuery = new bigquery_1.BigQuery();
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      INSERT INTO \`${this.tableName}\`
      (${Object.keys(data).join(", ")})
      VALUES (${Object.values(data)
                .map((value) => `'${value}'`)
                .join(", ")});
    `;
            yield this.bigQuery.query({ query });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM \`${this.tableName}\` WHERE id = '${id}' LIMIT 1;`;
            const [rows] = yield this.bigQuery.query({ query });
            return rows[0] || null;
        });
    }
    updateById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updates = Object.keys(data)
                .map((key) => {
                const value = data[key];
                if (typeof value === "string") {
                    return `${key} = '${value}'`;
                }
                else if (value === null) {
                    return `${key} = NULL`;
                }
                else {
                    return `${key} = ${value}`;
                }
            })
                .join(", ");
            const query = `
      UPDATE \`${this.tableName}\`
      SET ${updates}
      WHERE id = '${id}';
    `;
            yield this.bigQuery.query({ query });
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `DELETE FROM \`${this.tableName}\` WHERE id = '${id}';`;
            yield this.bigQuery.query({ query });
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.bigQuery.query({ query });
            return rows;
        });
    }
}
exports.BaseModel = BaseModel;
