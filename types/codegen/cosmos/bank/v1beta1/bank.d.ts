import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Params {
    send_enabled: SendEnabled[];
    default_send_enabled: boolean;
}
export interface SendEnabled {
    denom: string;
    enabled: boolean;
}
export interface Input {
    address: string;
    coins: Coin[];
}
export interface Output {
    address: string;
    coins: Coin[];
}
/** @deprecated */
export interface Supply {
    total: Coin[];
}
export interface DenomUnit {
    denom: string;
    exponent: number;
    aliases: string[];
}
export interface Metadata {
    description: string;
    denom_units: DenomUnit[];
    base: string;
    display: string;
    name: string;
    symbol: string;
    uri: string;
    uri_hash: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const SendEnabled: {
    encode(message: SendEnabled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendEnabled;
    fromJSON(object: any): SendEnabled;
    toJSON(message: SendEnabled): unknown;
    fromPartial(object: DeepPartial<SendEnabled>): SendEnabled;
};
export declare const Input: {
    encode(message: Input, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Input;
    fromJSON(object: any): Input;
    toJSON(message: Input): unknown;
    fromPartial(object: DeepPartial<Input>): Input;
};
export declare const Output: {
    encode(message: Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Output;
    fromJSON(object: any): Output;
    toJSON(message: Output): unknown;
    fromPartial(object: DeepPartial<Output>): Output;
};
export declare const Supply: {
    encode(message: Supply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Supply;
    fromJSON(object: any): Supply;
    toJSON(message: Supply): unknown;
    fromPartial(object: DeepPartial<Supply>): Supply;
};
export declare const DenomUnit: {
    encode(message: DenomUnit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit;
    fromJSON(object: any): DenomUnit;
    toJSON(message: DenomUnit): unknown;
    fromPartial(object: DeepPartial<DenomUnit>): DenomUnit;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial(object: DeepPartial<Metadata>): Metadata;
};
