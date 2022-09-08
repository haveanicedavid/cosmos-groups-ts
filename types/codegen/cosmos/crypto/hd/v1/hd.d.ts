import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface BIP44Params {
    purpose: number;
    coin_type: number;
    account: number;
    change: boolean;
    address_index: number;
}
export declare const BIP44Params: {
    encode(message: BIP44Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BIP44Params;
    fromJSON(object: any): BIP44Params;
    toJSON(message: BIP44Params): unknown;
    fromPartial(object: DeepPartial<BIP44Params>): BIP44Params;
};
