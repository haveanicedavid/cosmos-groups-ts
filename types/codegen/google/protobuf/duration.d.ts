import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Duration {
    seconds: Long;
    nanos: number;
}
export declare const Duration: {
    encode(message: Duration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Duration;
    fromJSON(object: any): Duration;
    toJSON(message: Duration): unknown;
    fromPartial(object: DeepPartial<Duration>): Duration;
};
