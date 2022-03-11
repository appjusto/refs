"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragePaths = void 0;
var StoragePaths = /** @class */ (function () {
    function StoragePaths() {
        var _this = this;
        this.getCourierSelfiePath = function (courierId, size) {
            return "couriers/".concat(courierId, "/selfie").concat(size ? "_".concat(size) : '', ".jpg");
        };
        this.getCourierDocumentPath = function (courierId, size) {
            return "couriers/".concat(courierId, "/document").concat(size ? "_".concat(size) : '', ".jpg");
        };
        // orders
        this.getOrderPODPackagePath = function (orderId, courierId) {
            return "orders/".concat(orderId, "/").concat(courierId, "/package.jpg");
        };
        this.getOrderPODFrontPath = function (orderId, courierId) {
            return "orders/".concat(orderId, "/").concat(courierId, "/front.jpg");
        };
        // business
        this.getBusinessStoragePath = function (businessId) { return "businesses/".concat(businessId); };
        this.getBusinessLogoUploadStoragePath = function (businessId) {
            return "".concat(_this.getBusinessStoragePath(businessId), "/logo.jpg");
        };
        this.getBusinessLogoStoragePath = function (businessId) {
            return "".concat(_this.getBusinessStoragePath(businessId), "/logo_240x240.jpg");
        };
        this.getBusinessCoverUploadStoragePath = function (businessId) {
            return "".concat(_this.getBusinessStoragePath(businessId), "/cover.jpg");
        };
        this.getBusinessCoverStoragePath = function (businessId) {
            return "".concat(_this.getBusinessStoragePath(businessId), "/cover_1008x360.jpg");
        };
        this.getProductsStoragePath = function (businessId) {
            return "".concat(_this.getBusinessStoragePath(businessId), "/products");
        };
        this.getProductImageStoragePath = function (businessId, productId, size) { return "".concat(_this.getProductsStoragePath(businessId), "/").concat(productId, "_").concat(size, ".jpg"); };
        this.getComplementsStoragePath = function (businessId) {
            return "".concat(_this.getBusinessStoragePath(businessId), "/complements");
        };
        this.getComplementUploadStoragePath = function (businessId, complementId) {
            return "".concat(_this.getComplementsStoragePath(businessId), "/").concat(complementId, "_288x288.jpg");
        };
        this.getComplementImageStoragePath = function (businessId, complementId) {
            return "".concat(_this.getComplementsStoragePath(businessId), "/").concat(complementId, "_288x288.jpg");
        };
    }
    return StoragePaths;
}());
exports.StoragePaths = StoragePaths;
//# sourceMappingURL=StoragePaths.js.map