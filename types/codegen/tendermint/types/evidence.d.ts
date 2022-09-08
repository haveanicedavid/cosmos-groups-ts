import { Vote, LightBlock } from "./types";
import { Validator } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Evidence {
    duplicate_vote_evidence?: DuplicateVoteEvidence;
    light_client_attack_evidence?: LightClientAttackEvidence;
}
export interface DuplicateVoteEvidence {
    vote_a: Vote;
    vote_b: Vote;
    total_voting_power: Long;
    validator_power: Long;
    timestamp: Date;
}
export interface LightClientAttackEvidence {
    conflicting_block: LightBlock;
    common_height: Long;
    byzantine_validators: Validator[];
    total_voting_power: Long;
    timestamp: Date;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial(object: DeepPartial<Evidence>): Evidence;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    encode(message: LightClientAttackEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    encode(message: EvidenceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    fromPartial(object: DeepPartial<EvidenceList>): EvidenceList;
};
