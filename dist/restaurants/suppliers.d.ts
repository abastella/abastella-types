export interface Supplier {
    address: string;
    area: string;
    bank?: string;
    bankAccount?: string;
    bankAccountType?: string;
    classified?: string;
    contact: Contact;
    createdAt: string;
    deletedAt: null;
    fantasyName: string;
    giro: string;
    isReportDisabled?: null;
    name: string;
    operationRut?: null;
    operationType?: string;
    paymentDays?: number | string;
    rut: string;
}
export interface Contact {
    email: string;
    name: string;
    phone?: string;
}
