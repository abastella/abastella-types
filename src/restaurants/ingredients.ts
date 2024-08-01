// exmple db : restaurants/HYC3MglWTR5ganVGvwlZ/ingredients
/**
 * @name - Ingredient type
 * @category Restaurant/Ingredients
 * @description Ingredient es el tipo de Ingredientes para la collection ingredients de un restaurante
 */
export interface Ingredient {
  active: number;
  alert?: boolean;
  costCategory: CostCategory;
  createdAt?: string;
  createdBy?: CreatedBy;
  desc?: null | string;
  hierarchy?: null | string;
  homologatedWords?: string[];
  id: string;
  isPotentialSavings?: boolean;
  minStock?: null;
  name: string;
  toteatId: string;
  udmConteo?: UdmConteo[];
  unity: string;
  ingredientType: string | "premade" | "rawMaterial";
  premadeMaterialData: PremadeMaterialData[];
}
/**
 * @nme - CostCategory type
 * @category Restaurant/Ingredients
 * @description CostCategory type es un tipo de CostCategory de Ingredients
 * @param id:   string - identificador
 * @param name: string - nombre
 * @returns CostCategory
 */
export interface CostCategory {
  id: string;
  name: string;
}

/**
 * @name - CreatedBy type
 * @category Restaurant/Ingredients
 * @param id:   string - identificador
 * @param name: string - nombre
 * @returns CreatedBy
 */
export interface CreatedBy {
  id: string;
  name: string;
}

/**
 * @name - UdmConteo type
 * @category Restaurant/Ingredients
 * @description UdmConteo es unidad de medida de conteo
 * @param convertion?: number - conversion
 * @param id:          string - identificador
 * @param name:        string - nombre
 * @param udmBase:     string - udmBase
 * @returns UdmConteo
 */
export interface UdmConteo {
  convertion?: number;
  id: string;
  name: string;
  udmBase: string;
}
export interface PremadeMaterialData {
  /**
   * @name ingredientId
   * @description Id del ingrediente
   */
  ingredientId: string;
  qty: number;
  udm: string; // este id no está definido en ningún lado
}
