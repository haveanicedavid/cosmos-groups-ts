import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: any;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: any;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: any;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: any;
        };
    };
    withTypeUrl: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
    };
    toJSON: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: unknown;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: unknown;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: unknown;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: any): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
    };
    fromPartial: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        voteWeighted(value: MsgVoteWeighted): {
            typeUrl: string;
            value: MsgVoteWeighted;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
    };
};
