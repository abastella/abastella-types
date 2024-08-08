# Changelog - Abastella Types

### [1.0.2] - 2024-08-08
#### Changed
##### Compilación automática
- Se ha agregado Husky para compilar automáticamente la librería antes de cada commit o push.
- Se han configurado los hooks pre-commit y pre-push para ejecutar la compilación con tsc.
Cambios internos
- Se han modificado tsconfig.json y package.json para agregar scripts de compilación.
- Se configura files que deben ser instalados al momento de compilar en package.json.
- Se modifica exportacion a types de cada interface.

### [1.0.1] - 2024-08-01
#### Changed
- Add `File` and `Files` interface. 
- Add `CostCategory`, `Ingredients` interfaces.
- Add `Accounts` interfaces.