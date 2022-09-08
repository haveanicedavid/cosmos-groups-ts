import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface BaseVestingAccount {
    base_account: BaseAccount;
    original_vesting: Coin[];
    delegated_free: Coin[];
    delegated_vesting: Coin[];
    end_time: Long;
}
export interface ContinuousVestingAccount {
    base_vesting_account: BaseVestingAccount;
    start_time: Long;
}
export interface DelayedVestingAccount {
    base_vesting_account: BaseVestingAccount;
}
export interface Period {
    length: Long;
    amount: Coin[];
}
export interface PeriodicVestingAccount {
    base_vesting_account: BaseVestingAccount;
    start_time: Long;
    vesting_periods: Period[];
}
export interface PermanentLockedAccount {
    base_vesting_account: BaseVestingAccount;
}
export declare const BaseVestingAccount: {
    encode(message: BaseVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount;
    fromJSON(object: any): BaseVestingAccount;
    toJSON(message: BaseVestingAccount): unknown;
    fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount;
};
export declare const ContinuousVestingAccount: {
    encode(message: ContinuousVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContinuousVestingAccount;
    fromJSON(object: any): ContinuousVestingAccount;
    toJSON(message: ContinuousVestingAccount): unknown;
    fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount;
};
export declare const DelayedVestingAccount: {
    encode(message: DelayedVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelayedVestingAccount;
    fromJSON(object: any): DelayedVestingAccount;
    toJSON(message: DelayedVestingAccount): unknown;
    fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount;
};
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Period;
    fromJSON(object: any): Period;
    toJSON(message: Period): unknown;
    fromPartial(object: DeepPartial<Period>): Period;
};
export declare const PeriodicVestingAccount: {
    encode(message: PeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicVestingAccount;
    fromJSON(object: any): PeriodicVestingAccount;
    toJSON(message: PeriodicVestingAccount): unknown;
    fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount;
};
export declare const PermanentLockedAccount: {
    encode(message: PermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermanentLockedAccount;
    fromJSON(object: any): PermanentLockedAccount;
    toJSON(message: PermanentLockedAccount): unknown;
    fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount;
};
