import {
  CancelOrderPayload,
  CompleteDeliveryPayload,
  DeletePaymentMethodPayload,
  DropOrderPayload,
  Fare,
  FetchAccountInformationPayload,
  FetchAccountInformationResponse,
  FetchAdvanceSimulationPayload,
  FetchReceivablesPayload,
  GetCancellationInfoPayload,
  GetCancellationInfoResult,
  GetOrderQuotesPayload,
  MatchOrderPayload,
  NextDispatchingStatePayload,
  PlaceOrderPayload,
  QueryGoogleMapsPayload,
  RejectOrderPayload,
  RequestWithdrawPayload,
  SavePaymentTokenPayload,
  SavePaymentTokenResponse,
  TipCourierPayload,
  UpdateOrderPayload,
} from '@appjusto/types';
import {
  IuguMarketplaceAccountAdvanceSimulation,
  IuguMarketplaceAccountReceivables,
  IuguMarketplaceAccountWithdrawResponse,
} from '@appjusto/types/payment/iugu';
import { getFunctions, httpsCallable } from 'firebase/functions';

export class FunctionsRef {
  constructor() {}

  getVerifyProfileCallable = () =>
    httpsCallable(getFunctions(), 'verifyProfile');
  getFetchAccountInformationCallable = () =>
    httpsCallable<
      FetchAccountInformationPayload,
      FetchAccountInformationResponse
    >(getFunctions(), 'fetchAccountInformation');
  getFetchReceivablesCallable = () =>
    httpsCallable<FetchReceivablesPayload, IuguMarketplaceAccountReceivables>(
      getFunctions(),
      'fetchReceivables'
    );
  getFetchAdvanceSimulationCallable = () =>
    httpsCallable<
      FetchAdvanceSimulationPayload,
      IuguMarketplaceAccountAdvanceSimulation
    >(getFunctions(), 'fetchAdvanceSimulation');
  getRequestWithdrawCallable = () =>
    httpsCallable<
      RequestWithdrawPayload,
      IuguMarketplaceAccountWithdrawResponse
    >(getFunctions(), 'requestWithdraw');
  getAdvanceReceivablesCallable = () =>
    httpsCallable(getFunctions(), 'advanceReceivables');
  getDeleteAccountCallable = () =>
    httpsCallable(getFunctions(), 'deleteAccount');
  getServerTimeCallable = () => httpsCallable(getFunctions(), 'getServerTime');
  // consumer
  getSavePaymentTokenCallable = () =>
    httpsCallable<SavePaymentTokenPayload, SavePaymentTokenResponse>(
      getFunctions(),
      'savePaymentToken'
    );
  getDeletePaymentMethodCallable = () =>
    httpsCallable<DeletePaymentMethodPayload, void>(
      getFunctions(),
      'deletePaymentMethod'
    );
  getCreateOrderCallable = () => httpsCallable(getFunctions(), 'createOrder');
  getGetOrderQuotesCallable = () =>
    httpsCallable<GetOrderQuotesPayload, Fare[]>(
      getFunctions(),
      'getOrderQuotes'
    );
  getPlaceOrderCallable = () =>
    httpsCallable<PlaceOrderPayload, void>(getFunctions(), 'placeOrder');
  getCancelOrderCallable = () =>
    httpsCallable<CancelOrderPayload, void>(getFunctions(), 'cancelOrder');
  getTipCourierCallable = () =>
    httpsCallable<TipCourierPayload, void>(getFunctions(), 'tipCourier');
  getCancellationInfoCallable = () =>
    httpsCallable<GetCancellationInfoPayload, GetCancellationInfoResult>(
      getFunctions(),
      'getCancellationInfo'
    );
  getUpdateOrderCallable = () =>
    httpsCallable<UpdateOrderPayload, void>(getFunctions(), 'updateOrder');
  getQueryGoogleMapsCallable = () =>
    httpsCallable<QueryGoogleMapsPayload, any>(
      getFunctions(),
      'queryGoogleMaps'
    );
  // courier
  getMatchOrderCallable = () =>
    httpsCallable<MatchOrderPayload, void>(getFunctions(), 'matchOrder');
  getRejectOrderCallable = () =>
    httpsCallable<RejectOrderPayload, void>(getFunctions(), 'rejectOrder');
  getDropOrderCallable = () =>
    httpsCallable<DropOrderPayload, void>(getFunctions(), 'dropOrder');
  getNextDispatchingStateCallable = () =>
    httpsCallable<NextDispatchingStatePayload, void>(
      getFunctions(),
      'nextDispatchingState'
    );
  getCompleteDeliveryCallable = () =>
    httpsCallable<CompleteDeliveryPayload, void>(
      getFunctions(),
      'completeDelivery'
    );

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
