import * as admin from "firebase-admin";

import * as fireorm from "fireorm";

admin.initializeApp();
const firestore = admin.firestore();

fireorm.initialize(firestore);

export * from "./buys";
export * from "./restaurants";
export * from "./accounts";

export * from "./orm";