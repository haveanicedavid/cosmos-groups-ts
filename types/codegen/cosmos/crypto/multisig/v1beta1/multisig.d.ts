import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MultiSignature {
    signatures: Uint8Array[];
}
export interface CompactBitArray {
    extra_bits_stored: number;
    elems: Uint8Array;
}
export declare const MultiSignature: {
    encode(message: MultiSignature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSignature;
    fromJSON(object: any): MultiSignature;
    toJSON(message: MultiSignature): unknown;
    fromPartial(object: DeepPartial<MultiSignature>): MultiSignature;
};
export declare const CompactBitArray: {
    encode(message: CompactBitArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompactBitArray;
    fromJSON(object: any): CompactBitArray;
    toJSON(message: CompactBitArray): unknown;
    fromPartial(object: DeepPartial<CompactBitArray>): CompactBitArray;
};
