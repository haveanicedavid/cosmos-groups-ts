import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum OrderBy {
    ORDER_BY_UNSPECIFIED = 0,
    ORDER_BY_ASC = 1,
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
export declare enum BroadcastMode {
    BROADCAST_MODE_UNSPECIFIED = 0,
    BROADCAST_MODE_BLOCK = 1,
    BROADCAST_MODE_SYNC = 2,
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
export interface GetTxsEventRequest {
    events: string[];
    /** @deprecated */
    pagination: PageRequest;
    order_by: OrderBy;
    page: Long;
    limit: Long;
}
export interface GetTxsEventResponse {
    txs: Tx[];
    tx_responses: TxResponse[];
    /** @deprecated */
    pagination: PageResponse;
    total: Long;
}
export interface BroadcastTxRequest {
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
export interface BroadcastTxResponse {
    tx_response: TxResponse;
}
export interface SimulateRequest {
    /** @deprecated */
    tx: Tx;
    tx_bytes: Uint8Array;
}
export interface SimulateResponse {
    gas_info: GasInfo;
    result: Result;
}
export interface GetTxRequest {
    hash: string;
}
export interface GetTxResponse {
    tx: Tx;
    tx_response: TxResponse;
}
export interface GetBlockWithTxsRequest {
    height: Long;
    pagination: PageRequest;
}
export interface GetBlockWithTxsResponse {
    txs: Tx[];
    block_id: BlockID;
    block: Block;
    pagination: PageResponse;
}
export declare const GetTxsEventRequest: {
    encode(message: GetTxsEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest;
    fromJSON(object: any): GetTxsEventRequest;
    toJSON(message: GetTxsEventRequest): unknown;
    fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest;
};
export declare const GetTxsEventResponse: {
    encode(message: GetTxsEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse;
    fromJSON(object: any): GetTxsEventResponse;
    toJSON(message: GetTxsEventResponse): unknown;
    fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse;
};
export declare const BroadcastTxRequest: {
    encode(message: BroadcastTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest;
    fromJSON(object: any): BroadcastTxRequest;
    toJSON(message: BroadcastTxRequest): unknown;
    fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest;
};
export declare const BroadcastTxResponse: {
    encode(message: BroadcastTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse;
    fromJSON(object: any): BroadcastTxResponse;
    toJSON(message: BroadcastTxResponse): unknown;
    fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse;
};
export declare const SimulateRequest: {
    encode(message: SimulateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest;
    fromJSON(object: any): SimulateRequest;
    toJSON(message: SimulateRequest): unknown;
    fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest;
};
export declare const SimulateResponse: {
    encode(message: SimulateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse;
    fromJSON(object: any): SimulateResponse;
    toJSON(message: SimulateResponse): unknown;
    fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse;
};
export declare const GetTxRequest: {
    encode(message: GetTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest;
    fromJSON(object: any): GetTxRequest;
    toJSON(message: GetTxRequest): unknown;
    fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest;
};
export declare const GetTxResponse: {
    encode(message: GetTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse;
    fromJSON(object: any): GetTxResponse;
    toJSON(message: GetTxResponse): unknown;
    fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse;
};
export declare const GetBlockWithTxsRequest: {
    encode(message: GetBlockWithTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest;
    fromJSON(object: any): GetBlockWithTxsRequest;
    toJSON(message: GetBlockWithTxsRequest): unknown;
    fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest;
};
export declare const GetBlockWithTxsResponse: {
    encode(message: GetBlockWithTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponse;
    fromJSON(object: any): GetBlockWithTxsResponse;
    toJSON(message: GetBlockWithTxsResponse): unknown;
    fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse;
};
