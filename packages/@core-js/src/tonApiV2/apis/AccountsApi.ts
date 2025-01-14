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


import * as runtime from '../runtime';
import type {
  Account,
  AccountEvents,
  DomainNames,
  GetBlock401Response,
  JettonsBalances,
  NftItems,
  Subscriptions,
  TraceIds,
} from '../models';
import {
    AccountFromJSON,
    AccountToJSON,
    AccountEventsFromJSON,
    AccountEventsToJSON,
    DomainNamesFromJSON,
    DomainNamesToJSON,
    GetBlock401ResponseFromJSON,
    GetBlock401ResponseToJSON,
    JettonsBalancesFromJSON,
    JettonsBalancesToJSON,
    NftItemsFromJSON,
    NftItemsToJSON,
    SubscriptionsFromJSON,
    SubscriptionsToJSON,
    TraceIdsFromJSON,
    TraceIdsToJSON,
} from '../models';

export interface DnsBackResolveRequest {
    accountId: string;
}

export interface GetAccountRequest {
    accountId: string;
}

export interface GetEventsByAccountRequest {
    accountId: string;
    limit: number;
    beforeLt?: number;
    startDate?: number;
    endDate?: number;
}

export interface GetJettonsBalancesRequest {
    accountId: string;
}

export interface GetNftItemsByOwnerRequest {
    accountId: string;
}

export interface GetSubscriptionsByAccountRequest {
    accountId: string;
}

export interface GetTracesByAccountRequest {
    accountId: string;
    limit?: number;
}

/**
 * AccountsApi - interface
 * 
 * @export
 * @interface AccountsApiInterface
 */
export interface AccountsApiInterface {
    /**
     * Get domains for wallet account
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    dnsBackResolveRaw(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainNames>>;

    /**
     * Get domains for wallet account
     */
    dnsBackResolve(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainNames>;

    /**
     * Get human-friendly information about an account without low-level details.
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>>;

    /**
     * Get human-friendly information about an account without low-level details.
     */
    getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account>;

    /**
     * Get events for account
     * @param {string} accountId account ID
     * @param {number} limit 
     * @param {number} [beforeLt] omit this parameter to get last events
     * @param {number} [startDate] 
     * @param {number} [endDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getEventsByAccountRaw(requestParameters: GetEventsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvents>>;

    /**
     * Get events for account
     */
    getEventsByAccount(requestParameters: GetEventsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvents>;

    /**
     * Get all Jettons balances by owner address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getJettonsBalancesRaw(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonsBalances>>;

    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalances(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonsBalances>;

    /**
     * Get all NFT items by owner address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getNftItemsByOwnerRaw(requestParameters: GetNftItemsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItems>>;

    /**
     * Get all NFT items by owner address
     */
    getNftItemsByOwner(requestParameters: GetNftItemsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItems>;

    /**
     * Get all subscriptions by wallet address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getSubscriptionsByAccountRaw(requestParameters: GetSubscriptionsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriptions>>;

    /**
     * Get all subscriptions by wallet address
     */
    getSubscriptionsByAccount(requestParameters: GetSubscriptionsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriptions>;

    /**
     * Get traces for account
     * @param {string} accountId account ID
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getTracesByAccountRaw(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TraceIds>>;

    /**
     * Get traces for account
     */
    getTracesByAccount(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TraceIds>;

}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI implements AccountsApiInterface {

    /**
     * Get domains for wallet account
     */
    async dnsBackResolveRaw(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainNames>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling dnsBackResolve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}/dns/backresolve`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainNamesFromJSON(jsonValue));
    }

    /**
     * Get domains for wallet account
     */
    async dnsBackResolve(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainNames> {
        const response = await this.dnsBackResolveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get human-friendly information about an account without low-level details.
     */
    async getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Get human-friendly information about an account without low-level details.
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get events for account
     */
    async getEventsByAccountRaw(requestParameters: GetEventsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvents>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getEventsByAccount.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling getEventsByAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.beforeLt !== undefined) {
            queryParameters['before_lt'] = requestParameters.beforeLt;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['start_date'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['end_date'] = requestParameters.endDate;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}/events`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountEventsFromJSON(jsonValue));
    }

    /**
     * Get events for account
     */
    async getEventsByAccount(requestParameters: GetEventsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvents> {
        const response = await this.getEventsByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all Jettons balances by owner address
     */
    async getJettonsBalancesRaw(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonsBalances>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getJettonsBalances.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}/jettons`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonsBalancesFromJSON(jsonValue));
    }

    /**
     * Get all Jettons balances by owner address
     */
    async getJettonsBalances(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonsBalances> {
        const response = await this.getJettonsBalancesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all NFT items by owner address
     */
    async getNftItemsByOwnerRaw(requestParameters: GetNftItemsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItems>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getNftItemsByOwner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}/ntfs`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsFromJSON(jsonValue));
    }

    /**
     * Get all NFT items by owner address
     */
    async getNftItemsByOwner(requestParameters: GetNftItemsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItems> {
        const response = await this.getNftItemsByOwnerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all subscriptions by wallet address
     */
    async getSubscriptionsByAccountRaw(requestParameters: GetSubscriptionsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriptions>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getSubscriptionsByAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}/subscriptions`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionsFromJSON(jsonValue));
    }

    /**
     * Get all subscriptions by wallet address
     */
    async getSubscriptionsByAccount(requestParameters: GetSubscriptionsByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriptions> {
        const response = await this.getSubscriptionsByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get traces for account
     */
    async getTracesByAccountRaw(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TraceIds>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getTracesByAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{account_id}/traces`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TraceIdsFromJSON(jsonValue));
    }

    /**
     * Get traces for account
     */
    async getTracesByAccount(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TraceIds> {
        const response = await this.getTracesByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
