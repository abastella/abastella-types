// Auto-generated by Firefoo v1.5.11 on 2024-07-09 04:24:14 UTC

import { CostsCategory } from "./CostsCategory";

/**
 * Type de Restaurant
 * @category Index
 *
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
export type Restaurant = {
  activity?: string;
  address?: string;
  /**
   * Número o nombre del banco del restaurante.
   */
  bank?: number | string;
  bankAccount?: string;
  businessname?: string;
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
  suppliers?: string[];
  tempInventory?: TempInventory;
  tempSales?: TempSales;
};

/**
 * The ChartData type
 * @category Restaurant
 * @deprecated
 * @param isActive: boolean - Indicates whether the chart is active or not.
 * @param months:   Month[] - An array of Month objects representing the data for each month.
 * @returns ChartData
 *
 */
export type ChartData = {
  isActive: boolean;
  months: Month[];
};

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
 * The CogsByArea type
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
 * The Datum type
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
/**
 * Representa un dato.
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
 * The Inventory type
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
/**
 * Represents the inventory of a restaurant.
 */
export type Inventory = {
  /**
   * The final count of items in the inventory.
   */
  finalCount: number;

  /**
   * The final date of the inventory.
   */
  finalDate: string;

  /**
   * The final value of the inventory.
   */
  finalInventoryValue: number;

  /**
   * The final value of other supplies in the inventory.
   */
  finalOtherSuppliesValue?: number | null;

  /**
   * The final value of raw materials in the inventory.
   */
  finalRawMaterialValue?: number | null;

  /**
   * The initial count of items in the inventory.
   */
  initialCount: number;

  /**
   * The initial date of the inventory.
   */
  initialDate: string;

  /**
   * The initial value of the inventory.
   */
  initialInventoryValue: number;

  /**
   * The initial value of other supplies in the inventory.
   */
  initialOtherSuppliesValue?: number | null;

  /**
   * The initial value of raw materials in the inventory.
   */
  initialRawMaterialValue?: number | null;
};

/**
 * The PotentialSavings type
 * @param items:              Item[]
 * @param linkDetail:         string
 * @param savings:            number
 * @param savingsPercentage?: number | null
 * @returns PotentialSavings
 */
/**
 * Represents potential savings for a restaurant.
 */
export type PotentialSavings = {
  /**
   * The items associated with the potential savings.
   */
  items: Item[];

  /**
   * The link to the detailed information about the potential savings.
   */
  linkDetail: string;

  /**
   * The total savings amount.
   */
  savings: number;

  /**
   * The savings percentage (optional).
   */
  savingsPercentage?: number | null;
};

/**
 * The Item type
 * @param buys:        number
 * @param id:          number
 * @param name:        string
 * @param percentage?: number
 * @param savings:     number
 * @returns Item
 */
/**
 * Represents an item in a restaurant.
 */
export type Item = {
  /**
   * The number of items bought.
   */
  buys: number;
  /**
   * The unique identifier of the item.
   */
  id: number;
  /**
   * The name of the item.
   */
  name: string;
  /**
   * The percentage of savings for the item (optional).
   */
  percentage?: number;
  /**
   * The amount of savings for the item.
   */
  savings: number;
};

/**
 * The Resume type
 * @param accuracy?:                  number
 * @param buys:                       number
 * @param cogs:                       number
 * @param cogsChart:                  number[]
 * @param cogsImprovement?:           null | string
 * @param cogsImprovementLast?:       number | null
 * @param cogsImprovementPercentage?: number | null
 * @param cogsPercentage:             number
 * @param sales:                      number
 * @param warehouse?:                 number | null
 * @returns Resume
 *
 */
/**
 * Represents a resume object.
 */
export type Resume = {
  /**
   * The accuracy of the resume.
   */
  accuracy?: number;
  /**
   * The number of buys.
   */
  buys: number;
  /**
   * The cost of goods sold.
   */
  cogs: number;
  /**
   * An array representing the cost of goods sold chart.
   */
  cogsChart: number[];
  /**
   * The improvement in cost of goods sold.
   */
  cogsImprovement?: null | string;
  /**
   * The last improvement in cost of goods sold.
   */
  cogsImprovementLast?: number | null;
  /**
   * The percentage improvement in cost of goods sold.
   */
  cogsImprovementPercentage?: number | null;
  /**
   * The percentage of cost of goods sold.
   */
  cogsPercentage: number;
  /**
   * The number of sales.
   */
  sales: number;
  /**
   * The warehouse number.
   */
  warehouse?: number | null;
};

/**
 * The Sales type
 * @param cogs:   number[]
 * @param months: string[]
 * @param sales:  number[]
 * @returns Sales
 *
 */
/**
 * Represents the sales data for a restaurant.
 */
export type Sales = {
  /**
   * An array of cost of goods sold (COGS) values.
   */
  cogs: number[];

  /**
   * An array of month names corresponding to the sales data.
   */
  months: string[];

  /**
   * An array of sales values.
   */
  sales: number[];
};

/**
 * The TopProduct type
 * @param buys: number
 * @param id:   number
 * @param name: string
 * @returns TopProduct
 */
export type TopProduct = {
  buys: number;
  id: number;
  name: string;
};
/**
 * The TopSupplier type
 * @param buys: number
 * @param id:   number
 * @param name: string
 * @returns TopSupplier
 */
/**
 * The TopSupplier type
 * @category Restaurant
 * @param buys: number - The number of purchases made from this supplier.
 * @param id:   number - The unique identifier of the supplier.
 * @param name: string - The name of the supplier.
 * @returns TopSupplier
 */
export type TopSupplier = {
  buys: number;
  id: number;
  name: string;
};

/**
 * The Config type
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
 * The Toteat type
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
 * Type de Phones
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
 * The PriceList type
 * @todo normalizar
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
 * The StorageConfig type
 * @param requestCorrelative: number
 * @returns StorageConfig
 *
 */
export type StorageConfig = {
  requestCorrelative: number;
};

/**
 * The TempInventory type
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
 * The TempSales type
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
