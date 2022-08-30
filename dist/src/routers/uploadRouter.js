"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadController_1 = __importDefault(require("../controllers/uploadController"));
const router = express_1.Router();
const uploadController = new uploadController_1.default();
router.post('/default', uploadController.post);
exports.default = router;
//# sourceMappingURL=uploadRouter.js.map