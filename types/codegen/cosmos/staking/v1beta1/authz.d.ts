import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum AuthorizationType {
    AUTHORIZATION_TYPE_UNSPECIFIED = 0,
    AUTHORIZATION_TYPE_DELEGATE = 1,
    AUTHORIZATION_TYPE_UNDELEGATE = 2,
    AUTHORIZATION_TYPE_REDELEGATE = 3,
    UNRECOGNIZED = -1
}
export declare function authorizationTypeFromJSON(object: any): AuthorizationType;
export declare function authorizationTypeToJSON(object: AuthorizationType): string;
export interface StakeAuthorization {
    max_tokens: Coin;
    allow_list?: StakeAuthorization_Validators;
    deny_list?: StakeAuthorization_Validators;
    authorization_type: AuthorizationType;
}
export interface StakeAuthorization_Validators {
    address: string[];
}
export declare const StakeAuthorization: {
    encode(message: StakeAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization;
    fromJSON(object: any): StakeAuthorization;
    toJSON(message: StakeAuthorization): unknown;
    fromPartial(object: DeepPartial<StakeAuthorization>): StakeAuthorization;
};
export declare const StakeAuthorization_Validators: {
    encode(message: StakeAuthorization_Validators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization_Validators;
    fromJSON(object: any): StakeAuthorization_Validators;
    toJSON(message: StakeAuthorization_Validators): unknown;
    fromPartial(object: DeepPartial<StakeAuthorization_Validators>): StakeAuthorization_Validators;
};
