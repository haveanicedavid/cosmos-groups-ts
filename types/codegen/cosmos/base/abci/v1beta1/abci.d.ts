import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface TxResponse {
    height: Long;
    txhash: string;
    codespace: string;
    code: number;
    data: string;
    raw_log: string;
    logs: ABCIMessageLog[];
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    tx: Any;
    timestamp: string;
    events: Event[];
}
export interface ABCIMessageLog {
    msg_index: number;
    log: string;
    events: StringEvent[];
}
export interface StringEvent {
    type: string;
    attributes: Attribute[];
}
export interface Attribute {
    key: string;
    value: string;
}
export interface GasInfo {
    gas_wanted: Long;
    gas_used: Long;
}
export interface Result {
    /** @deprecated */
    data: Uint8Array;
    log: string;
    events: Event[];
    msg_responses: Any[];
}
export interface SimulationResponse {
    gas_info: GasInfo;
    result: Result;
}
/** @deprecated */
export interface MsgData {
    msg_type: string;
    data: Uint8Array;
}
export interface TxMsgData {
    /** @deprecated */
    data: MsgData[];
    msg_responses: Any[];
}
export interface SearchTxsResult {
    total_count: Long;
    count: Long;
    page_number: Long;
    page_total: Long;
    limit: Long;
    txs: TxResponse[];
}
export declare const TxResponse: {
    encode(message: TxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse;
    fromJSON(object: any): TxResponse;
    toJSON(message: TxResponse): unknown;
    fromPartial(object: DeepPartial<TxResponse>): TxResponse;
};
export declare const ABCIMessageLog: {
    encode(message: ABCIMessageLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog;
    fromJSON(object: any): ABCIMessageLog;
    toJSON(message: ABCIMessageLog): unknown;
    fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog;
};
export declare const StringEvent: {
    encode(message: StringEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent;
    fromJSON(object: any): StringEvent;
    toJSON(message: StringEvent): unknown;
    fromPartial(object: DeepPartial<StringEvent>): StringEvent;
};
export declare const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    fromPartial(object: DeepPartial<Attribute>): Attribute;
};
export declare const GasInfo: {
    encode(message: GasInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo;
    fromJSON(object: any): GasInfo;
    toJSON(message: GasInfo): unknown;
    fromPartial(object: DeepPartial<GasInfo>): GasInfo;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    fromPartial(object: DeepPartial<Result>): Result;
};
export declare const SimulationResponse: {
    encode(message: SimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse;
    fromJSON(object: any): SimulationResponse;
    toJSON(message: SimulationResponse): unknown;
    fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse;
};
export declare const MsgData: {
    encode(message: MsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgData;
    fromJSON(object: any): MsgData;
    toJSON(message: MsgData): unknown;
    fromPartial(object: DeepPartial<MsgData>): MsgData;
};
export declare const TxMsgData: {
    encode(message: TxMsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData;
    fromJSON(object: any): TxMsgData;
    toJSON(message: TxMsgData): unknown;
    fromPartial(object: DeepPartial<TxMsgData>): TxMsgData;
};
export declare const SearchTxsResult: {
    encode(message: SearchTxsResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult;
    fromJSON(object: any): SearchTxsResult;
    toJSON(message: SearchTxsResult): unknown;
    fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult;
};
