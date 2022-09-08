import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventGrant {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
export interface EventRevoke {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
export declare const EventGrant: {
    encode(message: EventGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGrant;
    fromJSON(object: any): EventGrant;
    toJSON(message: EventGrant): unknown;
    fromPartial(object: DeepPartial<EventGrant>): EventGrant;
};
export declare const EventRevoke: {
    encode(message: EventRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRevoke;
    fromJSON(object: any): EventRevoke;
    toJSON(message: EventRevoke): unknown;
    fromPartial(object: DeepPartial<EventRevoke>): EventRevoke;
};
