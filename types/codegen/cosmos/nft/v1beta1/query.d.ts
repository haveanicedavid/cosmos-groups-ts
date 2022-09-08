import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryBalanceRequest {
  class_id: string;
  owner: string;
}
export interface QueryBalanceResponse {
  amount: Long;
}
export interface QueryOwnerRequest {
  class_id: string;
  id: string;
}
export interface QueryOwnerResponse {
  owner: string;
}
export interface QuerySupplyRequest {
  class_id: string;
}
export interface QuerySupplyResponse {
  amount: Long;
}
export interface QueryNFTsRequest {
  class_id: string;
  owner: string;
  Pagination?: PageRequest;
}
export interface QueryNFTsResponse {
  nfts: NFT[];
  Pagination?: PageResponse;
}
export interface QueryNFTRequest {
  class_id: string;
  id: string;
}
export interface QueryNFTResponse {
  nft: NFT;
}
export interface QueryClassRequest {
  class_id: string;
}
export interface QueryClassResponse {
  class: Class;
}
export interface QueryClassesRequest {
  Pagination?: PageRequest;
}
export interface QueryClassesResponse {
  classes: Class[];
  Pagination?: PageResponse;
}
export declare const QueryBalanceRequest: {
  encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
  fromJSON(object: any): QueryBalanceRequest;
  toJSON(message: QueryBalanceRequest): unknown;
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
  encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
  fromJSON(object: any): QueryBalanceResponse;
  toJSON(message: QueryBalanceResponse): unknown;
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryOwnerRequest: {
  encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest;
  fromJSON(object: any): QueryOwnerRequest;
  toJSON(message: QueryOwnerRequest): unknown;
  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest;
};
export declare const QueryOwnerResponse: {
  encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse;
  fromJSON(object: any): QueryOwnerResponse;
  toJSON(message: QueryOwnerResponse): unknown;
  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse;
};
export declare const QuerySupplyRequest: {
  encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
  fromJSON(object: any): QuerySupplyRequest;
  toJSON(message: QuerySupplyRequest): unknown;
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
  encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
  fromJSON(object: any): QuerySupplyResponse;
  toJSON(message: QuerySupplyResponse): unknown;
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse;
};
export declare const QueryNFTsRequest: {
  encode(message: QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest;
  fromJSON(object: any): QueryNFTsRequest;
  toJSON(message: QueryNFTsRequest): unknown;
  fromPartial(object: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest;
};
export declare const QueryNFTsResponse: {
  encode(message: QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse;
  fromJSON(object: any): QueryNFTsResponse;
  toJSON(message: QueryNFTsResponse): unknown;
  fromPartial(object: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse;
};
export declare const QueryNFTRequest: {
  encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
  fromJSON(object: any): QueryNFTRequest;
  toJSON(message: QueryNFTRequest): unknown;
  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
  encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
  fromJSON(object: any): QueryNFTResponse;
  toJSON(message: QueryNFTResponse): unknown;
  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse;
};
export declare const QueryClassRequest: {
  encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
  fromJSON(object: any): QueryClassRequest;
  toJSON(message: QueryClassRequest): unknown;
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest;
};
export declare const QueryClassResponse: {
  encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
  fromJSON(object: any): QueryClassResponse;
  toJSON(message: QueryClassResponse): unknown;
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse;
};
export declare const QueryClassesRequest: {
  encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
  fromJSON(object: any): QueryClassesRequest;
  toJSON(message: QueryClassesRequest): unknown;
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
  encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
  fromJSON(object: any): QueryClassesResponse;
  toJSON(message: QueryClassesResponse): unknown;
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse;
};
