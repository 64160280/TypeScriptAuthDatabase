"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.road_safety_and_causes_accident = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let road_safety_and_causes_accident = exports.road_safety_and_causes_accident = class road_safety_and_causes_accident extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "rsaca_rs_id",
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: "ตาราง road_safeties"
    }),
    (0, sequelize_typescript_1.Index)({
        name: "PRIMARY",
        using: "BTREE",
        order: "ASC",
        unique: true
    }),
    __metadata("design:type", Number)
], road_safety_and_causes_accident.prototype, "rsacaRsId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "rsaca_ca_id",
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: "ตาราง causes_accidents"
    }),
    (0, sequelize_typescript_1.Index)({
        name: "fk_road_safety_and_causes_accident_causes_accidents_idx",
        using: "BTREE",
        order: "ASC",
        unique: false
    }),
    (0, sequelize_typescript_1.Index)({
        name: "PRIMARY",
        using: "BTREE",
        order: "ASC",
        unique: true
    }),
    __metadata("design:type", Number)
], road_safety_and_causes_accident.prototype, "rsacaCaId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "rsaca_percentage",
        allowNull: true,
        type: sequelize_typescript_1.DataType.DECIMAL(11, 2),
        comment: "ร้อยละของความเกิดอุบัติเหตุ"
    }),
    __metadata("design:type", String)
], road_safety_and_causes_accident.prototype, "rsacaPercentage", void 0);
exports.road_safety_and_causes_accident = road_safety_and_causes_accident = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "road_safety_and_causes_accident",
        timestamps: false,
        comment: "ตารางเก็บความสัมพันธ์ในมาตรการและสาเหตุ"
    })
], road_safety_and_causes_accident);
