export interface Count {
    createdAt: CreatedAtObject;
    date: string;
    id: string;
    items: Item[];
    owner: Owner;
    status: string;
    total?: number;
}
export interface CreatedAtObject {
    x?: string;
}
export interface Item {
    active?: number;
    checked?: boolean;
    costCategory?: CostCategory | null;
    desc?: null | string;
    hierarchy?: string;
    homologatedWords?: string[];
    id: string;
    name: string;
    price?: number | null;
    priceInvoiceRef?: number | null;
    priceSupplier?: null | string;
    qty?: number;
    total?: number;
    toteatId?: string;
    udmConteo: UdmConteo[];
    unity: string;
    updatedAt?: UpdatedAtObject;
    updatedBy?: UpdatedBy;
}
export interface CostCategory {
    id: string;
    name: string;
}
export interface UdmConteo {
    convertion?: number;
    id?: string;
    info: boolean;
    name: string;
    qty?: number | null;
    udmBase?: string;
}
export interface UpdatedAtObject {
    nanoseconds?: number;
    seconds?: number;
    x?: string;
}
export interface UpdatedBy {
    id: string;
    name: string;
}
export interface Owner {
    name: string;
    userId: string;
}
