"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment/environment");
function getDomain(domain) {
    return domain.config.domain;
}
// export const DOMAIN = getDomain(window)
exports.DOMAIN = environment_1.environment.serverDomain;
exports.APP_DOMAIN = environment_1.environment.appDomain;
exports.QINIU_DOMAIN = environment_1.environment.qiniuDomain;
exports.DOWNLOAD_DOMAIN = exports.DOMAIN + "storage/";
exports.UPLOAD_DOMAIN = exports.DOMAIN + "api/admin/upload";
