export interface Storagerequest {
    createdAt: string;
    createdBy: string;
    createdByName: string;
    id: string;
    items: Item[];
    number: number;
    pdfpath: string;
    status: string;
}
export interface Item {
    id: string;
    name: string;
    qty: number;
    unity: string;
}
