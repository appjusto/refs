"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreRefs = void 0;
var firestore_1 = require("firebase/firestore");
var FirestoreRefs = /** @class */ (function () {
    function FirestoreRefs(firestore) {
        var _this = this;
        this.firestore = firestore;
        // recommendations
        this.getRecommendationsRef = function () { return (0, firestore_1.collection)(_this.firestore, 'recommendations'); };
        // withdraws
        this.getWithdrawsRef = function () { return (0, firestore_1.collection)(_this.firestore, 'withdraws'); };
        // reviews
        this.getReviewsRef = function () { return (0, firestore_1.collection)(_this.firestore, 'reviews'); };
        this.getReviewRef = function (id) { return (0, firestore_1.doc)((0, firestore_1.collection)(_this.firestore, 'reviews'), id); };
        // platform
        this.getPlatformRef = function () { return (0, firestore_1.collection)(_this.firestore, 'platform'); };
        // platform docs
        this.getPlatformParamsRef = function () { return (0, firestore_1.doc)(_this.getPlatformRef(), 'params'); };
        this.getPlatformStatisticsRef = function () { return (0, firestore_1.doc)(_this.getPlatformRef(), 'statistics'); };
        this.getPlatformCitiesStatisticsRef = function () {
            return (0, firestore_1.collection)(_this.getPlatformStatisticsRef(), 'cities');
        };
        this.getPlatformCityStatisticsRef = function (name) {
            return (0, firestore_1.doc)(_this.getPlatformCitiesStatisticsRef(), name);
        };
        this.getPlatformDatasRef = function () { return (0, firestore_1.doc)(_this.getPlatformRef(), 'data'); };
        this.getPlatformLogsRef = function () { return (0, firestore_1.doc)(_this.getPlatformRef(), 'logs'); };
        this.getPlatformAccessRef = function () { return (0, firestore_1.doc)(_this.getPlatformRef(), 'access'); };
        // platform data subcollections
        this.getBanksRef = function () { return (0, firestore_1.collection)(_this.getPlatformDatasRef(), 'banks'); };
        this.getIssuesRef = function () { return (0, firestore_1.collection)(_this.getPlatformDatasRef(), 'issues'); };
        this.getCuisinesRef = function () { return (0, firestore_1.collection)(_this.getPlatformDatasRef(), 'cuisines'); };
        this.getClassificationsRef = function () {
            return (0, firestore_1.collection)(_this.getPlatformDatasRef(), 'classifications');
        };
        this.getReviewTagsRef = function () { return (0, firestore_1.collection)(_this.getPlatformDatasRef(), 'reviewTags'); };
        // platform logs subcollections
        this.getPlatformLoginLogsRef = function () {
            return (0, firestore_1.collection)(_this.getPlatformLogsRef(), 'logins');
        };
        // businesses
        this.getBusinessesRef = function () { return (0, firestore_1.collection)(_this.firestore, 'businesses'); };
        this.getBusinessRef = function (id) { return (0, firestore_1.doc)(_this.getBusinessesRef(), id); };
        // business menu
        this.getBusinessMenuMessageRef = function (businessId) {
            return (0, firestore_1.doc)((0, firestore_1.collection)(_this.getBusinessRef(businessId), 'menu'), 'message');
        };
        this.getBusinessCategoriesRef = function (businessId) {
            return (0, firestore_1.collection)(_this.getBusinessRef(businessId), 'categories');
        };
        this.getBusinessCategoryRef = function (businessId, categoryId) {
            return (0, firestore_1.doc)(_this.getBusinessCategoriesRef(businessId), categoryId);
        };
        this.getBusinessProductsRef = function (businessId) {
            return (0, firestore_1.collection)(_this.getBusinessRef(businessId), 'products');
        };
        this.getBusinessProductRef = function (businessId, id) {
            return (0, firestore_1.doc)(_this.getBusinessProductsRef(businessId), id);
        };
        this.getBusinessComplementsGroupsRef = function (businessId) {
            return (0, firestore_1.collection)(_this.getBusinessRef(businessId), 'complementsgroups');
        };
        this.getBusinessComplementGroupRef = function (businessId, groupId) {
            return (0, firestore_1.doc)(_this.getBusinessComplementsGroupsRef(businessId), groupId);
        };
        this.getBusinessComplementsRef = function (businessId) {
            return (0, firestore_1.collection)(_this.getBusinessRef(businessId), 'complements');
        };
        this.getBusinessComplementRef = function (businessId, complementId) {
            return (0, firestore_1.doc)(_this.getBusinessComplementsRef(businessId), complementId);
        };
        this.getBusinessMenuOrderingRef = function (businessId, menuId) {
            if (menuId === void 0) { menuId = 'default'; }
            return (0, firestore_1.doc)((0, firestore_1.collection)(_this.getBusinessRef(businessId), 'menu'), menuId);
        };
        // managers
        this.getManagersRef = function () { return (0, firestore_1.collection)(_this.firestore, 'managers'); };
        this.getManagerRef = function (managerId) {
            return (0, firestore_1.doc)((0, firestore_1.collection)(_this.firestore, 'managers'), managerId);
        };
        // orders
        this.getOrdersRef = function () { return (0, firestore_1.collection)(_this.firestore, 'orders'); };
        this.getOrderRef = function (id) { return (0, firestore_1.doc)(_this.getOrdersRef(), id); };
        this.getOrderChatRef = function (id) {
            return (0, firestore_1.collection)((0, firestore_1.doc)(_this.getOrdersRef(), id), 'chat');
        };
        this.getOrderChatMessageRef = function (orderId, id) {
            return (0, firestore_1.doc)(_this.getOrderChatRef(orderId), id);
        };
        this.getOrderIssuesRef = function (id) {
            return (0, firestore_1.collection)((0, firestore_1.doc)(_this.getOrdersRef(), id), 'issues');
        };
        this.getOrderPrivateRef = function (id) {
            return (0, firestore_1.collection)((0, firestore_1.doc)(_this.getOrdersRef(), id), 'private');
        };
        this.getOrderCancellationRef = function (orderId) {
            return (0, firestore_1.doc)(_this.getOrderPrivateRef(orderId), 'cancellation');
        };
        this.getOrderConfirmationRef = function (id) {
            return (0, firestore_1.doc)(_this.getOrderPrivateRef(id), 'confirmation');
        };
        this.getOrderLogsRef = function (id) { return (0, firestore_1.collection)(_this.getOrderRef(id), 'logs'); };
        // chats
        this.getChatsRef = function () { return (0, firestore_1.collection)(_this.firestore, 'chats'); };
        this.getChatMessageRef = function (messageId) { return (0, firestore_1.doc)(_this.getChatsRef(), messageId); };
        // consumers
        this.getConsumersRef = function () { return (0, firestore_1.collection)(_this.firestore, 'consumers'); };
        this.getConsumerRef = function (id) { return (0, firestore_1.doc)(_this.getConsumersRef(), id); };
        // users
        this.getUsersRef = function () { return (0, firestore_1.collection)(_this.firestore, 'users'); };
        this.getUsersSubcollectionsRef = function () { return (0, firestore_1.doc)(_this.getUsersRef(), 'subcollections'); };
        this.getUsersChangesRef = function () {
            return (0, firestore_1.collection)(_this.getUsersSubcollectionsRef(), 'changes');
        };
        // couriers
        this.getCouriersRef = function () { return (0, firestore_1.collection)(_this.firestore, 'couriers'); };
        this.getCourierRef = function (id) { return (0, firestore_1.doc)(_this.getCouriersRef(), id); };
        this.getCourierReviewsRef = function (id) {
            return (0, firestore_1.collection)(_this.getCourierRef(id), 'reviews');
        };
        this.getCourierRequestsRef = function (id) {
            return (0, firestore_1.collection)(_this.getCourierRef(id), 'requests');
        };
        this.getCourierOrderRequestsRef = function (courierId, orderId) {
            return (0, firestore_1.doc)(_this.getCourierRequestsRef(courierId), orderId);
        };
        // fleets
        this.getFleetsRef = function () { return (0, firestore_1.collection)(_this.firestore, 'fleets'); };
        this.getFleetRef = function (id) { return (0, firestore_1.doc)(_this.getFleetsRef(), id); };
        this.getAppJustoFleetRef = function () { return _this.getFleetRef('appjusto'); };
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
    return FirestoreRefs;
}());
exports.FirestoreRefs = FirestoreRefs;
//# sourceMappingURL=FirestoreRefs.js.map