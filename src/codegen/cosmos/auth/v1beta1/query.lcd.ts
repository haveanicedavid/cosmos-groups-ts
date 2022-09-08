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

  /* Accounts */
  async accounts(
    params: QueryAccountsRequest = {
      Pagination: undefined,
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

  /* Account */
  async account(params: QueryAccountRequest): Promise<QueryAccountResponse> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.request<QueryAccountResponse>(endpoint);
  }

  /* AccountAddressByID */
  async accountAddressByID(
    params: QueryAccountAddressByIDRequest
  ): Promise<QueryAccountAddressByIDResponse> {
    const endpoint = `cosmos/auth/v1beta1/address_by_id/${params.id}`;
    return await this.request<QueryAccountAddressByIDResponse>(endpoint);
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* ModuleAccounts */
  async moduleAccounts(
    _params: QueryModuleAccountsRequest = {}
  ): Promise<QueryModuleAccountsResponse> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.request<QueryModuleAccountsResponse>(endpoint);
  }

  /* Bech32Prefix */
  async bech32Prefix(
    _params: Bech32PrefixRequest = {}
  ): Promise<Bech32PrefixResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.request<Bech32PrefixResponse>(endpoint);
  }

  /* AddressBytesToString */
  async addressBytesToString(
    params: AddressBytesToStringRequest
  ): Promise<AddressBytesToStringResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.request<AddressBytesToStringResponse>(endpoint);
  }

  /* AddressStringToBytes */
  async addressStringToBytes(
    params: AddressStringToBytesRequest
  ): Promise<AddressStringToBytesResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.request<AddressStringToBytesResponse>(endpoint);
  }
}
