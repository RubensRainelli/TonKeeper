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

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
} from './Refund';

/**
 * 
 * @export
 * @interface NftItemTransferAction
 */
export interface NftItemTransferAction {
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItemTransferAction
     */
    sender?: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItemTransferAction
     */
    recipient?: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof NftItemTransferAction
     */
    nft: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemTransferAction
     */
    comment?: string;
    /**
     * raw hex encoded payload
     * @type {string}
     * @memberof NftItemTransferAction
     */
    payload?: string;
    /**
     * 
     * @type {Refund}
     * @memberof NftItemTransferAction
     */
    refund?: Refund;
}

/**
 * Check if a given object implements the NftItemTransferAction interface.
 */
export function instanceOfNftItemTransferAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nft" in value;

    return isInstance;
}

export function NftItemTransferActionFromJSON(json: any): NftItemTransferAction {
    return NftItemTransferActionFromJSONTyped(json, false);
}

export function NftItemTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemTransferAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sender': !exists(json, 'sender') ? undefined : AccountAddressFromJSON(json['sender']),
        'recipient': !exists(json, 'recipient') ? undefined : AccountAddressFromJSON(json['recipient']),
        'nft': json['nft'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'refund': !exists(json, 'refund') ? undefined : RefundFromJSON(json['refund']),
    };
}

export function NftItemTransferActionToJSON(value?: NftItemTransferAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sender': AccountAddressToJSON(value.sender),
        'recipient': AccountAddressToJSON(value.recipient),
        'nft': value.nft,
        'comment': value.comment,
        'payload': value.payload,
        'refund': RefundToJSON(value.refund),
    };
}

