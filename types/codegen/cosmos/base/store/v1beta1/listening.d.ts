import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface StoreKVPair {
    store_key: string;
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export declare const StoreKVPair: {
    encode(message: StoreKVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair;
};
