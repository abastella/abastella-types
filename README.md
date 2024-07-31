# Abastella Types Documentation

Welcome to the Abastella Types documentation! This repository contains the type definitions for the Abastella project.

## Demo

[https://abastella-types.web.app](https://abastella-types.web.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Extending Types](#extending-types)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Abastella Types package, you can use npm:

```bash
npm i --save git+https://github.com/abastella/abastella-types#main
```

## Usage

Once you have installed the package, you can import the types into your project. 

First, you need to know which type to use. You can find this information in the documentation at [https://abastella-types.web.app](https://abastella-types.web.app/).

For this example, we'll use the `Buy` type, as shown at [https://abastella-types.web.app/interfaces/Buy.html](https://abastella-types.web.app/interfaces/Buy.html).

```typescript
import { Buy } from '@abastella/types';

// Use the type
const newBuy = <Buy>{};
newBuy.data = {
    id: '0',
};

// After importing and assigning the type to the `newBuy` object, you can use the attributes of this type.
```

## Extending Types

### How to Extend Types to Create New Interfaces

When you need a new attribute for a specific case, extend the type in your local code instead of immediately updating the library. This approach allows you to test attributes or create a hotfix.

```typescript
// Import the type
import { Buy } from '@abastella/types';

// Use the type
const newBuy = <Buy>{};
newBuy.data = {
    id: '0',
};

// Now, if you need an attribute that doesn't exist in the Buy type, such as 'gravity',
// you can extend the Buy type and add the new attribute.
interface BuyI extends Buy {
  gravity: number;
}

const otherBuy = <BuyI>{};
otherBuy.gravity = 2;
```

### What to Do After Extending a Type in a Hotfix or Task

After validating your extensions, please send a PR to update the type. Remember to notify the entire development team about the changes, as it's important for everyone to be aware of the updated types.

## Contributing

Contributions are welcome! If you would like to contribute to the Abastella Types project, please follow the guidelines outlined in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](./LICENSE).