/**
 * @name - Account
 * @category Index
 * @interface Account
 * @module Accounts
 * @description - The account interface
 * @param {string[]} access - The access of the account
 * @param {string} activeRestaurant - The activeRestaurant of the account
 * @param {Branch[]} branches - The branches of the account
 * @param {string} createdAt - The createdAt of the account
 * @param {boolean} disabled - The disabled of the account
 * @param {string} email - The email of the account
 * @param {string} id - The id of the account
 * @param {string} name - The name of the account
 * @param {string[]} restaurant_ids - The restaurant_ids of the account
 * @param {string} role - The role of the account
 * @param {string[]} supplier_ids - The supplier_ids of the account
 * @param {string} token - The token of the account
 */
export interface Account {
    access?: string[];
    activeRestaurant?: string;
    branches?: Branch[];
    createdAt: string;
    disabled: boolean;
    email: string;
    id: string;
    name: string;
    restaurant_ids?: string[];
    role: string;
    supplier_ids?: string[];
    token?: string;
}
/**
 * @name - Branch
 * @category Accounts
 * @interface Branch
 * @description - The branch interface
 * @module Accounts
 * @param {string} label - The label of the branch
 * @param {string} restaurant - The restaurant of the branch
 * @param {string} value - The value of the branch
 */
export interface Branch {
    label: string;
    restaurant: string;
    value: string;
}
