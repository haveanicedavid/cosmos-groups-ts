import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface DoubleValue {
    value: number;
}
export interface FloatValue {
    value: number;
}
export interface Int64Value {
    value: Long;
}
export interface UInt64Value {
    value: Long;
}
export interface Int32Value {
    value: number;
}
export interface UInt32Value {
    value: number;
}
export interface BoolValue {
    value: boolean;
}
export interface StringValue {
    value: string;
}
export interface BytesValue {
    value: Uint8Array;
}
export declare const DoubleValue: {
    encode(message: DoubleValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue;
    fromJSON(object: any): DoubleValue;
    toJSON(message: DoubleValue): unknown;
    fromPartial(object: DeepPartial<DoubleValue>): DoubleValue;
};
export declare const FloatValue: {
    encode(message: FloatValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue;
    fromJSON(object: any): FloatValue;
    toJSON(message: FloatValue): unknown;
    fromPartial(object: DeepPartial<FloatValue>): FloatValue;
};
export declare const Int64Value: {
    encode(message: Int64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value;
    fromJSON(object: any): Int64Value;
    toJSON(message: Int64Value): unknown;
    fromPartial(object: DeepPartial<Int64Value>): Int64Value;
};
export declare const UInt64Value: {
    encode(message: UInt64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value;
    fromJSON(object: any): UInt64Value;
    toJSON(message: UInt64Value): unknown;
    fromPartial(object: DeepPartial<UInt64Value>): UInt64Value;
};
export declare const Int32Value: {
    encode(message: Int32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value;
    fromJSON(object: any): Int32Value;
    toJSON(message: Int32Value): unknown;
    fromPartial(object: DeepPartial<Int32Value>): Int32Value;
};
export declare const UInt32Value: {
    encode(message: UInt32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value;
    fromJSON(object: any): UInt32Value;
    toJSON(message: UInt32Value): unknown;
    fromPartial(object: DeepPartial<UInt32Value>): UInt32Value;
};
export declare const BoolValue: {
    encode(message: BoolValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue;
    fromJSON(object: any): BoolValue;
    toJSON(message: BoolValue): unknown;
    fromPartial(object: DeepPartial<BoolValue>): BoolValue;
};
export declare const StringValue: {
    encode(message: StringValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringValue;
    fromJSON(object: any): StringValue;
    toJSON(message: StringValue): unknown;
    fromPartial(object: DeepPartial<StringValue>): StringValue;
};
export declare const BytesValue: {
    encode(message: BytesValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue;
    fromJSON(object: any): BytesValue;
    toJSON(message: BytesValue): unknown;
    fromPartial(object: DeepPartial<BytesValue>): BytesValue;
};
