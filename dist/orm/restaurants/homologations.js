"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomologationModel = void 0;
const baseModel_1 = require("../baseModel");
class HomologationModel extends baseModel_1.BaseModel {
    constructor() {
        super('homologations'); // El nombre de la tabla en BigQuery
    }
}
exports.HomologationModel = HomologationModel;
