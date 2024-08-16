import { Homologation } from '../../restaurants/homologation';
import { BaseModel } from '../baseModel';

export class HomologationModel extends BaseModel<Homologation> {
  constructor() {
    super('homologations'); // El nombre de la tabla en BigQuery
  }

  // Métodos específicos para Homologation pueden ir aquí

}
