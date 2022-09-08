import { ProposalExecutorResult } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventCreateGroup {
    group_id: Long;
}
export interface EventUpdateGroup {
    group_id: Long;
}
export interface EventCreateGroupPolicy {
    address: string;
}
export interface EventUpdateGroupPolicy {
    address: string;
}
export interface EventSubmitProposal {
    proposal_id: Long;
}
export interface EventWithdrawProposal {
    proposal_id: Long;
}
export interface EventVote {
    proposal_id: Long;
}
export interface EventExec {
    proposal_id: Long;
    result: ProposalExecutorResult;
    logs: string;
}
export interface EventLeaveGroup {
    group_id: Long;
    address: string;
}
export declare const EventCreateGroup: {
    encode(message: EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup;
    fromJSON(object: any): EventCreateGroup;
    toJSON(message: EventCreateGroup): unknown;
    fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup;
};
export declare const EventUpdateGroup: {
    encode(message: EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup;
    fromJSON(object: any): EventUpdateGroup;
    toJSON(message: EventUpdateGroup): unknown;
    fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup;
};
export declare const EventCreateGroupPolicy: {
    encode(message: EventCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy;
    fromJSON(object: any): EventCreateGroupPolicy;
    toJSON(message: EventCreateGroupPolicy): unknown;
    fromPartial(object: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy;
};
export declare const EventUpdateGroupPolicy: {
    encode(message: EventUpdateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy;
    fromJSON(object: any): EventUpdateGroupPolicy;
    toJSON(message: EventUpdateGroupPolicy): unknown;
    fromPartial(object: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy;
};
export declare const EventSubmitProposal: {
    encode(message: EventSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal;
    fromJSON(object: any): EventSubmitProposal;
    toJSON(message: EventSubmitProposal): unknown;
    fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal;
};
export declare const EventWithdrawProposal: {
    encode(message: EventWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal;
    fromJSON(object: any): EventWithdrawProposal;
    toJSON(message: EventWithdrawProposal): unknown;
    fromPartial(object: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    fromPartial(object: DeepPartial<EventVote>): EventVote;
};
export declare const EventExec: {
    encode(message: EventExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExec;
    fromJSON(object: any): EventExec;
    toJSON(message: EventExec): unknown;
    fromPartial(object: DeepPartial<EventExec>): EventExec;
};
export declare const EventLeaveGroup: {
    encode(message: EventLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup;
    fromJSON(object: any): EventLeaveGroup;
    toJSON(message: EventLeaveGroup): unknown;
    fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup;
};
