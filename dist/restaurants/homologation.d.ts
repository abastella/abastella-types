export interface Homologation {
    createdAt: string;
    homologationFactor?: number | null;
    homologationIngredientId?: null | string;
    homologationIngredientName?: null | string;
    homologationPriceByUdm: number;
    homologationQtyByUdm: number;
    homologationSubTotal: number;
    homologationType: string;
    homologationUdm?: null | string;
    id: string;
    ingredientDiscountAmount: number;
    ingredientSupplierCode: string;
    ingredientSupplierDescription: string;
    ingredientSupplierName: string;
    ingredientSupplierQty: number;
    ingredientSupplierSubTotal: number;
    ingredientSupplierUdm: string;
    ingredientSupplierUnitPrice?: number;
    invoiceDate: string;
    invoiceDiscounts: number;
    invoiceDiscountsRef: null;
    invoiceId: number;
    invoiceLineId: string;
    invoicePeriod: string;
    invoiceShippingAmount: number;
    invoiceSupplierDNI: string;
    invoiceSupplierFantasyName: string;
    invoiceSupplierName: string;
    invoiceTotal: string;
    shippingAmount: number;
}