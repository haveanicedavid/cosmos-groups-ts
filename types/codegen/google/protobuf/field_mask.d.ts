import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface FieldMask {
    paths: string[];
}
export declare const FieldMask: {
    encode(message: FieldMask, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldMask;
    fromJSON(object: any): FieldMask;
    toJSON(message: FieldMask): unknown;
    fromPartial(object: DeepPartial<FieldMask>): FieldMask;
};
