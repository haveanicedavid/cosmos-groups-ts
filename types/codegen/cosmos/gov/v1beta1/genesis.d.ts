import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
    starting_proposal_id: Long;
    deposits: Deposit[];
    votes: Vote[];
    proposals: Proposal[];
    deposit_params: DepositParams;
    voting_params: VotingParams;
    tally_params: TallyParams;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
