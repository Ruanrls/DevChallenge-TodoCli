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
exports.Task = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Task = /** @class */ (function () {
    function Task() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
        if (this.date_limit) {
            this.date_limit = new Date(this.date_limit).toISOString();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Task.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ length: 50 }),
        __metadata("design:type", String)
    ], Task.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ default: new Date().toISOString() }),
        __metadata("design:type", String)
    ], Task.prototype, "creation_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Task.prototype, "date_limit", void 0);
    __decorate([
        typeorm_1.Column({ length: 10, default: 'pending' }),
        __metadata("design:type", String)
    ], Task.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Task.prototype, "priority", void 0);
    Task = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [])
    ], Task);
    return Task;
}());
exports.Task = Task;
