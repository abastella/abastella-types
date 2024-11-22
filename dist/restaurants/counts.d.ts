/**
 * Representa un conteo de inventario realizado en un restaurante
 * @interface Count
 */
export interface Count {
    /** Objeto que contiene información sobre la fecha de creación */
    createdAt: CreatedAtObject;
    /** Fecha en la que se realizó el conteo */
    date: string;
    /** Identificador único del conteo */
    id: string;
    /** Lista de items incluidos en el conteo */
    items: CountItem[];
    /** Información del propietario del conteo */
    owner: Owner;
    /** Estado actual del conteo */
    status: string;
    /** Monto total del conteo (opcional) */
    total?: number;
}
/**
 * Objeto que representa la fecha de creación
 * @interface CreatedAtObject
 */
export interface CreatedAtObject {
    /** Valor de timestamp en formato string (opcional) */
    x?: string;
}
/**
 * Representa un ítem dentro del conteo de inventario
 * @interface CountItem
 */
export interface CountItem {
    /** Indica si el ítem está activo (opcional) */
    active?: number;
    /** Indica si el ítem ha sido verificado (opcional) */
    checked?: boolean;
    /** Categoría de costo asociada al ítem (opcional) */
    costCategory?: CostCategory | null;
    /** Descripción del ítem (opcional) */
    desc?: null | string;
    /** Jerarquía del ítem en la estructura de productos (opcional) */
    hierarchy?: string;
    /** Palabras homologadas para búsqueda (opcional) */
    homologatedWords?: string[];
    /** Identificador único del ítem */
    id: string;
    /** Nombre del ítem */
    name: string;
    /** Precio del ítem (opcional) */
    price?: number | null;
    /** Precio de referencia de factura (opcional) */
    priceInvoiceRef?: number | null;
    /** Precio del proveedor (opcional) */
    priceSupplier?: null | string;
    /** Cantidad contada (opcional) */
    qty?: number;
    /** Total calculado para el ítem (opcional) */
    total?: number;
    /** ID de referencia en Toteat (opcional) */
    toteatId?: string;
    /** Unidades de medida utilizadas en el conteo */
    udmConteo: UdmConteo[];
    /** Unidad de medida principal */
    unity: string;
    /** Información de última actualización (opcional) */
    updatedAt?: UpdatedAtObject;
    /** Usuario que realizó la última actualización (opcional) */
    updatedBy?: UpdatedBy;
}
/**
 * Representa una categoría de costo
 * @interface CostCategory
 */
export interface CostCategory {
    /** Identificador único de la categoría */
    id: string;
    /** Nombre de la categoría */
    name: string;
}
/**
 * Representa una unidad de medida utilizada en el conteo
 * @interface UdmConteo
 */
export interface UdmConteo {
    /** Factor de conversión a la unidad base (opcional) */
    convertion?: number;
    /** Identificador único de la unidad de medida (opcional) */
    id?: string;
    /** Indica si contiene información adicional */
    info: boolean;
    /** Nombre de la unidad de medida */
    name: string;
    /** Cantidad en esta unidad de medida (opcional) */
    qty?: number | null;
    /** Unidad de medida base para conversiones (opcional) */
    udmBase?: string;
}
/**
 * Objeto que representa la fecha de última actualización
 * @interface UpdatedAtObject
 */
export interface UpdatedAtObject {
    /** Nanosegundos del timestamp (opcional) */
    nanoseconds?: number;
    /** Segundos del timestamp (opcional) */
    seconds?: number;
    /** Valor de timestamp en formato string (opcional) */
    x?: string;
}
/**
 * Información del usuario que realizó la última actualización
 * @interface UpdatedBy
 */
export interface UpdatedBy {
    /** Identificador único del usuario */
    id: string;
    /** Nombre del usuario */
    name: string;
}
/**
 * Información del propietario del conteo
 * @interface Owner
 */
export interface Owner {
    /** Nombre del propietario */
    name: string;
    /** ID del usuario propietario */
    userId: string;
}
