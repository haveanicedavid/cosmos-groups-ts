import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
    group_seq: Long;
    groups: GroupInfo[];
    group_members: GroupMember[];
    group_policy_seq: Long;
    group_policies: GroupPolicyInfo[];
    proposal_seq: Long;
    proposals: Proposal[];
    votes: Vote[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
