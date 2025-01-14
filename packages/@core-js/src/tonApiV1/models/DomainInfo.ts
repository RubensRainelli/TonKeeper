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
import type { DomainInfoNftItem } from './DomainInfoNftItem';
import {
    DomainInfoNftItemFromJSON,
    DomainInfoNftItemFromJSONTyped,
    DomainInfoNftItemToJSON,
} from './DomainInfoNftItem';

/**
 * 
 * @export
 * @interface DomainInfo
 */
export interface DomainInfo {
    /**
     * 
     * @type {number}
     * @memberof DomainInfo
     */
    expiration: number;
    /**
     * 
     * @type {DomainInfoNftItem}
     * @memberof DomainInfo
     */
    nftItem?: DomainInfoNftItem;
}

/**
 * Check if a given object implements the DomainInfo interface.
 */
export function instanceOfDomainInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expiration" in value;

    return isInstance;
}

export function DomainInfoFromJSON(json: any): DomainInfo {
    return DomainInfoFromJSONTyped(json, false);
}

export function DomainInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expiration': json['expiration'],
        'nftItem': !exists(json, 'nft_item') ? undefined : DomainInfoNftItemFromJSON(json['nft_item']),
    };
}

export function DomainInfoToJSON(value?: DomainInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expiration': value.expiration,
        'nft_item': DomainInfoNftItemToJSON(value.nftItem),
    };
}

