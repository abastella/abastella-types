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
 * @param {string} xmlEntryType - Identify type of xml upload
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
    xmlEntryType?: string;
}
/**
 * Interface representing a file.
 * @category Files
 * @interface File
 * @module Files
 * @param {string} comment - The comment associated with the file
 * @param {string} date - The date when the file was added
 * @param {string} downloadURL - The URL to download the file
 * @param {string} id - The unique identifier for the file
 * @param {string} invoiceNumber - The invoice number associated with the file
 * @param {string} status - The status of the file
 * @param {string} type - The type of the file
 * @param {string} user - The user who uploaded the file
 * @param {string} userEmail - The email of the user who uploaded the file
 * @param {string} userName - The name of the user who uploaded the file
 */
export interface File {
    comment: string;
    date: string;
    downloadURL: string;
    id: string;
    invoiceNumber: string;
    status?: string;
    type: string;
    user: string;
    userEmail: string;
    userName: string;
}
/**
 * Interface for the Buy category
 * @category Buys
 * @interface Category
 * @module Buys
 * @param {string} id - The ID of the category
 * @param {string} name - The name of the category
 */
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
 * @param {string} other_tax_code - The other tax code of the data
 * @param {string} non_recoverable_iva_code - The non-recoverable IVA code of the data
 * @param {string} acknowledgment_date - The acknowledgment date of the data
 * @param {string} document_date - The document date of the data
 * @param {string} reception_date - The reception date of the data
 * @param {number} folio - The folio of the data
 * @param {string} id - The ID of the data
 * @param {string} non_creditable_tax - The non-creditable tax of the data
 * @param {string} fixed_asset_iva - The fixed asset IVA of the data
 * @param {string} non_recoverable_iva - The non-recoverable IVA of the data
 * @param {string} non_withheld_iva - The non-withheld IVA of the data
 * @param {string} recoverable_iva - The recoverable IVA of the data
 * @param {string} common_use_iva - The common use IVA of the data
 * @param {string} exempt_amount - The exempt amount of the data
 * @param {string} net_amount - The net amount of the data
 * @param {string} fixed_asset_net_amount - The fixed asset net amount of the data
 * @param {string} n - The N of the data
 * @param {string} nce_nde - The NCE/NDE of the data
 * @param {string} period - The period of the data
 * @param {string} business_name - The business name of the data
 * @param {string} supplier_rut - The supplier RUT of the data
 * @param {string} status - The status of the data
 * @param {string} tobacco_cigarettes - The tobacco cigarettes of the data
 * @param {string} processed_tobacco - The processed tobacco of the data
 * @param {string} pure_tobacco - The pure tobacco of the data
 * @param {string} other_tax_rate - The other tax rate of the data
 * @param {string} purchase_type - The purchase type of the data
 * @param {string} doc_type - The document type of the data
 * @param {string} total - The total of the data
 * @param {string} other_tax_value - The other tax value of the data
 */
export interface Data {
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
/**
 * Interface for the Image
 * @category Buys
 * @interface Image
 * @module Buys
 * @param {string} url - The URL of the image
 */
export interface Image {
    url: string;
}
/**
 * Interface for the Item
 * @category Buys
 * @interface Item
 * @module Buys
 * @param {CdgItem} CdgItem - The CdgItem of the item
 * @param {string} CodImpAdic - The CodImpAdic of the item
 * @param {string} DscItem - The DscItem of the item
 * @param {number} MontoItem - The MontoItem of the item
 * @param {string} NmbItem - The NmbItem of the item
 * @param {string} NroLinDet - The NroLinDet of the item
 * @param {number} PrcItem - The PrcItem of the item
 * @param {number} QtyItem - The QtyItem of the item
 * @param {boolean} ReceiptOk - The ReceiptOk of the item
 * @param {string} UnmdItem - The UnmdItem of the item
 * @param {Homologate} homologate - The homologate of the item
 * @param {string} homologateBy - The homologateBy of the item
 * @param {boolean} homologated - The homologated of the item
 * @param {string} homologatedType - The homologatedType of the item
 * @param {string} udm - The udm of the item
 */
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
/**
 * Interface for the CdgItem
 * @category Buys
 * @interface CdgItem
 * @module Buys
 * @param {string[]} TpoCodigo - The TpoCodigo of the CdgItem
 * @param {string[]} VlrCodigo - The VlrCodigo of the CdgItem
 */
export interface CdgItem {
    TpoCodigo: string[];
    VlrCodigo: string[];
}
/**
 * Interface for the Homologate
 * @category Buys
 * @interface Homologate
 * @module Buys
 * @param {string} code - The code of the homologate
 * @param {number} factor - The factor of the homologate
 * @param {string} name - The name of the homologate
 * @param {number} qtyBuyFormat - The qtyBuyFormat of the homologate
 * @param {string} udm - The udm of the homologate
 * @param {string} udmBuyFormat - The udmBuyFormat of the homologate
 */
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
 */
export interface Receipt {
    date: string;
    missingObs: null;
    ndc: boolean;
    obs: null;
}
