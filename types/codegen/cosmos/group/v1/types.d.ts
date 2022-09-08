import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum VoteOption {
    VOTE_OPTION_UNSPECIFIED = 0,
    VOTE_OPTION_YES = 1,
    VOTE_OPTION_ABSTAIN = 2,
    VOTE_OPTION_NO = 3,
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
export declare enum ProposalStatus {
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    PROPOSAL_STATUS_SUBMITTED = 1,
    PROPOSAL_STATUS_ACCEPTED = 2,
    PROPOSAL_STATUS_REJECTED = 3,
    PROPOSAL_STATUS_ABORTED = 4,
    PROPOSAL_STATUS_WITHDRAWN = 5,
    UNRECOGNIZED = -1
}
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
export declare enum ProposalExecutorResult {
    PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
    PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
    PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
    PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult;
export declare function proposalExecutorResultToJSON(object: ProposalExecutorResult): string;
export interface Member {
    address: string;
    weight: string;
    metadata: string;
    added_at: Date;
}
export interface MemberRequest {
    address: string;
    weight: string;
    metadata: string;
}
export interface ThresholdDecisionPolicy {
    threshold: string;
    windows: DecisionPolicyWindows;
}
export interface PercentageDecisionPolicy {
    percentage: string;
    windows: DecisionPolicyWindows;
}
export interface DecisionPolicyWindows {
    voting_period: Duration;
    min_execution_period: Duration;
}
export interface GroupInfo {
    id: Long;
    admin: string;
    metadata: string;
    version: Long;
    total_weight: string;
    created_at: Date;
}
export interface GroupMember {
    group_id: Long;
    member: Member;
}
export interface GroupPolicyInfo {
    address: string;
    group_id: Long;
    admin: string;
    metadata: string;
    version: Long;
    decision_policy: Any;
    created_at: Date;
}
export interface Proposal {
    id: Long;
    group_policy_address: string;
    metadata: string;
    proposers: string[];
    submit_time: Date;
    group_version: Long;
    group_policy_version: Long;
    status: ProposalStatus;
    final_tally_result: TallyResult;
    voting_period_end: Date;
    executor_result: ProposalExecutorResult;
    messages: Any[];
}
export interface TallyResult {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
}
export interface Vote {
    proposal_id: Long;
    voter: string;
    option: VoteOption;
    metadata: string;
    submit_time: Date;
}
export declare const Member: {
    encode(message: Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Member;
    fromJSON(object: any): Member;
    toJSON(message: Member): unknown;
    fromPartial(object: DeepPartial<Member>): Member;
};
export declare const MemberRequest: {
    encode(message: MemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberRequest;
    fromJSON(object: any): MemberRequest;
    toJSON(message: MemberRequest): unknown;
    fromPartial(object: DeepPartial<MemberRequest>): MemberRequest;
};
export declare const ThresholdDecisionPolicy: {
    encode(message: ThresholdDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdDecisionPolicy;
    fromJSON(object: any): ThresholdDecisionPolicy;
    toJSON(message: ThresholdDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy;
};
export declare const PercentageDecisionPolicy: {
    encode(message: PercentageDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PercentageDecisionPolicy;
    fromJSON(object: any): PercentageDecisionPolicy;
    toJSON(message: PercentageDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<PercentageDecisionPolicy>): PercentageDecisionPolicy;
};
export declare const DecisionPolicyWindows: {
    encode(message: DecisionPolicyWindows, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecisionPolicyWindows;
    fromJSON(object: any): DecisionPolicyWindows;
    toJSON(message: DecisionPolicyWindows): unknown;
    fromPartial(object: DeepPartial<DecisionPolicyWindows>): DecisionPolicyWindows;
};
export declare const GroupInfo: {
    encode(message: GroupInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo;
    fromJSON(object: any): GroupInfo;
    toJSON(message: GroupInfo): unknown;
    fromPartial(object: DeepPartial<GroupInfo>): GroupInfo;
};
export declare const GroupMember: {
    encode(message: GroupMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember;
    fromJSON(object: any): GroupMember;
    toJSON(message: GroupMember): unknown;
    fromPartial(object: DeepPartial<GroupMember>): GroupMember;
};
export declare const GroupPolicyInfo: {
    encode(message: GroupPolicyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupPolicyInfo;
    fromJSON(object: any): GroupPolicyInfo;
    toJSON(message: GroupPolicyInfo): unknown;
    fromPartial(object: DeepPartial<GroupPolicyInfo>): GroupPolicyInfo;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
};
export declare const TallyResult: {
    encode(message: TallyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult;
    fromJSON(object: any): TallyResult;
    toJSON(message: TallyResult): unknown;
    fromPartial(object: DeepPartial<TallyResult>): TallyResult;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: DeepPartial<Vote>): Vote;
};
