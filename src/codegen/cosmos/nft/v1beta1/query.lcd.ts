import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryOwnerRequest,
  QueryOwnerResponse,
  QuerySupplyRequest,
  QuerySupplyResponse,
  QueryNFTsRequest,
  QueryNFTsResponse,
  QueryNFTRequest,
  QueryNFTResponse,
  QueryClassRequest,
  QueryClassResponse,
  QueryClassesRequest,
  QueryClassesResponse,
} from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({ restEndpoint }: { restEndpoint: string }) {
    super({
      restEndpoint,
    });
  }

  /* Balance */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.classId}`;
    return await this.request<QueryBalanceResponse>(endpoint);
  }

  /* Owner */
  async owner(params: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const endpoint = `cosmos/nft/v1beta1/owner/${params.classId}/${params.id}`;
    return await this.request<QueryOwnerResponse>(endpoint);
  }

  /* Supply */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const endpoint = `cosmos/nft/v1beta1/supply/${params.classId}`;
    return await this.request<QuerySupplyResponse>(endpoint);
  }

  /* NFTs */
  async nFTs(params: QueryNFTsRequest): Promise<QueryNFTsResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.class_id !== "undefined") {
      options.params.class_id = params.class_id;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/nft/v1beta1/nfts`;
    return await this.request<QueryNFTsResponse>(endpoint, options);
  }

  /* NFT */
  async nFT(params: QueryNFTRequest): Promise<QueryNFTResponse> {
    const endpoint = `cosmos/nft/v1beta1/nfts/${params.classId}/${params.id}`;
    return await this.request<QueryNFTResponse>(endpoint);
  }

  /* Class */
  async class(params: QueryClassRequest): Promise<QueryClassResponse> {
    const endpoint = `cosmos/nft/v1beta1/classes/${params.classId}`;
    return await this.request<QueryClassResponse>(endpoint);
  }

  /* Classes */
  async classes(
    params: QueryClassesRequest = {
      Pagination: undefined,
    }
  ): Promise<QueryClassesResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/nft/v1beta1/classes`;
    return await this.request<QueryClassesResponse>(endpoint, options);
  }
}
