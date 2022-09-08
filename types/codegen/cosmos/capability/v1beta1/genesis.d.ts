import { CapabilityOwners } from "./capability";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface GenesisOwners {
    index: Long;
    index_owners: CapabilityOwners;
}
export interface GenesisState {
    index: Long;
    owners: GenesisOwners[];
}
export declare const GenesisOwners: {
    encode(message: GenesisOwners, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners;
    fromJSON(object: any): GenesisOwners;
    toJSON(message: GenesisOwners): unknown;
    fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
