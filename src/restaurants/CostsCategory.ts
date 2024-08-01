
/**
 * CostsCategory type
 * @category Restaurant
 * @description CostsCategory type es un tipo de categoría de costos
 * @param canDelete:   boolean - Indicador de si puede ser borrado
 * @param children:    CostsCategoryChild[] - listado de children
 * @param correlative: number - correlativo
 * @param id:          string - identificador
 * @param label:       string - etiqueta
 * @returns CostsCategory
 * 
 */
export type CostsCategory = {
    canDelete:   boolean;
    children:    CostsCategoryChild[];
    correlative: number;
    id:          string;
    label:       string;
}

/**
 * CostsCategoryChild type
 * @category Restaurant
 * @description CostsCategoryChild type es un tipo de children de CostsCategory
 * @param canDelete:   boolean - Indicador de si puede ser borrado
 * @param children:    PurpleChild[] - listado de children de tipo PurpleChild
 * @param correlative: number - correlativo
 * @param id:          string - identificador
 * @param label:       string - etiqueta
 * @param receptable?: boolean - Indicador de si es receptable 
 * @returns CostsCategoryChild
 * 
 */
export type CostsCategoryChild = {
    canDelete:   boolean;
    children:    PurpleChild[];
    correlative: number;
    id:          string;
    label:       string;
    /**
     * @todo Revisar que es receptable
     */
    receptable?: boolean;
}
/**
 * PurpleChild type
 * @category Restaurant
 * @description PurpleChild type es un tipo de children de CostsCategoryChild
 * @param canDelete:   boolean - Indicador de si puede ser borrado
 * @param children:    FluffyChild[] - listado de children de tipo FluffyChild
 * @param correlative: number - correlativo
 * @param id:          string - identificador
 * @param label:       string - etiqueta
 * @returns PurpleChild
 * 
 */
export type PurpleChild = {
    canDelete:   boolean;
    children:    FluffyChild[];
    correlative: number;
    id:          string;
    label:       string;
}
/**
 * The FluffyChild type
 * @category Restaurant
 * @description FluffyChild type es un tipo de children de PurpleChild
 * @param canDelete:   boolean - Indicador de si puede ser borrado
 * @param children:    any[] - listado de children
 * @param correlative: number - correlativo
 * @param id:          string - identificador
 * @param label:       string - etiqueta
 * @returns FluffyChild
 * 
 */
export type FluffyChild = {
    canDelete:   boolean;
    children:    any[];
    correlative: number;
    id:          string;
    label:       string;
}