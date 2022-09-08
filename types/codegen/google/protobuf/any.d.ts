import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Any {
    type_url: string;
    value: Uint8Array;
}
export declare const Any: {
    encode(message: Any, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Any;
    fromJSON(object: any): Any;
    toJSON(message: Any): unknown;
    fromPartial(object: DeepPartial<Any>): Any;
};
