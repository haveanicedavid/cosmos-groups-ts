import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface GetValidatorSetByHeightRequest {
  height: Long;
  Pagination?: PageRequest;
}
export interface GetValidatorSetByHeightResponse {
  block_height: Long;
  validators: Validator[];
  Pagination?: PageResponse;
}
export interface GetLatestValidatorSetRequest {
  Pagination?: PageRequest;
}
export interface GetLatestValidatorSetResponse {
  block_height: Long;
  validators: Validator[];
  Pagination?: PageResponse;
}
export interface Validator {
  address: string;
  pub_key: Any;
  voting_power: Long;
  proposer_priority: Long;
}
export interface GetBlockByHeightRequest {
  height: Long;
}
export interface GetBlockByHeightResponse {
  block_id: BlockID;
  block: Block1;
  sdk_block: Block2;
}
export interface GetLatestBlockRequest {}
export interface GetLatestBlockResponse {
  block_id: BlockID;
  block: Block1;
  sdk_block: Block2;
}
export interface GetSyncingRequest {}
export interface GetSyncingResponse {
  syncing: boolean;
}
export interface GetNodeInfoRequest {}
export interface GetNodeInfoResponse {
  default_node_info: DefaultNodeInfo;
  application_version: VersionInfo;
}
export interface VersionInfo {
  name: string;
  app_name: string;
  version: string;
  git_commit: string;
  build_tags: string;
  go_version: string;
  build_deps: Module[];
  cosmos_sdk_version: string;
}
export interface Module {
  path: string;
  version: string;
  sum: string;
}
export interface ABCIQueryRequest {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface ABCIQueryResponse {
  code: number;
  log: string;
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops: ProofOps;
  height: Long;
  codespace: string;
}
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
export interface ProofOps {
  ops: ProofOp[];
}
export declare const GetValidatorSetByHeightRequest: {
  encode(
    message: GetValidatorSetByHeightRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetValidatorSetByHeightRequest;
  fromJSON(object: any): GetValidatorSetByHeightRequest;
  toJSON(message: GetValidatorSetByHeightRequest): unknown;
  fromPartial(
    object: DeepPartial<GetValidatorSetByHeightRequest>
  ): GetValidatorSetByHeightRequest;
};
export declare const GetValidatorSetByHeightResponse: {
  encode(
    message: GetValidatorSetByHeightResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetValidatorSetByHeightResponse;
  fromJSON(object: any): GetValidatorSetByHeightResponse;
  toJSON(message: GetValidatorSetByHeightResponse): unknown;
  fromPartial(
    object: DeepPartial<GetValidatorSetByHeightResponse>
  ): GetValidatorSetByHeightResponse;
};
export declare const GetLatestValidatorSetRequest: {
  encode(
    message: GetLatestValidatorSetRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestValidatorSetRequest;
  fromJSON(object: any): GetLatestValidatorSetRequest;
  toJSON(message: GetLatestValidatorSetRequest): unknown;
  fromPartial(
    object: DeepPartial<GetLatestValidatorSetRequest>
  ): GetLatestValidatorSetRequest;
};
export declare const GetLatestValidatorSetResponse: {
  encode(
    message: GetLatestValidatorSetResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestValidatorSetResponse;
  fromJSON(object: any): GetLatestValidatorSetResponse;
  toJSON(message: GetLatestValidatorSetResponse): unknown;
  fromPartial(
    object: DeepPartial<GetLatestValidatorSetResponse>
  ): GetLatestValidatorSetResponse;
};
export declare const Validator: {
  encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
  fromJSON(object: any): Validator;
  toJSON(message: Validator): unknown;
  fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const GetBlockByHeightRequest: {
  encode(message: GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockByHeightRequest;
  fromJSON(object: any): GetBlockByHeightRequest;
  toJSON(message: GetBlockByHeightRequest): unknown;
  fromPartial(
    object: DeepPartial<GetBlockByHeightRequest>
  ): GetBlockByHeightRequest;
};
export declare const GetBlockByHeightResponse: {
  encode(message: GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockByHeightResponse;
  fromJSON(object: any): GetBlockByHeightResponse;
  toJSON(message: GetBlockByHeightResponse): unknown;
  fromPartial(
    object: DeepPartial<GetBlockByHeightResponse>
  ): GetBlockByHeightResponse;
};
export declare const GetLatestBlockRequest: {
  encode(_: GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestBlockRequest;
  fromJSON(_: any): GetLatestBlockRequest;
  toJSON(_: GetLatestBlockRequest): unknown;
  fromPartial(_: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest;
};
export declare const GetLatestBlockResponse: {
  encode(message: GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLatestBlockResponse;
  fromJSON(object: any): GetLatestBlockResponse;
  toJSON(message: GetLatestBlockResponse): unknown;
  fromPartial(
    object: DeepPartial<GetLatestBlockResponse>
  ): GetLatestBlockResponse;
};
export declare const GetSyncingRequest: {
  encode(_: GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest;
  fromJSON(_: any): GetSyncingRequest;
  toJSON(_: GetSyncingRequest): unknown;
  fromPartial(_: DeepPartial<GetSyncingRequest>): GetSyncingRequest;
};
export declare const GetSyncingResponse: {
  encode(message: GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse;
  fromJSON(object: any): GetSyncingResponse;
  toJSON(message: GetSyncingResponse): unknown;
  fromPartial(object: DeepPartial<GetSyncingResponse>): GetSyncingResponse;
};
export declare const GetNodeInfoRequest: {
  encode(_: GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest;
  fromJSON(_: any): GetNodeInfoRequest;
  toJSON(_: GetNodeInfoRequest): unknown;
  fromPartial(_: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest;
};
export declare const GetNodeInfoResponse: {
  encode(message: GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse;
  fromJSON(object: any): GetNodeInfoResponse;
  toJSON(message: GetNodeInfoResponse): unknown;
  fromPartial(object: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse;
};
export declare const VersionInfo: {
  encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo;
  fromJSON(object: any): VersionInfo;
  toJSON(message: VersionInfo): unknown;
  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo;
};
export declare const Module: {
  encode(message: Module, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Module;
  fromJSON(object: any): Module;
  toJSON(message: Module): unknown;
  fromPartial(object: DeepPartial<Module>): Module;
};
export declare const ABCIQueryRequest: {
  encode(message: ABCIQueryRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryRequest;
  fromJSON(object: any): ABCIQueryRequest;
  toJSON(message: ABCIQueryRequest): unknown;
  fromPartial(object: DeepPartial<ABCIQueryRequest>): ABCIQueryRequest;
};
export declare const ABCIQueryResponse: {
  encode(message: ABCIQueryResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryResponse;
  fromJSON(object: any): ABCIQueryResponse;
  toJSON(message: ABCIQueryResponse): unknown;
  fromPartial(object: DeepPartial<ABCIQueryResponse>): ABCIQueryResponse;
};
export declare const ProofOp: {
  encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp;
  fromJSON(object: any): ProofOp;
  toJSON(message: ProofOp): unknown;
  fromPartial(object: DeepPartial<ProofOp>): ProofOp;
};
export declare const ProofOps: {
  encode(message: ProofOps, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps;
  fromJSON(object: any): ProofOps;
  toJSON(message: ProofOps): unknown;
  fromPartial(object: DeepPartial<ProofOps>): ProofOps;
};
