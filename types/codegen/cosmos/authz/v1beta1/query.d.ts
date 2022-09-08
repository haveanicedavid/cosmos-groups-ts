import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryGrantsRequest {
  granter: string;
  grantee: string;
  msg_type_url: string;
  Pagination?: PageRequest;
}
export interface QueryGrantsResponse {
  grants: Grant[];
  Pagination?: PageResponse;
}
export interface QueryGranterGrantsRequest {
  granter: string;
  Pagination?: PageRequest;
}
export interface QueryGranterGrantsResponse {
  grants: GrantAuthorization[];
  Pagination?: PageResponse;
}
export interface QueryGranteeGrantsRequest {
  grantee: string;
  Pagination?: PageRequest;
}
export interface QueryGranteeGrantsResponse {
  grants: GrantAuthorization[];
  Pagination?: PageResponse;
}
export declare const QueryGrantsRequest: {
  encode(message: QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest;
  fromJSON(object: any): QueryGrantsRequest;
  toJSON(message: QueryGrantsRequest): unknown;
  fromPartial(object: DeepPartial<QueryGrantsRequest>): QueryGrantsRequest;
};
export declare const QueryGrantsResponse: {
  encode(message: QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse;
  fromJSON(object: any): QueryGrantsResponse;
  toJSON(message: QueryGrantsResponse): unknown;
  fromPartial(object: DeepPartial<QueryGrantsResponse>): QueryGrantsResponse;
};
export declare const QueryGranterGrantsRequest: {
  encode(message: QueryGranterGrantsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGranterGrantsRequest;
  fromJSON(object: any): QueryGranterGrantsRequest;
  toJSON(message: QueryGranterGrantsRequest): unknown;
  fromPartial(
    object: DeepPartial<QueryGranterGrantsRequest>
  ): QueryGranterGrantsRequest;
};
export declare const QueryGranterGrantsResponse: {
  encode(message: QueryGranterGrantsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGranterGrantsResponse;
  fromJSON(object: any): QueryGranterGrantsResponse;
  toJSON(message: QueryGranterGrantsResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryGranterGrantsResponse>
  ): QueryGranterGrantsResponse;
};
export declare const QueryGranteeGrantsRequest: {
  encode(message: QueryGranteeGrantsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGranteeGrantsRequest;
  fromJSON(object: any): QueryGranteeGrantsRequest;
  toJSON(message: QueryGranteeGrantsRequest): unknown;
  fromPartial(
    object: DeepPartial<QueryGranteeGrantsRequest>
  ): QueryGranteeGrantsRequest;
};
export declare const QueryGranteeGrantsResponse: {
  encode(message: QueryGranteeGrantsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGranteeGrantsResponse;
  fromJSON(object: any): QueryGranteeGrantsResponse;
  toJSON(message: QueryGranteeGrantsResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryGranteeGrantsResponse>
  ): QueryGranteeGrantsResponse;
};
