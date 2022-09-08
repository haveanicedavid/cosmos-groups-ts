import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface PageRequest {
    key: Uint8Array;
    offset: Long;
    limit: Long;
    count_total: boolean;
    reverse: boolean;
}
export interface PageResponse {
    next_key: Uint8Array;
    total: Long;
}
export declare const PageRequest: {
    encode(message: PageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest;
    fromJSON(object: any): PageRequest;
    toJSON(message: PageRequest): unknown;
    fromPartial(object: DeepPartial<PageRequest>): PageRequest;
};
export declare const PageResponse: {
    encode(message: PageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse;
    fromJSON(object: any): PageResponse;
    toJSON(message: PageResponse): unknown;
    fromPartial(object: DeepPartial<PageResponse>): PageResponse;
};
