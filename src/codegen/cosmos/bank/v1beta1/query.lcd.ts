import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse,
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
} from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({ restEndpoint }: { restEndpoint: string }) {
    super({
      restEndpoint,
    });
  }

  /* Balance */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.request<QueryBalanceResponse>(endpoint, options);
  }

  /* AllBalances */
  async allBalances(
    params: QueryAllBalancesRequest
  ): Promise<QueryAllBalancesResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.request<QueryAllBalancesResponse>(endpoint, options);
  }

  /* SpendableBalances */
  async spendableBalances(
    params: QuerySpendableBalancesRequest
  ): Promise<QuerySpendableBalancesResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.request<QuerySpendableBalancesResponse>(
      endpoint,
      options
    );
  }

  /* TotalSupply */
  async totalSupply(
    params: QueryTotalSupplyRequest = {
      Pagination: undefined,
    }
  ): Promise<QueryTotalSupplyResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.request<QueryTotalSupplyResponse>(endpoint, options);
  }

  /* SupplyOf */
  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.request<QuerySupplyOfResponse>(endpoint, options);
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* DenomMetadata */
  async denomMetadata(
    params: QueryDenomMetadataRequest
  ): Promise<QueryDenomMetadataResponse> {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.request<QueryDenomMetadataResponse>(endpoint);
  }

  /* DenomsMetadata */
  async denomsMetadata(
    params: QueryDenomsMetadataRequest = {
      Pagination: undefined,
    }
  ): Promise<QueryDenomsMetadataResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.request<QueryDenomsMetadataResponse>(endpoint, options);
  }

  /* DenomOwners */
  async denomOwners(
    params: QueryDenomOwnersRequest
  ): Promise<QueryDenomOwnersResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.request<QueryDenomOwnersResponse>(endpoint, options);
  }
}
