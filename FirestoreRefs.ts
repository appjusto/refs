import { collection, doc, Firestore } from 'firebase/firestore';

export default class FirestoreRefs {
  constructor(private firestore: Firestore) {}

  // recommendations
  getRecommendationsRef = () => collection(this.firestore, 'recommendations');

  // withdraws
  getWithdrawsRef = () => collection(this.firestore, 'withdraws');

  // reviews
  getReviewsRef = () => collection(this.firestore, 'reviews');
  getReviewRef = (id: string) => doc(collection(this.firestore, 'reviews'), id);

  // platform
  getPlatformRef = () => collection(this.firestore, 'platform');

  // platform docs
  getPlatformParamsRef = () => doc(this.getPlatformRef(), 'params');
  getPlatformStatisticsRef = () => doc(this.getPlatformRef(), 'statistics');
  getPlatformCitiesStatisticsRef = () =>
    collection(this.getPlatformStatisticsRef(), 'cities');
  getPlatformCityStatisticsRef = (name: string) =>
    doc(this.getPlatformCitiesStatisticsRef(), name);
  getPlatformDatasRef = () => doc(this.getPlatformRef(), 'data');
  getPlatformLogsRef = () => doc(this.getPlatformRef(), 'logs');
  getPlatformAccessRef = () => doc(this.getPlatformRef(), 'access');

  // platform data subcollections
  getBanksRef = () => collection(this.getPlatformDatasRef(), 'banks');
  getIssuesRef = () => collection(this.getPlatformDatasRef(), 'issues');
  getCuisinesRef = () => collection(this.getPlatformDatasRef(), 'cuisines');
  getClassificationsRef = () =>
    collection(this.getPlatformDatasRef(), 'classifications');
  getReviewTagsRef = () => collection(this.getPlatformDatasRef(), 'reviewTags');

  // platform logs subcollections
  getPlatformLoginLogsRef = () =>
    collection(this.getPlatformLogsRef(), 'logins');

  // businesses
  getBusinessesRef = () => collection(this.firestore, 'businesses');
  getBusinessRef = (id: string) => doc(this.getBusinessesRef(), id);

  // business menu
  getBusinessMenuMessageRef = (businessId: string) =>
    doc(collection(this.getBusinessRef(businessId), 'menu'), 'message');
  getBusinessCategoriesRef = (businessId: string) =>
    collection(this.getBusinessRef(businessId), 'categories');
  getBusinessCategoryRef = (businessId: string, categoryId: string) =>
    doc(this.getBusinessCategoriesRef(businessId), categoryId);
  getBusinessProductsRef = (businessId: string) =>
    collection(this.getBusinessRef(businessId), 'products');
  getBusinessProductRef = (businessId: string, id: string) =>
    doc(this.getBusinessProductsRef(businessId), id);
  getBusinessComplementsGroupsRef = (businessId: string) =>
    collection(this.getBusinessRef(businessId), 'complementsgroups');
  getBusinessComplementGroupRef = (businessId: string, groupId: string) =>
    doc(this.getBusinessComplementsGroupsRef(businessId), groupId);
  getBusinessComplementsRef = (businessId: string) =>
    collection(this.getBusinessRef(businessId), 'complements');
  getBusinessComplementRef = (businessId: string, complementId: string) =>
    doc(this.getBusinessComplementsRef(businessId), complementId);
  getBusinessMenuOrderingRef = (
    businessId: string,
    menuId: string = 'default'
  ) => doc(collection(this.getBusinessRef(businessId), 'menu'), menuId);

  // managers
  getManagersRef = () => collection(this.firestore, 'managers');
  getManagerRef = (managerId: string) =>
    doc(collection(this.firestore, 'managers'), managerId);

  // orders
  getOrdersRef = () => collection(this.firestore, 'orders');
  getOrderRef = (id: string) => doc(this.getOrdersRef(), id);
  getOrderChatRef = (id: string) =>
    collection(doc(this.getOrdersRef(), id), 'chat');
  getOrderChatMessageRef = (orderId: string, id: string) =>
    doc(this.getOrderChatRef(orderId), id);
  getOrderIssuesRef = (id: string) =>
    collection(doc(this.getOrdersRef(), id), 'issues');
  getOrderPrivateRef = (id: string) =>
    collection(doc(this.getOrdersRef(), id), 'private');
  getOrderCancellationRef = (orderId: string) =>
    doc(this.getOrderPrivateRef(orderId), 'cancellation');
  getOrderConfirmationRef = (id: string) =>
    doc(this.getOrderPrivateRef(id), 'confirmation');
  getOrderLogsRef = (id: string) => collection(this.getOrderRef(id), 'logs');

  // chats
  getChatsRef = () => collection(this.firestore, 'chats');
  getChatMessageRef = (messageId: string) => doc(this.getChatsRef(), messageId);

  // consumers
  getConsumersRef = () => collection(this.firestore, 'consumers');
  getConsumerRef = (id: string) => doc(this.getConsumersRef(), id);

  // users
  getUsersRef = () => collection(this.firestore, 'users');
  getUsersSubcollectionsRef = () => doc(this.getUsersRef(), 'subcollections');
  getUsersChangesRef = () =>
    collection(this.getUsersSubcollectionsRef(), 'changes');

  // couriers
  getCouriersRef = () => collection(this.firestore, 'couriers');
  getCourierRef = (id: string) => doc(this.getCouriersRef(), id);
  getCourierReviewsRef = (id: string) =>
    collection(this.getCourierRef(id), 'reviews');
  getCourierRequestsRef = (id: string) =>
    collection(this.getCourierRef(id), 'requests');
  getCourierOrderRequestsRef = (courierId: string, orderId: string) =>
    doc(this.getCourierRequestsRef(courierId), orderId);

  // fleets
  getFleetsRef = () => collection(this.firestore, 'fleets');
  getFleetRef = (id: string) => doc(this.getFleetsRef(), id);
  getAppJustoFleetRef = () => this.getFleetRef('appjusto');

  // storage
  // courier
  getCourierSelfiePath = (courierId: string, size?: string) =>
    `couriers/${courierId}/selfie${size ? `_${size}` : ''}.jpg`;
  getCourierDocumentPath = (courierId: string, size?: string) =>
    `couriers/${courierId}/document${size ? `_${size}` : ''}.jpg`;

  // orders
  getOrderPODPackagePath = (orderId: string, courierId: string) =>
    `orders/${orderId}/${courierId}/package.jpg`;
  getOrderPODFrontPath = (orderId: string, courierId: string) =>
    `orders/${orderId}/${courierId}/front.jpg`;

  // business
  getBusinessStoragePath = (businessId: string) => `businesses/${businessId}`;
  getBusinessLogoUploadStoragePath = (businessId: string) =>
    `${this.getBusinessStoragePath(businessId)}/logo.jpg`;
  getBusinessLogoStoragePath = (businessId: string) =>
    `${this.getBusinessStoragePath(businessId)}/logo_240x240.jpg`;
  getBusinessCoverUploadStoragePath = (businessId: string) =>
    `${this.getBusinessStoragePath(businessId)}/cover.jpg`;
  getBusinessCoverStoragePath = (businessId: string) =>
    `${this.getBusinessStoragePath(businessId)}/cover_1008x360.jpg`;
  getProductsStoragePath = (businessId: string) =>
    `${this.getBusinessStoragePath(businessId)}/products`;
  getProductImageStoragePath = (
    businessId: string,
    productId: string,
    size: string
  ) => `${this.getProductsStoragePath(businessId)}/${productId}_${size}.jpg`;
  getComplementsStoragePath = (businessId: string) =>
    `${this.getBusinessStoragePath(businessId)}/complements`;
  getComplementUploadStoragePath = (businessId: string, complementId: string) =>
    `${this.getComplementsStoragePath(businessId)}/${complementId}_288x288.jpg`;
  getComplementImageStoragePath = (businessId: string, complementId: string) =>
    `${this.getComplementsStoragePath(businessId)}/${complementId}_288x288.jpg`;
}
