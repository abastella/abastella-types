import { Buy } from "../buys";
import { CostsCategory } from "./CostsCategory";
import { Count } from "./counts";
import { File } from "./file";
import { Homologation } from "./homologation";
import { Ingredient } from "./ingredients";
import { Supplier } from "./suppliers";
/**
 * @name - Type de Restaurant
 * @category Index
 * @interface Restaurant
 * @module Restaurant
 * @param activity?:               string - Actividad del restaurante.
 * @param address?:                string - Dirección del restaurante.
 * @param bank?:                   number | string - Número o nombre del banco del restaurante.
 * @param bankAccount?:            string - Cuenta bancaria del restaurante.
 * @param businessname?:           string - Nombre comercial del restaurante.
 * @param chartData?:              ChartData - Datos del gráfico.
 * @param config?:                 Config - Configuración del restaurante.
 * @param contact?:                string - Contacto del restaurante.
 * @param contactName?:            string - Nombre del contacto del restaurante.
 * @param costsCategories?:        CostsCategory[] - Categorías de costos del restaurante.
 * @param createdAt?:              string - Fecha de creación del restaurante.
 * @param disabled?:               boolean - Indica si el restaurante está deshabilitado o no.
 * @param email?:                  string - Correo electrónico del restaurante.
 * @param id:                      string - Identificador único del restaurante.
 * @param isCogsPerAreaActivated?: boolean - Indica si el costo de ventas se calcula por área o no.
 * @param lastSalesUpdate?:        string - Fecha de la última actualización de ventas del restaurante.
 * @param location:                string - Ubicación del restaurante.
 * @param logoBase64?:             string - Logo del restaurante en formato base64.
 * @param lookerStudio?:           string - Estudio de Looker del restaurante.
 * @param name:                    string - Nombre del restaurante.
 * @param phone?:                  string - Teléfono del restaurante.
 * @param phones?:                 Phones - Teléfonos del restaurante.
 * @param plan?:                   string - Plan del restaurante.
 * @param price?:                  string - Precio del restaurante.
 * @param priceList?:              PriceList - Lista de precios del restaurante.
 * @param rut?:                    string - RUT del restaurante.
 * @param storageConfig?:          StorageConfig - Configuración de almacenamiento del restaurante.
 * @param suppliers?:              string[] - Proveedores del restaurante.
 * @param tempInventory?:          TempInventory - Inventario temporal del restaurante.
 * @param tempSales?:              TempSales - Ventas temporales del restaurante.
 * @returns Restaurant
 *
 */
export interface Restaurant {
    activity?: string;
    address?: string;
    bank?: number | string;
    bankAccount?: string;
    businessname?: string;
    /**
     * @deprecated
     */
    /**
     * @deprecated
     */
    chartData?: ChartData;
    config?: Config;
    contact?: string;
    contactName?: string;
    costsCategories?: CostsCategory[];
    createdAt?: string;
    disabled?: boolean;
    email?: string;
    id: string;
    isCogsPerAreaActivated?: boolean;
    lastSalesUpdate?: string;
    location: string;
    logoBase64?: string;
    lookerStudio?: string;
    name: string;
    phone?: string;
    phones?: Phones;
    plan?: string;
    price?: string;
    priceList?: PriceList;
    rut?: string;
    storageConfig?: StorageConfig;
    suppliers?: Supplier[];
    tempInventory?: TempInventory;
    tempSales?: TempSales;
    buys?: Buy[];
    branches?: Branch[];
    categories?: any[];
    counts?: Count[];
    files?: File[];
    homologations: Homologation[];
    ingredients?: Ingredient[];
}
/**
 * @name - The ChartData type
 * @category Restaurant
 * @module Restaurant
 * @param isActive: boolean - Indica si esta activo o no.
 * @param months:   Month[] - Arreglo de meses, cada objeto representa datos por cada mes.
 * @returns ChartData
 *
 */
export interface ChartData {
    isActive: boolean;
    months: Month[];
}
/**
 * The Month type
 * @param cogsByArea:       CogsByArea -
 * @param inventory:        Inventory - Inventario del mes.
 * @param name:             string - Nombre del mes.
 * @param potentialSavings: PotentialSavings - Ahorros potenciales.
 * @param resume:           Resume - Resumen del mes.
 * @param sales:            Sales - Ventas del mes.
 * @param topProducts:      TopProduct[] - Productos más vendidos.
 * @param topSuppliers:     TopSupplier[] - Proveedores más importantes.
 * @returns Month
 *
 */
export type Month = {
    cogsByArea: CogsByArea;
    inventory: Inventory;
    name: string;
    potentialSavings: PotentialSavings;
    resume: Resume;
    sales: Sales;
    topProducts: TopProduct[];
    topSuppliers: TopSupplier[];
};
/**
 * @name - CogsByArea type
 * @param active:      boolean - Indica si el costo de ventas por área está activado o no.
 * @param areas:       string[] - Nombres de las áreas.
 * @param cogsAmount:  number[] - Montos de costo de ventas.
 * @param cogsPercent: number[] - Porcentajes de costo de ventas.
 * @param cogsSales:   number[] - Ventas de costo de ventas.
 * @param data?:       Datum[] - Datos.
 * @returns CogsByArea
 */
export type CogsByArea = {
    active: boolean;
    areas: string[];
    cogsAmount: number[];
    cogsPercent: number[];
    cogsSales: number[];
    data?: Datum[];
};
/**
 * @name - Datum type
 * @param area:           string - Nombre del área.
 * @param areaPercentage: number - Porcentaje del área.
 * @param chartColor:     string - Color del gráfico.
 * @param chartName:      string - Nombre del gráfico.
 * @param cogs:           number - Costo de ventas.
 * @param cogsPercentage: number - Porcentaje del costo de ventas.
 * @param color:          string - Color.
 * @param sales:          number - Ventas.
 * @returns Datum
 */
export type Datum = {
    area: string;
    areaPercentage: number;
    chartColor: string;
    chartName: string;
    cogs: number;
    cogsPercentage: number;
    color: string;
    sales: number;
};
/**
 * @name - The Inventory type
 * @param finalCount:                 number
 * @param finalDate:                  string
 * @param finalInventoryValue:        number
 * @param finalOtherSuppliesValue?:   number | null
 * @param finalRawMaterialValue?:     number | null
 * @param initialCount:               number
 * @param initialDate:                string
 * @param initialInventoryValue:      number
 * @param initialOtherSuppliesValue?: number | null
 * @param initialRawMaterialValue?:   number | null
 * @returns Inventory
 */
export type Inventory = {
    finalCount: number;
    finalDate: string;
    finalInventoryValue: number;
    finalOtherSuppliesValue?: number | null;
    finalRawMaterialValue?: number | null;
    initialCount: number;
    initialDate: string;
    initialInventoryValue: number;
    initialOtherSuppliesValue?: number | null;
    initialRawMaterialValue?: number | null;
};
/**
 * @name - PotentialSavings type
 * @param items:              Item[] - Arreglo de items.
 * @param linkDetail:         string - Enlace al detalle.
 * @param savings:            number - Ahorros.
 * @param savingsPercentage?: number | null - Porcentaje de ahorros.
 * @returns PotentialSavings
 */
export type PotentialSavings = {
    items: Item[];
    linkDetail: string;
    savings: number;
    savingsPercentage?: number | null;
};
/**
 * @name - Item type
 * @param buys:        number - Compras.
 * @param id:          number - Identificador único.
 * @param name:        string - Nombre.
 * @param percentage?: number - Porcentaje.
 * @param savings:     number - Ahorros.
 * @returns Item
 */
export interface Item {
    buys: number;
    id: number;
    name: string;
    percentage?: number;
    savings: number;
}
/**
 * @name - Resume type
 * @param accuracy?:                  number - Precisión.
 * @param buys:                       number - Compras.
 * @param cogs:                       number - Costo de las mercancías vendidas (COGS).
 * @param cogsChart:                  number[] - Valores del costo de las mercancías vendidas (COGS).
 * @param cogsImprovement?:           null | string - Mejora del costo de las mercancías vendidas (COGS).
 * @param cogsImprovementLast?:       number | null - Última mejora del costo de las mercancías vendidas (COGS).
 * @param cogsImprovementPercentage?: number | null - Porcentaje de mejora del costo de las mercancías vendidas (COGS).
 * @param cogsPercentage:             number - Porcentaje del costo de las mercancías vendidas (COGS).
 * @param sales:                      number - Ventas.
 * @param warehouse?:                 number | null - Almacén / bodega
 * @returns Resume
 *
 */
export type Resume = {
    accuracy?: number;
    buys: number;
    cogs: number;
    cogsChart: number[];
    cogsImprovement?: null | string;
    cogsImprovementLast?: number | null;
    cogsImprovementPercentage?: number | null;
    cogsPercentage: number;
    sales: number;
    warehouse?: number | null;
};
/**
 * @name - Sales type
 * @param cogs:   number[] - Valores del coste de las mercancías vendidas (COGS).
 * @param months: string[] - Nombres de los meses correspondientes a los datos de ventas.
 * @param sales:  number[] - Valores de las ventas.
 * @returns Sales
 *
 */
export type Sales = {
    cogs: number[];
    months: string[];
    sales: number[];
};
/**
 * @name - TopProduct type
 * @param buys: number - Numero de compras del producto.
 * @param id:   number - Identificador único del producto.
 * @param name: string - Nombre del producto.
 * @returns TopProduct
 */
export type TopProduct = {
    buys: number;
    id: number;
    name: string;
};
/**
 * @name - TopSupplier type
 * @category Restaurant
 * @param buys: number - Numero de compras del proveedor.
 * @param id:   number - Identificador único del proveedor.
 * @param name: string - Nombre del proveedor.
 * @returns TopSupplier
 */
export type TopSupplier = {
    buys: number;
    id: number;
    name: string;
};
/**
 * @name - Config type
 * @param biller?:         null | string
 * @param billerPassword?: null | string
 * @param billerToken?:    null | string
 * @param billerUser?:     null | string
 * @param maimagToken:     string
 * @param slack?:          string
 * @param toteat?:         Toteat
 * @returns Config
 */
export type Config = {
    biller?: null | string;
    billerPassword?: null | string;
    billerToken?: null | string;
    billerUser?: null | string;
    maimagToken?: string;
    slack?: string;
    toteat?: Toteat;
};
/**
 * @name - Toteat type
 * @param xapitoken?: string
 * @param xid?:       string
 * @param xil?:       string
 * @param xir?:       string
 * @param xiu?:       string
 * @param xtot1:      number
 * @returns Toteat
 *
 */
export type Toteat = {
    xapitoken?: string;
    xid?: string;
    xil?: string;
    xir?: string;
    xiu?: string;
    xtot1: number;
};
/**
 * @name - Type de Phones
 * @summary Los teléfonos del restaurante son un listado, pero hay que normalizar el type
 * {@link Restaurant.phone} other declaration
 *
 */
export type Phones = {
    /**
     * Normalizar a un listado de teléfonos
     */
    qzwFmqYrltCicCl1zP5P: string;
};
/**
 * @name - PriceList type
 * @todo Refactor to PriceList
 * @param lsA9C12WvJjSH8EOWxym?: string
 * @param qzwFmqYrltCicCl1zP5P?: string
 * @returns PriceList
 *
 */
export type PriceList = {
    lsA9C12WvJjSH8EOWxym?: string;
    qzwFmqYrltCicCl1zP5P?: string;
};
/**
 * @name - StorageConfig type
 * @param requestCorrelative: number
 * @returns StorageConfig
 *
 */
export type StorageConfig = {
    requestCorrelative: number;
};
/**
 * @name - TempInventory type
 * @summary Refactor to TempInventory
 */
export type TempInventory = {
    "202311"?: number;
    "202312"?: number;
    "202401"?: number;
    "202402"?: number;
    "202403"?: number;
    "202404"?: number;
    "202405"?: number;
    "202406"?: number;
};
/**
 * @name - TempSales type
 * @summary Refactor to TempSales
 */
export type TempSales = {
    "202303"?: number;
    "202304"?: number;
    "202305"?: number;
    "202306"?: number;
    "202307"?: number;
    "202308"?: number;
    "202309"?: number;
    "202310"?: number;
    "202311"?: number;
    "202311-LjGmKHVLvv2c8fNiLRHa"?: number;
    "202311-ah7IU24M8bsm9FPbmHzj"?: number;
    "202311-xMkwNDkNZJrV4KXI4XVe"?: number;
    "202312"?: number;
    "202312-LjGmKHVLvv2c8fNiLRHa"?: number;
    "202312-Tf29DjGSnc3Qarq3yTm5"?: number;
    "202312-ah7IU24M8bsm9FPbmHzj"?: number;
    "202312-xMkwNDkNZJrV4KXI4XVe"?: number;
    "202401"?: number;
    "202402"?: number;
    "202403"?: number;
    "202404"?: number;
    "202404-ah7IU24M8bsm9FPbmHzj"?: number;
    "202405"?: number;
    "202405-ah7IU24M8bsm9FPbmHzj"?: number;
    "202405-nMVcV5ns3qNTER7AV8En"?: number;
    "202405-u2SV9AvIzKaaQ4suJ1bl"?: number;
    "202405-xMkwNDkNZJrV4KXI4XVe"?: number;
    "202406"?: number;
    "202406-ah7IU24M8bsm9FPbmHzj"?: number;
    "202406-nMVcV5ns3qNTER7AV8En"?: number;
    "202406-u2SV9AvIzKaaQ4suJ1bl"?: number;
    "202406-xMkwNDkNZJrV4KXI4XVe"?: number;
    "202407"?: number;
    "202407-ah7IU24M8bsm9FPbmHzj"?: number;
    "202407-nMVcV5ns3qNTER7AV8En"?: number;
    "202407-u2SV9AvIzKaaQ4suJ1bl"?: number;
    "202407-xMkwNDkNZJrV4KXI4XVe"?: number;
    updatedAt?: string;
    updatedBy?: string;
};
/**
 * @name - Branch type
 * @category Restaurant
 * @module Restaurant
 * @param address:    string - The address of the branch.
 * @param comuna:     null - The comuna of the branch.
 * @param createdAt:  string - The creation date of the branch.
 * @param deletedAt:  null - The deletion date of the branch.
 * @param deletedBy:  null - The deletion user of the branch.
 * @param name:       string - The name of the branch.
 * @param principal:  boolean - Indicates if the branch is the principal one.
 * @param updatedAt:  string - The update date of the branch.
 * @returns Branch
 */
export interface Branch {
    address: string;
    comuna: null;
    createdAt: string;
    deletedAt: null;
    deletedBy: null;
    name: string;
    principal: boolean;
    updatedAt: string;
}
