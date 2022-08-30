"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
const router = express_1.Router();
const IndexController = new indexController_1.default();
router.get('/health-check', IndexController.get);
exports.default = router;
//# sourceMappingURL=indexRouter.js.map