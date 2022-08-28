import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: any;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: any;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: any;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: any;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: any;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: any;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: any;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: any;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: any;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: any;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: any;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: any;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: any;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: any;
        };
    };
    withTypeUrl: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
    toJSON: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: unknown;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: unknown;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: unknown;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: unknown;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: unknown;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: unknown;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: unknown;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: unknown;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: unknown;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: unknown;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: unknown;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createGroup(value: any): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: any): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: any): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: any): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: any): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: any): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
    fromPartial: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
};
