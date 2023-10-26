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
exports.users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let users = exports.users = class users extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    (0, sequelize_typescript_1.Index)({
        name: "PRIMARY",
        using: "BTREE",
        order: "ASC",
        unique: true
    }),
    __metadata("design:type", Number)
], users.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING(255)
    }),
    __metadata("design:type", String)
], users.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "ut_id",
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: "ตาราง user_types"
    }),
    (0, sequelize_typescript_1.Index)({
        name: "fk_users_user_types1_idx",
        using: "BTREE",
        order: "ASC",
        unique: false
    }),
    __metadata("design:type", Number)
], users.prototype, "utId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "bc_id",
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    (0, sequelize_typescript_1.Index)({
        name: "fk_users_business_categories1_idx",
        using: "BTREE",
        order: "ASC",
        unique: false
    }),
    __metadata("design:type", Number)
], users.prototype, "bcId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], users.prototype, "detail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: "regis_date",
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], users.prototype, "regisDate", void 0);
exports.users = users = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "users",
        timestamps: false
    })
], users);
