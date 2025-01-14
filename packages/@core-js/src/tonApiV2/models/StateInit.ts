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
/**
 * 
 * @export
 * @interface StateInit
 */
export interface StateInit {
    /**
     * 
     * @type {string}
     * @memberof StateInit
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof StateInit
     */
    data?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof StateInit
     */
    library: { [key: string]: string; };
}

/**
 * Check if a given object implements the StateInit interface.
 */
export function instanceOfStateInit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "library" in value;

    return isInstance;
}

export function StateInitFromJSON(json: any): StateInit {
    return StateInitFromJSONTyped(json, false);
}

export function StateInitFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateInit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'library': json['library'],
    };
}

export function StateInitToJSON(value?: StateInit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'data': value.data,
        'library': value.library,
    };
}

