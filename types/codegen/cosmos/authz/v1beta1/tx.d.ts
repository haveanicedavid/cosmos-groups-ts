import { Grant } from "./authz";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgGrant {
    granter: string;
    grantee: string;
    grant: Grant;
}
export interface MsgExecResponse {
    results: Uint8Array[];
}
export interface MsgExec {
    grantee: string;
    msgs: Any[];
}
export interface MsgGrantResponse {
}
export interface MsgRevoke {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
export interface MsgRevokeResponse {
}
export declare const MsgGrant: {
    encode(message: MsgGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant;
    fromJSON(object: any): MsgGrant;
    toJSON(message: MsgGrant): unknown;
    fromPartial(object: DeepPartial<MsgGrant>): MsgGrant;
};
export declare const MsgExecResponse: {
    encode(message: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(object: any): MsgExecResponse;
    toJSON(message: MsgExecResponse): unknown;
    fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: DeepPartial<MsgExec>): MsgExec;
};
export declare const MsgGrantResponse: {
    encode(_: MsgGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse;
    fromJSON(_: any): MsgGrantResponse;
    toJSON(_: MsgGrantResponse): unknown;
    fromPartial(_: DeepPartial<MsgGrantResponse>): MsgGrantResponse;
};
export declare const MsgRevoke: {
    encode(message: MsgRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevoke;
    fromJSON(object: any): MsgRevoke;
    toJSON(message: MsgRevoke): unknown;
    fromPartial(object: DeepPartial<MsgRevoke>): MsgRevoke;
};
export declare const MsgRevokeResponse: {
    encode(_: MsgRevokeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeResponse;
    fromJSON(_: any): MsgRevokeResponse;
    toJSON(_: MsgRevokeResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevokeResponse>): MsgRevokeResponse;
};
