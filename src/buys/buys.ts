/**
 * Interface for the Buys
 *  @category Buys
 * @interface Buy
 * @module Buys
 * @param {Category} category - The category of the buy
 * @param {Data} data - The data of the buy
 * @param {string} date - The date of the buy
 * @param {boolean} fullyHomologated - The fully homologated of the buy
 * @param {Image[]} images - The images of the buy
 * @param {Item[]} items - The items of the buy
 * @param {Receipt} receipt - The receipt of the buy
 * @param {string} status - The status of the buy
 * @param {string} user - The user of the buy
 * @param {number} xmlAttempts - The xml attempts of the buy
 * @param {string} xmlFoundStatus - The xml found status of the buy
 */
export interface Buy {
  category?: Category;
  data: Data;
  date: string;
  fullyHomologated: boolean;
  images?: Image[];
  items?: Item[];
  receipt?: Receipt;
  status?: string;
  user?: string;
  xmlAttempts?: number;
  xmlFoundStatus?: string;
}

export interface Category {
  id: string;
  name: string;
}

/**
 * Interface for the Data
 * @category Buys
 * @interface Data
 * @module Buys
 * @param {string} _23 - The _23 of the data - deprecated
 * @param {string} cod_otro_impuesto - The cod_otro_impuesto of the data
 */
export interface Data {
  /**
   * @deprecated
   */
  _23?: string;
  other_tax_code: string;
  non_recoverable_iva_code: string;
  acknowledgment_date: string;
  document_date: string;
  reception_date: string;
  folio: number;
  id: string;
  non_creditable_tax: string;
  fixed_asset_iva: string;
  non_recoverable_iva: string;
  non_withheld_iva: string;
  recoverable_iva: string;
  common_use_iva: string;
  exempt_amount: string;
  net_amount: string;
  fixed_asset_net_amount: string;
  n: string;
  nce_nde: string;
  period: string;
  business_name: string;
  supplier_rut: string;
  status: string;
  tobacco_cigarettes: string;
  processed_tobacco: string;
  pure_tobacco: string;
  other_tax_rate: string;
  purchase_type: string;
  doc_type: string;
  total: string;
  other_tax_value: string;
}

export interface Image {
  url: string;
}

export interface Item {
  CdgItem?: CdgItem;
  CodImpAdic?: string;
  DscItem?: string;
  MontoItem: number;
  NmbItem: string;
  NroLinDet: string;
  PrcItem?: number;
  QtyItem?: number;
  ReceiptOk?: boolean;
  UnmdItem?: string;
  homologate?: Homologate;
  homologateBy?: string;
  homologated?: boolean;
  homologatedType?: string;
  udm?: string;
}

export interface CdgItem {
  TpoCodigo: string[];
  VlrCodigo: string[];
}

export interface Homologate {
  code: string;
  factor?: number;
  name: string;
  qtyBuyFormat?: number;
  udm: string;
  udmBuyFormat: string;
}

/**
 * Interface for the Receipt
 * @todo Add missingObs and obs
 * @category Buys
 * @interface Receipt
 * @module Buys
 * @param {string} date - The date of the receipt
 * @param {null} missingObs - The missingObs of the receipt
 * @param {boolean} ndc - The ndc (nota de credito) of the receipt
 * @param {null} obs - The obs of the receipt
 *
 */
export interface Receipt {
  date: string;
  missingObs: null;
  ndc: boolean;
  obs: null;
}
