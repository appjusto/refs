"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsRef = void 0;
var functions_1 = require("firebase/functions");
var FunctionsRef = /** @class */ (function () {
    function FunctionsRef() {
        var _this = this;
        this.getVerifyProfileCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'verifyProfile');
        };
        this.getFetchAccountInformationCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'fetchAccountInformation');
        };
        this.getFetchReceivablesCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'fetchReceivables');
        };
        this.getFetchAdvanceSimulationCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'fetchAdvanceSimulation');
        };
        this.getRequestWithdrawCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'requestWithdraw');
        };
        this.getAdvanceReceivablesCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'advanceReceivables');
        };
        this.getDeleteAccountCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'deleteAccount');
        };
        this.getServerTimeCallable = function () { return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'getServerTime'); };
        // consumer
        this.getSavePaymentTokenCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'savePaymentToken');
        };
        this.getDeletePaymentMethodCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'deletePaymentMethod');
        };
        this.getCreateOrderCallable = function () { return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'createOrder'); };
        this.getGetOrderQuotesCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'getOrderQuotes');
        };
        this.getPlaceOrderCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'placeOrder');
        };
        this.getCancelOrderCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'cancelOrder');
        };
        this.getTipCourierCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'tipCourier');
        };
        this.getCancellationInfoCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'getCancellationInfo');
        };
        this.getUpdateOrderCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'updateOrder');
        };
        this.getQueryGoogleMapsCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'queryGoogleMaps');
        };
        // courier
        this.getMatchOrderCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'matchOrder');
        };
        this.getRejectOrderCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'rejectOrder');
        };
        this.getDropOrderCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'dropOrder');
        };
        this.getNextDispatchingStateCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'nextDispatchingState');
        };
        this.getCompleteDeliveryCallable = function () {
            return (0, functions_1.httpsCallable)((0, functions_1.getFunctions)(), 'completeDelivery');
        };
        // storage
        // courier
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
    return FunctionsRef;
}());
exports.FunctionsRef = FunctionsRef;
//# sourceMappingURL=FunctionsRef.js.map