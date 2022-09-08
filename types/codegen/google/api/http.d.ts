import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Http {
    rules: HttpRule[];
    fully_decode_reserved_expansion: boolean;
}
export interface HttpRule {
    selector: string;
    get?: string;
    put?: string;
    post?: string;
    delete?: string;
    patch?: string;
    custom?: CustomHttpPattern;
    body: string;
    response_body: string;
    additional_bindings: HttpRule[];
}
export interface CustomHttpPattern {
    kind: string;
    path: string;
}
export declare const Http: {
    encode(message: Http, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Http;
    fromJSON(object: any): Http;
    toJSON(message: Http): unknown;
    fromPartial(object: DeepPartial<Http>): Http;
};
export declare const HttpRule: {
    encode(message: HttpRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRule;
    fromJSON(object: any): HttpRule;
    toJSON(message: HttpRule): unknown;
    fromPartial(object: DeepPartial<HttpRule>): HttpRule;
};
export declare const CustomHttpPattern: {
    encode(message: CustomHttpPattern, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CustomHttpPattern;
    fromJSON(object: any): CustomHttpPattern;
    toJSON(message: CustomHttpPattern): unknown;
    fromPartial(object: DeepPartial<CustomHttpPattern>): CustomHttpPattern;
};
