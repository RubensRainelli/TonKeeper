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
import type { PoolImplementation } from './PoolImplementation';
import {
    PoolImplementationFromJSON,
    PoolImplementationFromJSONTyped,
    PoolImplementationToJSON,
} from './PoolImplementation';
import type { PoolInfo } from './PoolInfo';
import {
    PoolInfoFromJSON,
    PoolInfoFromJSONTyped,
    PoolInfoToJSON,
} from './PoolInfo';

/**
 * 
 * @export
 * @interface StakingPoolInfo200Response
 */
export interface StakingPoolInfo200Response {
    /**
     * 
     * @type {PoolImplementation}
     * @memberof StakingPoolInfo200Response
     */
    implementation: PoolImplementation;
    /**
     * 
     * @type {PoolInfo}
     * @memberof StakingPoolInfo200Response
     */
    pool: PoolInfo;
}

/**
 * Check if a given object implements the StakingPoolInfo200Response interface.
 */
export function instanceOfStakingPoolInfo200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "implementation" in value;
    isInstance = isInstance && "pool" in value;

    return isInstance;
}

export function StakingPoolInfo200ResponseFromJSON(json: any): StakingPoolInfo200Response {
    return StakingPoolInfo200ResponseFromJSONTyped(json, false);
}

export function StakingPoolInfo200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingPoolInfo200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'implementation': PoolImplementationFromJSON(json['implementation']),
        'pool': PoolInfoFromJSON(json['pool']),
    };
}

export function StakingPoolInfo200ResponseToJSON(value?: StakingPoolInfo200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'implementation': PoolImplementationToJSON(value.implementation),
        'pool': PoolInfoToJSON(value.pool),
    };
}

