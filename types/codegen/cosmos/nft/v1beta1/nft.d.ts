import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Class {
    id: string;
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uri_hash: string;
    data: Any;
}
export interface NFT {
    class_id: string;
    id: string;
    uri: string;
    uri_hash: string;
    data: Any;
}
export declare const Class: {
    encode(message: Class, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial(object: DeepPartial<Class>): Class;
};
export declare const NFT: {
    encode(message: NFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFT;
    fromJSON(object: any): NFT;
    toJSON(message: NFT): unknown;
    fromPartial(object: DeepPartial<NFT>): NFT;
};
