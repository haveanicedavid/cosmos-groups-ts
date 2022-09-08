import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryEvidenceRequest {
  evidence_hash: Uint8Array;
}
export interface QueryEvidenceResponse {
  evidence: Any;
}
export interface QueryAllEvidenceRequest {
  Pagination?: PageRequest;
}
export interface QueryAllEvidenceResponse {
  evidence: Any[];
  Pagination?: PageResponse;
}
export declare const QueryEvidenceRequest: {
  encode(message: QueryEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceRequest;
  fromJSON(object: any): QueryEvidenceRequest;
  toJSON(message: QueryEvidenceRequest): unknown;
  fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest;
};
export declare const QueryEvidenceResponse: {
  encode(message: QueryEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEvidenceResponse;
  fromJSON(object: any): QueryEvidenceResponse;
  toJSON(message: QueryEvidenceResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryEvidenceResponse>
  ): QueryEvidenceResponse;
};
export declare const QueryAllEvidenceRequest: {
  encode(message: QueryAllEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllEvidenceRequest;
  fromJSON(object: any): QueryAllEvidenceRequest;
  toJSON(message: QueryAllEvidenceRequest): unknown;
  fromPartial(
    object: DeepPartial<QueryAllEvidenceRequest>
  ): QueryAllEvidenceRequest;
};
export declare const QueryAllEvidenceResponse: {
  encode(message: QueryAllEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllEvidenceResponse;
  fromJSON(object: any): QueryAllEvidenceResponse;
  toJSON(message: QueryAllEvidenceResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryAllEvidenceResponse>
  ): QueryAllEvidenceResponse;
};
