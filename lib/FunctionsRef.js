"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("firebase/functions");
var FunctionsRef = /** @class */ (function () {
    function FunctionsRef(functions) {
        var _this = this;
        this.functions = functions;
        this.getVerifyProfileCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'verifyProfile');
        };
        this.getFetchAccountInformationCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'fetchAccountInformation');
        };
        this.getFetchReceivablesCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'fetchReceivables');
        };
        this.getFetchAdvanceSimulationCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'fetchAdvanceSimulation');
        };
        this.getRequestWithdrawCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'requestWithdraw');
        };
        this.getAdvanceReceivablesCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'advanceReceivables');
        };
        this.getDeleteAccountCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'deleteAccount');
        };
        this.getServerTimeCallable = function () { return (0, functions_1.httpsCallable)(_this.functions, 'getServerTime'); };
        // consumer
        this.getSavePaymentTokenCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'savePaymentToken');
        };
        this.getDeletePaymentMethodCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'deletePaymentMethod');
        };
        this.getCreateOrderCallable = function () { return (0, functions_1.httpsCallable)(_this.functions, 'createOrder'); };
        this.getGetOrderQuotesCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'getOrderQuotes');
        };
        this.getPlaceOrderCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'placeOrder');
        };
        this.getCancelOrderCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'cancelOrder');
        };
        this.getTipCourierCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'tipCourier');
        };
        this.getCancellationInfoCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'getCancellationInfo');
        };
        this.getUpdateOrderCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'updateOrder');
        };
        this.getQueryGoogleMapsCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'queryGoogleMaps');
        };
        // courier
        this.getMatchOrderCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'matchOrder');
        };
        this.getRejectOrderCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'rejectOrder');
        };
        this.getDropOrderCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'dropOrder');
        };
        this.getNextDispatchingStateCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'nextDispatchingState');
        };
        this.getCompleteDeliveryCallable = function () {
            return (0, functions_1.httpsCallable)(_this.functions, 'completeDelivery');
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
exports.default = FunctionsRef;
//# sourceMappingURL=FunctionsRef.js.map