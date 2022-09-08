import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState {
    params: Params;
    last_total_power: Uint8Array;
    last_validator_powers: LastValidatorPower[];
    validators: Validator[];
    delegations: Delegation[];
    unbonding_delegations: UnbondingDelegation[];
    redelegations: Redelegation[];
    exported: boolean;
}
export interface LastValidatorPower {
    address: string;
    power: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower;
};
