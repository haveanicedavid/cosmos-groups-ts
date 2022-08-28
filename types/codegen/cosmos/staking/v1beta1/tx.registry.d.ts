import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: any;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: any;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: any;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: any;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: any;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: any;
        };
    };
    withTypeUrl: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
    };
    toJSON: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: unknown;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: unknown;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: unknown;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: unknown;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: unknown;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createValidator(value: any): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: any): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: any): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: any): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: any): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: any): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
    };
    fromPartial: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        editValidator(value: MsgEditValidator): {
            typeUrl: string;
            value: MsgEditValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        beginRedelegate(value: MsgBeginRedelegate): {
            typeUrl: string;
            value: MsgBeginRedelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        cancelUnbondingDelegation(value: MsgCancelUnbondingDelegation): {
            typeUrl: string;
            value: MsgCancelUnbondingDelegation;
        };
    };
};
