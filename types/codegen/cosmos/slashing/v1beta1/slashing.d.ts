import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ValidatorSigningInfo {
    address: string;
    start_height: Long;
    index_offset: Long;
    jailed_until: Date;
    tombstoned: boolean;
    missed_blocks_counter: Long;
}
export interface Params {
    signed_blocks_window: Long;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration: Duration;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    encode(message: ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
