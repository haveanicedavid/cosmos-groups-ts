import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Timestamp {
    seconds: Long;
    nanos: number;
}
export declare const Timestamp: {
    encode(message: Timestamp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp;
    fromJSON(object: any): Timestamp;
    toJSON(message: Timestamp): unknown;
    fromPartial(object: DeepPartial<Timestamp>): Timestamp;
};
