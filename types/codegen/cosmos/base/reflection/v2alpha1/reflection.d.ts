import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AppDescriptor {
    authn: AuthnDescriptor;
    chain: ChainDescriptor;
    codec: CodecDescriptor;
    configuration: ConfigurationDescriptor;
    query_services: QueryServicesDescriptor;
    tx: TxDescriptor;
}
export interface TxDescriptor {
    fullname: string;
    msgs: MsgDescriptor[];
}
export interface AuthnDescriptor {
    sign_modes: SigningModeDescriptor[];
}
export interface SigningModeDescriptor {
    name: string;
    number: number;
    authn_info_provider_method_fullname: string;
}
export interface ChainDescriptor {
    id: string;
}
export interface CodecDescriptor {
    interfaces: InterfaceDescriptor[];
}
export interface InterfaceDescriptor {
    fullname: string;
    interface_accepting_messages: InterfaceAcceptingMessageDescriptor[];
    interface_implementers: InterfaceImplementerDescriptor[];
}
export interface InterfaceImplementerDescriptor {
    fullname: string;
    type_url: string;
}
export interface InterfaceAcceptingMessageDescriptor {
    fullname: string;
    field_descriptor_names: string[];
}
export interface ConfigurationDescriptor {
    bech32_account_address_prefix: string;
}
export interface MsgDescriptor {
    msg_type_url: string;
}
export interface GetAuthnDescriptorRequest {
}
export interface GetAuthnDescriptorResponse {
    authn: AuthnDescriptor;
}
export interface GetChainDescriptorRequest {
}
export interface GetChainDescriptorResponse {
    chain: ChainDescriptor;
}
export interface GetCodecDescriptorRequest {
}
export interface GetCodecDescriptorResponse {
    codec: CodecDescriptor;
}
export interface GetConfigurationDescriptorRequest {
}
export interface GetConfigurationDescriptorResponse {
    config: ConfigurationDescriptor;
}
export interface GetQueryServicesDescriptorRequest {
}
export interface GetQueryServicesDescriptorResponse {
    queries: QueryServicesDescriptor;
}
export interface GetTxDescriptorRequest {
}
export interface GetTxDescriptorResponse {
    tx: TxDescriptor;
}
export interface QueryServicesDescriptor {
    query_services: QueryServiceDescriptor[];
}
export interface QueryServiceDescriptor {
    fullname: string;
    is_module: boolean;
    methods: QueryMethodDescriptor[];
}
export interface QueryMethodDescriptor {
    name: string;
    full_query_path: string;
}
export declare const AppDescriptor: {
    encode(message: AppDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppDescriptor;
    fromJSON(object: any): AppDescriptor;
    toJSON(message: AppDescriptor): unknown;
    fromPartial(object: DeepPartial<AppDescriptor>): AppDescriptor;
};
export declare const TxDescriptor: {
    encode(message: TxDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDescriptor;
    fromJSON(object: any): TxDescriptor;
    toJSON(message: TxDescriptor): unknown;
    fromPartial(object: DeepPartial<TxDescriptor>): TxDescriptor;
};
export declare const AuthnDescriptor: {
    encode(message: AuthnDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthnDescriptor;
    fromJSON(object: any): AuthnDescriptor;
    toJSON(message: AuthnDescriptor): unknown;
    fromPartial(object: DeepPartial<AuthnDescriptor>): AuthnDescriptor;
};
export declare const SigningModeDescriptor: {
    encode(message: SigningModeDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningModeDescriptor;
    fromJSON(object: any): SigningModeDescriptor;
    toJSON(message: SigningModeDescriptor): unknown;
    fromPartial(object: DeepPartial<SigningModeDescriptor>): SigningModeDescriptor;
};
export declare const ChainDescriptor: {
    encode(message: ChainDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainDescriptor;
    fromJSON(object: any): ChainDescriptor;
    toJSON(message: ChainDescriptor): unknown;
    fromPartial(object: DeepPartial<ChainDescriptor>): ChainDescriptor;
};
export declare const CodecDescriptor: {
    encode(message: CodecDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodecDescriptor;
    fromJSON(object: any): CodecDescriptor;
    toJSON(message: CodecDescriptor): unknown;
    fromPartial(object: DeepPartial<CodecDescriptor>): CodecDescriptor;
};
export declare const InterfaceDescriptor: {
    encode(message: InterfaceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor;
    fromJSON(object: any): InterfaceDescriptor;
    toJSON(message: InterfaceDescriptor): unknown;
    fromPartial(object: DeepPartial<InterfaceDescriptor>): InterfaceDescriptor;
};
export declare const InterfaceImplementerDescriptor: {
    encode(message: InterfaceImplementerDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceImplementerDescriptor;
    fromJSON(object: any): InterfaceImplementerDescriptor;
    toJSON(message: InterfaceImplementerDescriptor): unknown;
    fromPartial(object: DeepPartial<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor;
};
export declare const InterfaceAcceptingMessageDescriptor: {
    encode(message: InterfaceAcceptingMessageDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor;
    fromJSON(object: any): InterfaceAcceptingMessageDescriptor;
    toJSON(message: InterfaceAcceptingMessageDescriptor): unknown;
    fromPartial(object: DeepPartial<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor;
};
export declare const ConfigurationDescriptor: {
    encode(message: ConfigurationDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationDescriptor;
    fromJSON(object: any): ConfigurationDescriptor;
    toJSON(message: ConfigurationDescriptor): unknown;
    fromPartial(object: DeepPartial<ConfigurationDescriptor>): ConfigurationDescriptor;
};
export declare const MsgDescriptor: {
    encode(message: MsgDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDescriptor;
    fromJSON(object: any): MsgDescriptor;
    toJSON(message: MsgDescriptor): unknown;
    fromPartial(object: DeepPartial<MsgDescriptor>): MsgDescriptor;
};
export declare const GetAuthnDescriptorRequest: {
    encode(_: GetAuthnDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorRequest;
    fromJSON(_: any): GetAuthnDescriptorRequest;
    toJSON(_: GetAuthnDescriptorRequest): unknown;
    fromPartial(_: DeepPartial<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest;
};
export declare const GetAuthnDescriptorResponse: {
    encode(message: GetAuthnDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorResponse;
    fromJSON(object: any): GetAuthnDescriptorResponse;
    toJSON(message: GetAuthnDescriptorResponse): unknown;
    fromPartial(object: DeepPartial<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse;
};
export declare const GetChainDescriptorRequest: {
    encode(_: GetChainDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorRequest;
    fromJSON(_: any): GetChainDescriptorRequest;
    toJSON(_: GetChainDescriptorRequest): unknown;
    fromPartial(_: DeepPartial<GetChainDescriptorRequest>): GetChainDescriptorRequest;
};
export declare const GetChainDescriptorResponse: {
    encode(message: GetChainDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorResponse;
    fromJSON(object: any): GetChainDescriptorResponse;
    toJSON(message: GetChainDescriptorResponse): unknown;
    fromPartial(object: DeepPartial<GetChainDescriptorResponse>): GetChainDescriptorResponse;
};
export declare const GetCodecDescriptorRequest: {
    encode(_: GetCodecDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorRequest;
    fromJSON(_: any): GetCodecDescriptorRequest;
    toJSON(_: GetCodecDescriptorRequest): unknown;
    fromPartial(_: DeepPartial<GetCodecDescriptorRequest>): GetCodecDescriptorRequest;
};
export declare const GetCodecDescriptorResponse: {
    encode(message: GetCodecDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorResponse;
    fromJSON(object: any): GetCodecDescriptorResponse;
    toJSON(message: GetCodecDescriptorResponse): unknown;
    fromPartial(object: DeepPartial<GetCodecDescriptorResponse>): GetCodecDescriptorResponse;
};
export declare const GetConfigurationDescriptorRequest: {
    encode(_: GetConfigurationDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorRequest;
    fromJSON(_: any): GetConfigurationDescriptorRequest;
    toJSON(_: GetConfigurationDescriptorRequest): unknown;
    fromPartial(_: DeepPartial<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest;
};
export declare const GetConfigurationDescriptorResponse: {
    encode(message: GetConfigurationDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorResponse;
    fromJSON(object: any): GetConfigurationDescriptorResponse;
    toJSON(message: GetConfigurationDescriptorResponse): unknown;
    fromPartial(object: DeepPartial<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse;
};
export declare const GetQueryServicesDescriptorRequest: {
    encode(_: GetQueryServicesDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest;
    fromJSON(_: any): GetQueryServicesDescriptorRequest;
    toJSON(_: GetQueryServicesDescriptorRequest): unknown;
    fromPartial(_: DeepPartial<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest;
};
export declare const GetQueryServicesDescriptorResponse: {
    encode(message: GetQueryServicesDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse;
    fromJSON(object: any): GetQueryServicesDescriptorResponse;
    toJSON(message: GetQueryServicesDescriptorResponse): unknown;
    fromPartial(object: DeepPartial<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse;
};
export declare const GetTxDescriptorRequest: {
    encode(_: GetTxDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorRequest;
    fromJSON(_: any): GetTxDescriptorRequest;
    toJSON(_: GetTxDescriptorRequest): unknown;
    fromPartial(_: DeepPartial<GetTxDescriptorRequest>): GetTxDescriptorRequest;
};
export declare const GetTxDescriptorResponse: {
    encode(message: GetTxDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorResponse;
    fromJSON(object: any): GetTxDescriptorResponse;
    toJSON(message: GetTxDescriptorResponse): unknown;
    fromPartial(object: DeepPartial<GetTxDescriptorResponse>): GetTxDescriptorResponse;
};
export declare const QueryServicesDescriptor: {
    encode(message: QueryServicesDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryServicesDescriptor;
    fromJSON(object: any): QueryServicesDescriptor;
    toJSON(message: QueryServicesDescriptor): unknown;
    fromPartial(object: DeepPartial<QueryServicesDescriptor>): QueryServicesDescriptor;
};
export declare const QueryServiceDescriptor: {
    encode(message: QueryServiceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryServiceDescriptor;
    fromJSON(object: any): QueryServiceDescriptor;
    toJSON(message: QueryServiceDescriptor): unknown;
    fromPartial(object: DeepPartial<QueryServiceDescriptor>): QueryServiceDescriptor;
};
export declare const QueryMethodDescriptor: {
    encode(message: QueryMethodDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMethodDescriptor;
    fromJSON(object: any): QueryMethodDescriptor;
    toJSON(message: QueryMethodDescriptor): unknown;
    fromPartial(object: DeepPartial<QueryMethodDescriptor>): QueryMethodDescriptor;
};
