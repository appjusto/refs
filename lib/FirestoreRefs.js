"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreRefs = void 0;
var firestore_1 = require("firebase/firestore");
var FirestoreRefs = /** @class */ (function () {
    function FirestoreRefs() {
        var _this = this;
        // recommendations
        this.getRecommendationsRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'recommendations'); };
        // withdraws
        this.getWithdrawsRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'withdraws'); };
        // reviews
        this.getReviewsRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'reviews'); };
        this.getReviewRef = function (id) { return (0, firestore_1.doc)((0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'reviews'), id); };
        // platform
        this.getPlatformRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'platform'); };
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
        this.getBusinessesRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'businesses'); };
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
        this.getManagersRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'managers'); };
        this.getManagerRef = function (managerId) {
            return (0, firestore_1.doc)((0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'managers'), managerId);
        };
        // orders
        this.getOrdersRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'orders'); };
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
        // invoices
        this.getInvoicesRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'invoices'); };
        this.getInvoiceRef = function (id) { return (0, firestore_1.doc)(_this.getInvoicesRef(), id); };
        this.getInvoiceLogsRef = function (id) {
            return (0, firestore_1.collection)(_this.getInvoiceRef(id), 'changes');
        };
        // chats
        this.getChatsRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'chats'); };
        this.getChatMessageRef = function (messageId) { return (0, firestore_1.doc)(_this.getChatsRef(), messageId); };
        // consumers
        this.getConsumersRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'consumers'); };
        this.getConsumerRef = function (id) { return (0, firestore_1.doc)(_this.getConsumersRef(), id); };
        // users
        this.getUsersRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'users'); };
        this.getUsersSubcollectionsRef = function () { return (0, firestore_1.doc)(_this.getUsersRef(), 'subcollections'); };
        this.getUsersChangesRef = function () {
            return (0, firestore_1.collection)(_this.getUsersSubcollectionsRef(), 'changes');
        };
        // couriers
        this.getCouriersRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'couriers'); };
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
        // ledger
        this.getLedgerRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'ledger'); };
        this.getLedgerDocRef = function (id) { return (0, firestore_1.doc)(_this.getLedgerRef(), id); };
        // fleets
        this.getFleetsRef = function () { return (0, firestore_1.collection)((0, firestore_1.getFirestore)(), 'fleets'); };
        this.getFleetRef = function (id) { return (0, firestore_1.doc)(_this.getFleetsRef(), id); };
        this.getAppJustoFleetRef = function () { return _this.getFleetRef('appjusto'); };
    }
    return FirestoreRefs;
}());
exports.FirestoreRefs = FirestoreRefs;
//# sourceMappingURL=FirestoreRefs.js.map