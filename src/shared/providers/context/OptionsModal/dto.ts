export interface IProductInfo {
  name: string;
}

export interface IOptionsModalProps {
  closeOptionsModal: () => void;
  openOptionsModal: () => void;
  showOptionsModal: boolean;
  setProductInfo: (object: IProductInfo) => void;
  productInfo: IProductInfo;
}
