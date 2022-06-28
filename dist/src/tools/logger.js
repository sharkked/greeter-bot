"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const printf = winston_1.default.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});
winston_1.default.addColors({
    error: "red",
    warn: "yellow",
    http: "blue",
    debug: "green",
    info: "gray",
});
winston_1.default.configure({
    level: "debug",
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.errors({ stack: true }), winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), printf),
    transports: [new winston_1.default.transports.Console()],
    exceptionHandlers: [new winston_1.default.transports.Console()],
    rejectionHandlers: [new winston_1.default.transports.Console()],
});
exports.default = winston_1.default;
