/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const TransactionType = {
    TransOrd: 'TransOrd',
    TransTickTock: 'TransTickTock',
    TransSplitPrepare: 'TransSplitPrepare',
    TransSplitInstall: 'TransSplitInstall',
    TransMergePrepare: 'TransMergePrepare',
    TransMergeInstall: 'TransMergeInstall',
    TransStorage: 'TransStorage'
} as const;
export type TransactionType = typeof TransactionType[keyof typeof TransactionType];


export function TransactionTypeFromJSON(json: any): TransactionType {
    return TransactionTypeFromJSONTyped(json, false);
}

export function TransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionType {
    return json as TransactionType;
}

export function TransactionTypeToJSON(value?: TransactionType | null): any {
    return value as any;
}

