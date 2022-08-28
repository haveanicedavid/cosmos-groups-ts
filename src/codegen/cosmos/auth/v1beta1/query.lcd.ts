import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import {
  QueryAccountsRequest,
  QueryAccountsResponse,
  QueryAccountRequest,
  QueryAccountResponse,
  QueryAccountAddressByIDRequest,
  QueryAccountAddressByIDResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryModuleAccountsRequest,
  QueryModuleAccountsResponse,
  Bech32PrefixRequest,
  Bech32PrefixResponse,
  AddressBytesToStringRequest,
  AddressBytesToStringResponse,
  AddressStringToBytesRequest,
  AddressStringToBytesResponse,
} from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({ restEndpoint }: { restEndpoint: string }) {
    super({
      restEndpoint,
    });
  }

  /* Accounts returns all the existing accounts
  
  Since: cosmos-sdk 0.43 */
  async accounts(
    params: QueryAccountsRequest = {
      pagination: undefined,
    }
  ): Promise<QueryAccountsResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.request<QueryAccountsResponse>(endpoint, options);
  }

  /* Account returns account details based on address. */
  async account(params: QueryAccountRequest): Promise<QueryAccountResponse> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.request<QueryAccountResponse>(endpoint);
  }

  /* AccountAddressByID returns account address based on account id */
  async accountAddressByID(
    params: QueryAccountAddressByIDRequest
  ): Promise<QueryAccountAddressByIDResponse> {
    const endpoint = `cosmos/auth/v1beta1/address_by_id/${params.id}`;
    return await this.request<QueryAccountAddressByIDResponse>(endpoint);
  }

  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* ModuleAccounts returns all the existing module accounts.
  
  Since: cosmos-sdk 0.46 */
  async moduleAccounts(
    _params: QueryModuleAccountsRequest = {}
  ): Promise<QueryModuleAccountsResponse> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.request<QueryModuleAccountsResponse>(endpoint);
  }

  /* Bech32Prefix queries bech32Prefix
  
  Since: cosmos-sdk 0.46 */
  async bech32Prefix(
    _params: Bech32PrefixRequest = {}
  ): Promise<Bech32PrefixResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.request<Bech32PrefixResponse>(endpoint);
  }

  /* AddressBytesToString converts Account Address bytes to string
  
  Since: cosmos-sdk 0.46 */
  async addressBytesToString(
    params: AddressBytesToStringRequest
  ): Promise<AddressBytesToStringResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.addressBytes !== "undefined") {
      options.params.address_bytes = params.addressBytes;
    }

    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.request<AddressBytesToStringResponse>(endpoint, options);
  }

  /* AddressStringToBytes converts Address string to bytes
  
  Since: cosmos-sdk 0.46 */
  async addressStringToBytes(
    params: AddressStringToBytesRequest
  ): Promise<AddressStringToBytesResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.addressString !== "undefined") {
      options.params.address_string = params.addressString;
    }

    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.request<AddressStringToBytesResponse>(endpoint, options);
  }
}
