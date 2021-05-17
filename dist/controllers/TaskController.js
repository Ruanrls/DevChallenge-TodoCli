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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
var TaskService_1 = require("../service/TaskService");
var addTask_1 = require("../components/addTask");
var removeTasks_1 = require("../components/removeTasks");
var todoTask_1 = require("../components/todoTask");
var table_1 = require("../components/table");
var chalk_1 = __importDefault(require("chalk"));
var TaskController = /** @class */ (function () {
    function TaskController() {
        var _this = this;
        this.create = function () { return __awaiter(_this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, addTask_1.addTask()];
                    case 1:
                        task = _a.sent();
                        return [4 /*yield*/, this.service.create(task)];
                    case 2:
                        _a.sent();
                        console.log(chalk_1.default.green("Task added!"));
                        return [2 /*return*/];
                }
            });
        }); };
        this.remove = function () { return __awaiter(_this, void 0, void 0, function () {
            var tasks, removeIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.listAll()];
                    case 1:
                        tasks = _a.sent();
                        if (tasks.length == 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, removeTasks_1.removeTasks(tasks)];
                    case 2:
                        removeIds = _a.sent();
                        return [4 /*yield*/, this.service.removeByIds(removeIds)];
                    case 3:
                        _a.sent();
                        console.log(chalk_1.default.red("Task removed!"));
                        return [2 /*return*/];
                }
            });
        }); };
        this.todo = function () { return __awaiter(_this, void 0, void 0, function () {
            var tasks, updateIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.listByStatus('pending')];
                    case 1:
                        tasks = _a.sent();
                        return [4 /*yield*/, todoTask_1.todoTask(tasks)];
                    case 2:
                        updateIds = _a.sent();
                        updateIds.forEach(function (id) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.service.setState({ id: id, newState: 'completed' })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        if (updateIds.length > 0) {
                            console.log(chalk_1.default.green("Tasks updated!"));
                        }
                        return [2 /*return*/, tasks];
                }
            });
        }); };
        this.all = function () { return __awaiter(_this, void 0, void 0, function () {
            var allTasks, notFinished, percentage, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.listAll()];
                    case 1:
                        allTasks = _a.sent();
                        notFinished = allTasks.filter(function (item) {
                            if (item.status === 'pending')
                                return false;
                            return true;
                        });
                        percentage = ((notFinished.length / allTasks.length) * 100);
                        if (percentage >= 60) {
                            percentage = chalk_1.default.green(percentage.toFixed(2) + "%");
                        }
                        else {
                            percentage = chalk_1.default.red(percentage.toFixed(2) + "%");
                        }
                        console.log("Not finished: " + notFinished.length + "/" + allTasks.length + " - " + percentage);
                        table = table_1.createTable(allTasks);
                        table_1.renderTable(table);
                        return [2 /*return*/, allTasks];
                }
            });
        }); };
        this.nextTasks = function () { return __awaiter(_this, void 0, void 0, function () {
            var nextTasks, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.listNextTasks()];
                    case 1:
                        nextTasks = _a.sent();
                        table = table_1.createTable(nextTasks);
                        table_1.renderTable(table);
                        return [2 /*return*/];
                }
            });
        }); };
        this.service = new TaskService_1.TaskService();
    }
    return TaskController;
}());
exports.TaskController = TaskController;
