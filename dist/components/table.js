"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = exports.createTable = void 0;
var chalk_1 = __importDefault(require("chalk"));
var cli_table_1 = __importDefault(require("cli-table"));
var createTable = function (taskList) {
    var table = new cli_table_1.default({
        head: ['Description', 'Priority', 'Date limit', 'Days ago', 'status'],
        colWidths: [30, 10, 20, 10, 20]
    });
    taskList.forEach(function (task) {
        var priority = task.priority == 0 ? chalk_1.default.green("low") : (task.priority == 1 ? chalk_1.default.yellow("medium") : chalk_1.default.red("high"));
        var created_at = new Date().getTime() - new Date(task.creation_date).getTime();
        created_at = Math.ceil(created_at / (1000 * 3600 * 24)); //get the difference in days
        var date_limit = new Date(task.date_limit).toLocaleDateString();
        var status = task.status == 'pending' ? chalk_1.default.redBright('pending') : chalk_1.default.green('completed');
        table.push([task.description, priority, date_limit, created_at + " days", status]);
    });
    return table;
};
exports.createTable = createTable;
var renderTable = function (table) {
    console.log(table.toString());
};
exports.renderTable = renderTable;
