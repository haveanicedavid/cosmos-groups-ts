import * as _1 from "./app/module/v1alpha1/module";
import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/tendermint/v1beta1/types";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/module/v1alpha1/module";
import * as _75 from "./orm/v1/orm";
import * as _76 from "./orm/v1alpha1/schema";
import * as _77 from "./params/v1beta1/params";
import * as _78 from "./params/v1beta1/query";
import * as _79 from "./slashing/v1beta1/genesis";
import * as _80 from "./slashing/v1beta1/query";
import * as _81 from "./slashing/v1beta1/slashing";
import * as _82 from "./slashing/v1beta1/tx";
import * as _83 from "./staking/v1beta1/authz";
import * as _84 from "./staking/v1beta1/genesis";
import * as _85 from "./staking/v1beta1/query";
import * as _86 from "./staking/v1beta1/staking";
import * as _87 from "./staking/v1beta1/tx";
import * as _88 from "./tx/signing/v1beta1/signing";
import * as _89 from "./tx/v1beta1/service";
import * as _90 from "./tx/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _94 from "./vesting/v1beta1/tx";
import * as _95 from "./vesting/v1beta1/vesting";
import * as _145 from "./auth/v1beta1/query.lcd";
import * as _146 from "./authz/v1beta1/query.lcd";
import * as _147 from "./bank/v1beta1/query.lcd";
import * as _148 from "./distribution/v1beta1/query.lcd";
import * as _149 from "./evidence/v1beta1/query.lcd";
import * as _150 from "./feegrant/v1beta1/query.lcd";
import * as _151 from "./gov/v1/query.lcd";
import * as _152 from "./gov/v1beta1/query.lcd";
import * as _153 from "./group/v1/query.lcd";
import * as _154 from "./mint/v1beta1/query.lcd";
import * as _155 from "./nft/v1beta1/query.lcd";
import * as _156 from "./params/v1beta1/query.lcd";
import * as _157 from "./slashing/v1beta1/query.lcd";
import * as _158 from "./staking/v1beta1/query.lcd";
import * as _159 from "./upgrade/v1beta1/query.lcd";
import * as _160 from "./app/v1alpha1/query.rpc.query";
import * as _161 from "./auth/v1beta1/query.rpc.query";
import * as _162 from "./authz/v1beta1/query.rpc.query";
import * as _163 from "./bank/v1beta1/query.rpc.query";
import * as _164 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _165 from "./distribution/v1beta1/query.rpc.query";
import * as _166 from "./evidence/v1beta1/query.rpc.query";
import * as _167 from "./feegrant/v1beta1/query.rpc.query";
import * as _168 from "./gov/v1/query.rpc.query";
import * as _169 from "./gov/v1beta1/query.rpc.query";
import * as _170 from "./group/v1/query.rpc.query";
import * as _171 from "./mint/v1beta1/query.rpc.query";
import * as _172 from "./nft/v1beta1/query.rpc.query";
import * as _173 from "./params/v1beta1/query.rpc.query";
import * as _174 from "./slashing/v1beta1/query.rpc.query";
import * as _175 from "./staking/v1beta1/query.rpc.query";
import * as _176 from "./tx/v1beta1/service.rpc.svc";
import * as _177 from "./upgrade/v1beta1/query.rpc.query";
import * as _178 from "./authz/v1beta1/tx.rpc.msg";
import * as _179 from "./bank/v1beta1/tx.rpc.msg";
import * as _180 from "./crisis/v1beta1/tx.rpc.msg";
import * as _181 from "./distribution/v1beta1/tx.rpc.msg";
import * as _182 from "./evidence/v1beta1/tx.rpc.msg";
import * as _183 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _184 from "./gov/v1/tx.rpc.msg";
import * as _185 from "./gov/v1beta1/tx.rpc.msg";
import * as _186 from "./group/v1/tx.rpc.msg";
import * as _187 from "./nft/v1beta1/tx.rpc.msg";
import * as _188 from "./slashing/v1beta1/tx.rpc.msg";
import * as _189 from "./staking/v1beta1/tx.rpc.msg";
import * as _190 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _191 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _1.Module, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _1.Module;
                    fromJSON(_: any): _1.Module;
                    toJSON(_: _1.Module): unknown;
                    fromPartial(_: DeepPartial<_1.Module>): _1.Module;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _160.QueryClientImpl;
            QueryConfigRequest: {
                encode(_: _4.QueryConfigRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial(_: DeepPartial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _4.QueryConfigResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial(object: DeepPartial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _3.ModuleDescriptor, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial(object: DeepPartial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _3.PackageReference, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial(object: DeepPartial<_3.PackageReference>): _3.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _3.MigrateFromInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial(object: DeepPartial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
            };
            Config: {
                encode(message: _2.Config, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial(object: DeepPartial<_2.Config>): _2.Config;
            };
            ModuleConfig: {
                encode(message: _2.ModuleConfig, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial(object: DeepPartial<_2.ModuleConfig>): _2.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _161.QueryClientImpl;
            LCDQueryClient: typeof _145.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _7.QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial(object: DeepPartial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _7.QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial(object: DeepPartial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _7.QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial(object: DeepPartial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _7.QueryModuleAccountsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial(_: DeepPartial<_7.QueryModuleAccountsRequest>): _7.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _7.QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial(object: DeepPartial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _7.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: DeepPartial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _7.QueryModuleAccountsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial(object: DeepPartial<_7.QueryModuleAccountsResponse>): _7.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _7.Bech32PrefixRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial(_: DeepPartial<_7.Bech32PrefixRequest>): _7.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _7.Bech32PrefixResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial(object: DeepPartial<_7.Bech32PrefixResponse>): _7.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _7.AddressBytesToStringRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial(object: DeepPartial<_7.AddressBytesToStringRequest>): _7.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _7.AddressBytesToStringResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial(object: DeepPartial<_7.AddressBytesToStringResponse>): _7.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _7.AddressStringToBytesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial(object: DeepPartial<_7.AddressStringToBytesRequest>): _7.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _7.AddressStringToBytesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial(object: DeepPartial<_7.AddressStringToBytesResponse>): _7.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _7.QueryAccountAddressByIDRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _7.QueryAccountAddressByIDRequest;
                toJSON(message: _7.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: DeepPartial<_7.QueryAccountAddressByIDRequest>): _7.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _7.QueryAccountAddressByIDResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _7.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _7.QueryAccountAddressByIDResponse;
                toJSON(message: _7.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: DeepPartial<_7.QueryAccountAddressByIDResponse>): _7.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: DeepPartial<_6.GenesisState>): _6.GenesisState;
            };
            BaseAccount: {
                encode(message: _5.BaseAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial(object: DeepPartial<_5.BaseAccount>): _5.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _5.ModuleAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial(object: DeepPartial<_5.ModuleAccount>): _5.ModuleAccount;
            };
            Params: {
                encode(message: _5.Params, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial(object: DeepPartial<_5.Params>): _5.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            LCDQueryClient: typeof _146.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: any;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: any;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _12.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _12.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _12.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _12.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _12.MsgGrant, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _12.MsgGrant;
                fromJSON(object: any): _12.MsgGrant;
                toJSON(message: _12.MsgGrant): unknown;
                fromPartial(object: DeepPartial<_12.MsgGrant>): _12.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _12.MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _12.MsgExecResponse;
                fromJSON(object: any): _12.MsgExecResponse;
                toJSON(message: _12.MsgExecResponse): unknown;
                fromPartial(object: DeepPartial<_12.MsgExecResponse>): _12.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _12.MsgExec, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _12.MsgExec;
                fromJSON(object: any): _12.MsgExec;
                toJSON(message: _12.MsgExec): unknown;
                fromPartial(object: DeepPartial<_12.MsgExec>): _12.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _12.MsgGrantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _12.MsgGrantResponse;
                fromJSON(_: any): _12.MsgGrantResponse;
                toJSON(_: _12.MsgGrantResponse): unknown;
                fromPartial(_: DeepPartial<_12.MsgGrantResponse>): _12.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _12.MsgRevoke, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _12.MsgRevoke;
                fromJSON(object: any): _12.MsgRevoke;
                toJSON(message: _12.MsgRevoke): unknown;
                fromPartial(object: DeepPartial<_12.MsgRevoke>): _12.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _12.MsgRevokeResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _12.MsgRevokeResponse;
                fromJSON(_: any): _12.MsgRevokeResponse;
                toJSON(_: _12.MsgRevokeResponse): unknown;
                fromPartial(_: DeepPartial<_12.MsgRevokeResponse>): _12.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _11.QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _11.QueryGrantsRequest;
                fromJSON(object: any): _11.QueryGrantsRequest;
                toJSON(message: _11.QueryGrantsRequest): unknown;
                fromPartial(object: DeepPartial<_11.QueryGrantsRequest>): _11.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _11.QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _11.QueryGrantsResponse;
                fromJSON(object: any): _11.QueryGrantsResponse;
                toJSON(message: _11.QueryGrantsResponse): unknown;
                fromPartial(object: DeepPartial<_11.QueryGrantsResponse>): _11.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _11.QueryGranterGrantsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _11.QueryGranterGrantsRequest;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                toJSON(message: _11.QueryGranterGrantsRequest): unknown;
                fromPartial(object: DeepPartial<_11.QueryGranterGrantsRequest>): _11.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _11.QueryGranterGrantsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _11.QueryGranterGrantsResponse;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                toJSON(message: _11.QueryGranterGrantsResponse): unknown;
                fromPartial(object: DeepPartial<_11.QueryGranterGrantsResponse>): _11.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _11.QueryGranteeGrantsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _11.QueryGranteeGrantsRequest;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                toJSON(message: _11.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: DeepPartial<_11.QueryGranteeGrantsRequest>): _11.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _11.QueryGranteeGrantsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _11.QueryGranteeGrantsResponse;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                toJSON(message: _11.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: DeepPartial<_11.QueryGranteeGrantsResponse>): _11.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: DeepPartial<_10.GenesisState>): _10.GenesisState;
            };
            EventGrant: {
                encode(message: _9.EventGrant, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _9.EventGrant;
                fromJSON(object: any): _9.EventGrant;
                toJSON(message: _9.EventGrant): unknown;
                fromPartial(object: DeepPartial<_9.EventGrant>): _9.EventGrant;
            };
            EventRevoke: {
                encode(message: _9.EventRevoke, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _9.EventRevoke;
                fromJSON(object: any): _9.EventRevoke;
                toJSON(message: _9.EventRevoke): unknown;
                fromPartial(object: DeepPartial<_9.EventRevoke>): _9.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _8.GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _8.GenericAuthorization;
                fromJSON(object: any): _8.GenericAuthorization;
                toJSON(message: _8.GenericAuthorization): unknown;
                fromPartial(object: DeepPartial<_8.GenericAuthorization>): _8.GenericAuthorization;
            };
            Grant: {
                encode(message: _8.Grant, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _8.Grant;
                fromJSON(object: any): _8.Grant;
                toJSON(message: _8.Grant): unknown;
                fromPartial(object: DeepPartial<_8.Grant>): _8.Grant;
            };
            GrantAuthorization: {
                encode(message: _8.GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _8.GrantAuthorization;
                fromJSON(object: any): _8.GrantAuthorization;
                toJSON(message: _8.GrantAuthorization): unknown;
                fromPartial(object: DeepPartial<_8.GrantAuthorization>): _8.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _8.GrantQueueItem, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _8.GrantQueueItem;
                fromJSON(object: any): _8.GrantQueueItem;
                toJSON(message: _8.GrantQueueItem): unknown;
                fromPartial(object: DeepPartial<_8.GrantQueueItem>): _8.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: any;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _17.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _17.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _17.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _17.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _17.MsgSend, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _17.MsgSend;
                fromJSON(object: any): _17.MsgSend;
                toJSON(message: _17.MsgSend): unknown;
                fromPartial(object: DeepPartial<_17.MsgSend>): _17.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _17.MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _17.MsgSendResponse;
                fromJSON(_: any): _17.MsgSendResponse;
                toJSON(_: _17.MsgSendResponse): unknown;
                fromPartial(_: DeepPartial<_17.MsgSendResponse>): _17.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _17.MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _17.MsgMultiSend;
                fromJSON(object: any): _17.MsgMultiSend;
                toJSON(message: _17.MsgMultiSend): unknown;
                fromPartial(object: DeepPartial<_17.MsgMultiSend>): _17.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _17.MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _17.MsgMultiSendResponse;
                fromJSON(_: any): _17.MsgMultiSendResponse;
                toJSON(_: _17.MsgMultiSendResponse): unknown;
                fromPartial(_: DeepPartial<_17.MsgMultiSendResponse>): _17.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _16.QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryBalanceRequest;
                fromJSON(object: any): _16.QueryBalanceRequest;
                toJSON(message: _16.QueryBalanceRequest): unknown;
                fromPartial(object: DeepPartial<_16.QueryBalanceRequest>): _16.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _16.QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryBalanceResponse;
                fromJSON(object: any): _16.QueryBalanceResponse;
                toJSON(message: _16.QueryBalanceResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryBalanceResponse>): _16.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _16.QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryAllBalancesRequest;
                fromJSON(object: any): _16.QueryAllBalancesRequest;
                toJSON(message: _16.QueryAllBalancesRequest): unknown;
                fromPartial(object: DeepPartial<_16.QueryAllBalancesRequest>): _16.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _16.QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryAllBalancesResponse;
                fromJSON(object: any): _16.QueryAllBalancesResponse;
                toJSON(message: _16.QueryAllBalancesResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryAllBalancesResponse>): _16.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _16.QuerySpendableBalancesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QuerySpendableBalancesRequest;
                fromJSON(object: any): _16.QuerySpendableBalancesRequest;
                toJSON(message: _16.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: DeepPartial<_16.QuerySpendableBalancesRequest>): _16.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _16.QuerySpendableBalancesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QuerySpendableBalancesResponse;
                fromJSON(object: any): _16.QuerySpendableBalancesResponse;
                toJSON(message: _16.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: DeepPartial<_16.QuerySpendableBalancesResponse>): _16.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _16.QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryTotalSupplyRequest;
                fromJSON(object: any): _16.QueryTotalSupplyRequest;
                toJSON(message: _16.QueryTotalSupplyRequest): unknown;
                fromPartial(object: DeepPartial<_16.QueryTotalSupplyRequest>): _16.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _16.QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryTotalSupplyResponse;
                fromJSON(object: any): _16.QueryTotalSupplyResponse;
                toJSON(message: _16.QueryTotalSupplyResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryTotalSupplyResponse>): _16.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _16.QuerySupplyOfRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QuerySupplyOfRequest;
                fromJSON(object: any): _16.QuerySupplyOfRequest;
                toJSON(message: _16.QuerySupplyOfRequest): unknown;
                fromPartial(object: DeepPartial<_16.QuerySupplyOfRequest>): _16.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _16.QuerySupplyOfResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QuerySupplyOfResponse;
                fromJSON(object: any): _16.QuerySupplyOfResponse;
                toJSON(message: _16.QuerySupplyOfResponse): unknown;
                fromPartial(object: DeepPartial<_16.QuerySupplyOfResponse>): _16.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: DeepPartial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _16.QueryDenomsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryDenomsMetadataRequest;
                fromJSON(object: any): _16.QueryDenomsMetadataRequest;
                toJSON(message: _16.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: DeepPartial<_16.QueryDenomsMetadataRequest>): _16.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _16.QueryDenomsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryDenomsMetadataResponse;
                fromJSON(object: any): _16.QueryDenomsMetadataResponse;
                toJSON(message: _16.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryDenomsMetadataResponse>): _16.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _16.QueryDenomMetadataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryDenomMetadataRequest;
                fromJSON(object: any): _16.QueryDenomMetadataRequest;
                toJSON(message: _16.QueryDenomMetadataRequest): unknown;
                fromPartial(object: DeepPartial<_16.QueryDenomMetadataRequest>): _16.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _16.QueryDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryDenomMetadataResponse;
                fromJSON(object: any): _16.QueryDenomMetadataResponse;
                toJSON(message: _16.QueryDenomMetadataResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryDenomMetadataResponse>): _16.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _16.QueryDenomOwnersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryDenomOwnersRequest;
                fromJSON(object: any): _16.QueryDenomOwnersRequest;
                toJSON(message: _16.QueryDenomOwnersRequest): unknown;
                fromPartial(object: DeepPartial<_16.QueryDenomOwnersRequest>): _16.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _16.DenomOwner, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.DenomOwner;
                fromJSON(object: any): _16.DenomOwner;
                toJSON(message: _16.DenomOwner): unknown;
                fromPartial(object: DeepPartial<_16.DenomOwner>): _16.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _16.QueryDenomOwnersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _16.QueryDenomOwnersResponse;
                fromJSON(object: any): _16.QueryDenomOwnersResponse;
                toJSON(message: _16.QueryDenomOwnersResponse): unknown;
                fromPartial(object: DeepPartial<_16.QueryDenomOwnersResponse>): _16.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: DeepPartial<_15.GenesisState>): _15.GenesisState;
            };
            Balance: {
                encode(message: _15.Balance, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _15.Balance;
                fromJSON(object: any): _15.Balance;
                toJSON(message: _15.Balance): unknown;
                fromPartial(object: DeepPartial<_15.Balance>): _15.Balance;
            };
            Params: {
                encode(message: _14.Params, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.Params;
                fromJSON(object: any): _14.Params;
                toJSON(message: _14.Params): unknown;
                fromPartial(object: DeepPartial<_14.Params>): _14.Params;
            };
            SendEnabled: {
                encode(message: _14.SendEnabled, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.SendEnabled;
                fromJSON(object: any): _14.SendEnabled;
                toJSON(message: _14.SendEnabled): unknown;
                fromPartial(object: DeepPartial<_14.SendEnabled>): _14.SendEnabled;
            };
            Input: {
                encode(message: _14.Input, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.Input;
                fromJSON(object: any): _14.Input;
                toJSON(message: _14.Input): unknown;
                fromPartial(object: DeepPartial<_14.Input>): _14.Input;
            };
            Output: {
                encode(message: _14.Output, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.Output;
                fromJSON(object: any): _14.Output;
                toJSON(message: _14.Output): unknown;
                fromPartial(object: DeepPartial<_14.Output>): _14.Output;
            };
            Supply: {
                encode(message: _14.Supply, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.Supply;
                fromJSON(object: any): _14.Supply;
                toJSON(message: _14.Supply): unknown;
                fromPartial(object: DeepPartial<_14.Supply>): _14.Supply;
            };
            DenomUnit: {
                encode(message: _14.DenomUnit, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.DenomUnit;
                fromJSON(object: any): _14.DenomUnit;
                toJSON(message: _14.DenomUnit): unknown;
                fromPartial(object: DeepPartial<_14.DenomUnit>): _14.DenomUnit;
            };
            Metadata: {
                encode(message: _14.Metadata, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _14.Metadata;
                fromJSON(object: any): _14.Metadata;
                toJSON(message: _14.Metadata): unknown;
                fromPartial(object: DeepPartial<_14.Metadata>): _14.Metadata;
            };
            SendAuthorization: {
                encode(message: _13.SendAuthorization, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _13.SendAuthorization;
                fromJSON(object: any): _13.SendAuthorization;
                toJSON(message: _13.SendAuthorization): unknown;
                fromPartial(object: DeepPartial<_13.SendAuthorization>): _13.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _18.TxResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.TxResponse;
                    fromJSON(object: any): _18.TxResponse;
                    toJSON(message: _18.TxResponse): unknown;
                    fromPartial(object: DeepPartial<_18.TxResponse>): _18.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _18.ABCIMessageLog, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.ABCIMessageLog;
                    fromJSON(object: any): _18.ABCIMessageLog;
                    toJSON(message: _18.ABCIMessageLog): unknown;
                    fromPartial(object: DeepPartial<_18.ABCIMessageLog>): _18.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _18.StringEvent, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.StringEvent;
                    fromJSON(object: any): _18.StringEvent;
                    toJSON(message: _18.StringEvent): unknown;
                    fromPartial(object: DeepPartial<_18.StringEvent>): _18.StringEvent;
                };
                Attribute: {
                    encode(message: _18.Attribute, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.Attribute;
                    fromJSON(object: any): _18.Attribute;
                    toJSON(message: _18.Attribute): unknown;
                    fromPartial(object: DeepPartial<_18.Attribute>): _18.Attribute;
                };
                GasInfo: {
                    encode(message: _18.GasInfo, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.GasInfo;
                    fromJSON(object: any): _18.GasInfo;
                    toJSON(message: _18.GasInfo): unknown;
                    fromPartial(object: DeepPartial<_18.GasInfo>): _18.GasInfo;
                };
                Result: {
                    encode(message: _18.Result, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.Result;
                    fromJSON(object: any): _18.Result;
                    toJSON(message: _18.Result): unknown;
                    fromPartial(object: DeepPartial<_18.Result>): _18.Result;
                };
                SimulationResponse: {
                    encode(message: _18.SimulationResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.SimulationResponse;
                    fromJSON(object: any): _18.SimulationResponse;
                    toJSON(message: _18.SimulationResponse): unknown;
                    fromPartial(object: DeepPartial<_18.SimulationResponse>): _18.SimulationResponse;
                };
                MsgData: {
                    encode(message: _18.MsgData, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.MsgData;
                    fromJSON(object: any): _18.MsgData;
                    toJSON(message: _18.MsgData): unknown;
                    fromPartial(object: DeepPartial<_18.MsgData>): _18.MsgData;
                };
                TxMsgData: {
                    encode(message: _18.TxMsgData, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.TxMsgData;
                    fromJSON(object: any): _18.TxMsgData;
                    toJSON(message: _18.TxMsgData): unknown;
                    fromPartial(object: DeepPartial<_18.TxMsgData>): _18.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _18.SearchTxsResult, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _18.SearchTxsResult;
                    fromJSON(object: any): _18.SearchTxsResult;
                    toJSON(message: _18.SearchTxsResult): unknown;
                    fromPartial(object: DeepPartial<_18.SearchTxsResult>): _18.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _19.Pairs, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _19.Pairs;
                    fromJSON(object: any): _19.Pairs;
                    toJSON(message: _19.Pairs): unknown;
                    fromPartial(object: DeepPartial<_19.Pairs>): _19.Pairs;
                };
                Pair: {
                    encode(message: _19.Pair, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _19.Pair;
                    fromJSON(object: any): _19.Pair;
                    toJSON(message: _19.Pair): unknown;
                    fromPartial(object: DeepPartial<_19.Pair>): _19.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _20.PageRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _20.PageRequest;
                    fromJSON(object: any): _20.PageRequest;
                    toJSON(message: _20.PageRequest): unknown;
                    fromPartial(object: DeepPartial<_20.PageRequest>): _20.PageRequest;
                };
                PageResponse: {
                    encode(message: _20.PageResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _20.PageResponse;
                    fromJSON(object: any): _20.PageResponse;
                    toJSON(message: _20.PageResponse): unknown;
                    fromPartial(object: DeepPartial<_20.PageResponse>): _20.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _21.ListAllInterfacesRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _21.ListAllInterfacesRequest;
                    fromJSON(_: any): _21.ListAllInterfacesRequest;
                    toJSON(_: _21.ListAllInterfacesRequest): unknown;
                    fromPartial(_: DeepPartial<_21.ListAllInterfacesRequest>): _21.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _21.ListAllInterfacesResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _21.ListAllInterfacesResponse;
                    fromJSON(object: any): _21.ListAllInterfacesResponse;
                    toJSON(message: _21.ListAllInterfacesResponse): unknown;
                    fromPartial(object: DeepPartial<_21.ListAllInterfacesResponse>): _21.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _21.ListImplementationsRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _21.ListImplementationsRequest;
                    fromJSON(object: any): _21.ListImplementationsRequest;
                    toJSON(message: _21.ListImplementationsRequest): unknown;
                    fromPartial(object: DeepPartial<_21.ListImplementationsRequest>): _21.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _21.ListImplementationsResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _21.ListImplementationsResponse;
                    fromJSON(object: any): _21.ListImplementationsResponse;
                    toJSON(message: _21.ListImplementationsResponse): unknown;
                    fromPartial(object: DeepPartial<_21.ListImplementationsResponse>): _21.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _22.AppDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.AppDescriptor;
                    fromJSON(object: any): _22.AppDescriptor;
                    toJSON(message: _22.AppDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.AppDescriptor>): _22.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _22.TxDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.TxDescriptor;
                    fromJSON(object: any): _22.TxDescriptor;
                    toJSON(message: _22.TxDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.TxDescriptor>): _22.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _22.AuthnDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.AuthnDescriptor;
                    fromJSON(object: any): _22.AuthnDescriptor;
                    toJSON(message: _22.AuthnDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.AuthnDescriptor>): _22.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _22.SigningModeDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.SigningModeDescriptor;
                    fromJSON(object: any): _22.SigningModeDescriptor;
                    toJSON(message: _22.SigningModeDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.SigningModeDescriptor>): _22.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _22.ChainDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.ChainDescriptor;
                    fromJSON(object: any): _22.ChainDescriptor;
                    toJSON(message: _22.ChainDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.ChainDescriptor>): _22.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _22.CodecDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.CodecDescriptor;
                    fromJSON(object: any): _22.CodecDescriptor;
                    toJSON(message: _22.CodecDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.CodecDescriptor>): _22.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _22.InterfaceDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.InterfaceDescriptor;
                    fromJSON(object: any): _22.InterfaceDescriptor;
                    toJSON(message: _22.InterfaceDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.InterfaceDescriptor>): _22.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _22.InterfaceImplementerDescriptor;
                    toJSON(message: _22.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.InterfaceImplementerDescriptor>): _22.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _22.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _22.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.InterfaceAcceptingMessageDescriptor>): _22.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _22.ConfigurationDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.ConfigurationDescriptor;
                    fromJSON(object: any): _22.ConfigurationDescriptor;
                    toJSON(message: _22.ConfigurationDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.ConfigurationDescriptor>): _22.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _22.MsgDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.MsgDescriptor;
                    fromJSON(object: any): _22.MsgDescriptor;
                    toJSON(message: _22.MsgDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.MsgDescriptor>): _22.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _22.GetAuthnDescriptorRequest;
                    toJSON(_: _22.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: DeepPartial<_22.GetAuthnDescriptorRequest>): _22.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _22.GetAuthnDescriptorResponse;
                    toJSON(message: _22.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: DeepPartial<_22.GetAuthnDescriptorResponse>): _22.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _22.GetChainDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetChainDescriptorRequest;
                    fromJSON(_: any): _22.GetChainDescriptorRequest;
                    toJSON(_: _22.GetChainDescriptorRequest): unknown;
                    fromPartial(_: DeepPartial<_22.GetChainDescriptorRequest>): _22.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _22.GetChainDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetChainDescriptorResponse;
                    fromJSON(object: any): _22.GetChainDescriptorResponse;
                    toJSON(message: _22.GetChainDescriptorResponse): unknown;
                    fromPartial(object: DeepPartial<_22.GetChainDescriptorResponse>): _22.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _22.GetCodecDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetCodecDescriptorRequest;
                    fromJSON(_: any): _22.GetCodecDescriptorRequest;
                    toJSON(_: _22.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: DeepPartial<_22.GetCodecDescriptorRequest>): _22.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _22.GetCodecDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetCodecDescriptorResponse;
                    fromJSON(object: any): _22.GetCodecDescriptorResponse;
                    toJSON(message: _22.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: DeepPartial<_22.GetCodecDescriptorResponse>): _22.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _22.GetConfigurationDescriptorRequest;
                    toJSON(_: _22.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: DeepPartial<_22.GetConfigurationDescriptorRequest>): _22.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _22.GetConfigurationDescriptorResponse;
                    toJSON(message: _22.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: DeepPartial<_22.GetConfigurationDescriptorResponse>): _22.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _22.GetQueryServicesDescriptorRequest;
                    toJSON(_: _22.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: DeepPartial<_22.GetQueryServicesDescriptorRequest>): _22.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _22.GetQueryServicesDescriptorResponse;
                    toJSON(message: _22.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: DeepPartial<_22.GetQueryServicesDescriptorResponse>): _22.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _22.GetTxDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetTxDescriptorRequest;
                    fromJSON(_: any): _22.GetTxDescriptorRequest;
                    toJSON(_: _22.GetTxDescriptorRequest): unknown;
                    fromPartial(_: DeepPartial<_22.GetTxDescriptorRequest>): _22.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _22.GetTxDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.GetTxDescriptorResponse;
                    fromJSON(object: any): _22.GetTxDescriptorResponse;
                    toJSON(message: _22.GetTxDescriptorResponse): unknown;
                    fromPartial(object: DeepPartial<_22.GetTxDescriptorResponse>): _22.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _22.QueryServicesDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.QueryServicesDescriptor;
                    fromJSON(object: any): _22.QueryServicesDescriptor;
                    toJSON(message: _22.QueryServicesDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.QueryServicesDescriptor>): _22.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _22.QueryServiceDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.QueryServiceDescriptor;
                    fromJSON(object: any): _22.QueryServiceDescriptor;
                    toJSON(message: _22.QueryServiceDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.QueryServiceDescriptor>): _22.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _22.QueryMethodDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _22.QueryMethodDescriptor;
                    fromJSON(object: any): _22.QueryMethodDescriptor;
                    toJSON(message: _22.QueryMethodDescriptor): unknown;
                    fromPartial(object: DeepPartial<_22.QueryMethodDescriptor>): _22.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _23.Snapshot, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.Snapshot;
                    fromJSON(object: any): _23.Snapshot;
                    toJSON(message: _23.Snapshot): unknown;
                    fromPartial(object: DeepPartial<_23.Snapshot>): _23.Snapshot;
                };
                Metadata: {
                    encode(message: _23.Metadata, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.Metadata;
                    fromJSON(object: any): _23.Metadata;
                    toJSON(message: _23.Metadata): unknown;
                    fromPartial(object: DeepPartial<_23.Metadata>): _23.Metadata;
                };
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotItem;
                    fromJSON(object: any): _23.SnapshotItem;
                    toJSON(message: _23.SnapshotItem): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotItem>): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotStoreItem;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    toJSON(message: _23.SnapshotStoreItem): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotIAVLItem;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    toJSON(message: _23.SnapshotIAVLItem): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _23.SnapshotExtensionMeta, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotExtensionMeta;
                    fromJSON(object: any): _23.SnapshotExtensionMeta;
                    toJSON(message: _23.SnapshotExtensionMeta): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotExtensionMeta>): _23.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _23.SnapshotExtensionPayload, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotExtensionPayload;
                    fromJSON(object: any): _23.SnapshotExtensionPayload;
                    toJSON(message: _23.SnapshotExtensionPayload): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotExtensionPayload>): _23.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _23.SnapshotKVItem, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotKVItem;
                    fromJSON(object: any): _23.SnapshotKVItem;
                    toJSON(message: _23.SnapshotKVItem): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotKVItem>): _23.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _23.SnapshotSchema, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _23.SnapshotSchema;
                    fromJSON(object: any): _23.SnapshotSchema;
                    toJSON(message: _23.SnapshotSchema): unknown;
                    fromPartial(object: DeepPartial<_23.SnapshotSchema>): _23.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _25.StoreKVPair, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _25.StoreKVPair;
                    fromJSON(object: any): _25.StoreKVPair;
                    toJSON(message: _25.StoreKVPair): unknown;
                    fromPartial(object: DeepPartial<_25.StoreKVPair>): _25.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _24.CommitInfo, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _24.CommitInfo;
                    fromJSON(object: any): _24.CommitInfo;
                    toJSON(message: _24.CommitInfo): unknown;
                    fromPartial(object: DeepPartial<_24.CommitInfo>): _24.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _24.StoreInfo, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _24.StoreInfo;
                    fromJSON(object: any): _24.StoreInfo;
                    toJSON(message: _24.StoreInfo): unknown;
                    fromPartial(object: DeepPartial<_24.StoreInfo>): _24.StoreInfo;
                };
                CommitID: {
                    encode(message: _24.CommitID, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _24.CommitID;
                    fromJSON(object: any): _24.CommitID;
                    toJSON(message: _24.CommitID): unknown;
                    fromPartial(object: DeepPartial<_24.CommitID>): _24.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _164.ServiceClientImpl;
                Block: {
                    encode(message: _27.Block, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _27.Block;
                    fromJSON(object: any): _27.Block;
                    toJSON(message: _27.Block): unknown;
                    fromPartial(object: DeepPartial<_27.Block>): _27.Block;
                };
                Header: {
                    encode(message: _27.Header, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _27.Header;
                    fromJSON(object: any): _27.Header;
                    toJSON(message: _27.Header): unknown;
                    fromPartial(object: DeepPartial<_27.Header>): _27.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _26.GetValidatorSetByHeightRequest;
                    toJSON(message: _26.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: DeepPartial<_26.GetValidatorSetByHeightRequest>): _26.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _26.GetValidatorSetByHeightResponse;
                    toJSON(message: _26.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: DeepPartial<_26.GetValidatorSetByHeightResponse>): _26.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _26.GetLatestValidatorSetRequest;
                    toJSON(message: _26.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: DeepPartial<_26.GetLatestValidatorSetRequest>): _26.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _26.GetLatestValidatorSetResponse;
                    toJSON(message: _26.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: DeepPartial<_26.GetLatestValidatorSetResponse>): _26.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _26.Validator, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.Validator;
                    fromJSON(object: any): _26.Validator;
                    toJSON(message: _26.Validator): unknown;
                    fromPartial(object: DeepPartial<_26.Validator>): _26.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _26.GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetBlockByHeightRequest;
                    fromJSON(object: any): _26.GetBlockByHeightRequest;
                    toJSON(message: _26.GetBlockByHeightRequest): unknown;
                    fromPartial(object: DeepPartial<_26.GetBlockByHeightRequest>): _26.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _26.GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetBlockByHeightResponse;
                    fromJSON(object: any): _26.GetBlockByHeightResponse;
                    toJSON(message: _26.GetBlockByHeightResponse): unknown;
                    fromPartial(object: DeepPartial<_26.GetBlockByHeightResponse>): _26.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _26.GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetLatestBlockRequest;
                    fromJSON(_: any): _26.GetLatestBlockRequest;
                    toJSON(_: _26.GetLatestBlockRequest): unknown;
                    fromPartial(_: DeepPartial<_26.GetLatestBlockRequest>): _26.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _26.GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetLatestBlockResponse;
                    fromJSON(object: any): _26.GetLatestBlockResponse;
                    toJSON(message: _26.GetLatestBlockResponse): unknown;
                    fromPartial(object: DeepPartial<_26.GetLatestBlockResponse>): _26.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _26.GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetSyncingRequest;
                    fromJSON(_: any): _26.GetSyncingRequest;
                    toJSON(_: _26.GetSyncingRequest): unknown;
                    fromPartial(_: DeepPartial<_26.GetSyncingRequest>): _26.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _26.GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetSyncingResponse;
                    fromJSON(object: any): _26.GetSyncingResponse;
                    toJSON(message: _26.GetSyncingResponse): unknown;
                    fromPartial(object: DeepPartial<_26.GetSyncingResponse>): _26.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _26.GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetNodeInfoRequest;
                    fromJSON(_: any): _26.GetNodeInfoRequest;
                    toJSON(_: _26.GetNodeInfoRequest): unknown;
                    fromPartial(_: DeepPartial<_26.GetNodeInfoRequest>): _26.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _26.GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.GetNodeInfoResponse;
                    fromJSON(object: any): _26.GetNodeInfoResponse;
                    toJSON(message: _26.GetNodeInfoResponse): unknown;
                    fromPartial(object: DeepPartial<_26.GetNodeInfoResponse>): _26.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _26.VersionInfo, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.VersionInfo;
                    fromJSON(object: any): _26.VersionInfo;
                    toJSON(message: _26.VersionInfo): unknown;
                    fromPartial(object: DeepPartial<_26.VersionInfo>): _26.VersionInfo;
                };
                Module: {
                    encode(message: _26.Module, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.Module;
                    fromJSON(object: any): _26.Module;
                    toJSON(message: _26.Module): unknown;
                    fromPartial(object: DeepPartial<_26.Module>): _26.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _26.ABCIQueryRequest, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.ABCIQueryRequest;
                    fromJSON(object: any): _26.ABCIQueryRequest;
                    toJSON(message: _26.ABCIQueryRequest): unknown;
                    fromPartial(object: DeepPartial<_26.ABCIQueryRequest>): _26.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _26.ABCIQueryResponse, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.ABCIQueryResponse;
                    fromJSON(object: any): _26.ABCIQueryResponse;
                    toJSON(message: _26.ABCIQueryResponse): unknown;
                    fromPartial(object: DeepPartial<_26.ABCIQueryResponse>): _26.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _26.ProofOp, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.ProofOp;
                    fromJSON(object: any): _26.ProofOp;
                    toJSON(message: _26.ProofOp): unknown;
                    fromPartial(object: DeepPartial<_26.ProofOp>): _26.ProofOp;
                };
                ProofOps: {
                    encode(message: _26.ProofOps, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _26.ProofOps;
                    fromJSON(object: any): _26.ProofOps;
                    toJSON(message: _26.ProofOps): unknown;
                    fromPartial(object: DeepPartial<_26.ProofOps>): _26.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _28.Coin, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _28.Coin;
                fromJSON(object: any): _28.Coin;
                toJSON(message: _28.Coin): unknown;
                fromPartial(object: DeepPartial<_28.Coin>): _28.Coin;
            };
            DecCoin: {
                encode(message: _28.DecCoin, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _28.DecCoin;
                fromJSON(object: any): _28.DecCoin;
                toJSON(message: _28.DecCoin): unknown;
                fromPartial(object: DeepPartial<_28.DecCoin>): _28.DecCoin;
            };
            IntProto: {
                encode(message: _28.IntProto, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _28.IntProto;
                fromJSON(object: any): _28.IntProto;
                toJSON(message: _28.IntProto): unknown;
                fromPartial(object: DeepPartial<_28.IntProto>): _28.IntProto;
            };
            DecProto: {
                encode(message: _28.DecProto, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _28.DecProto;
                fromJSON(object: any): _28.DecProto;
                toJSON(message: _28.DecProto): unknown;
                fromPartial(object: DeepPartial<_28.DecProto>): _28.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _30.GenesisOwners, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _30.GenesisOwners;
                fromJSON(object: any): _30.GenesisOwners;
                toJSON(message: _30.GenesisOwners): unknown;
                fromPartial(object: DeepPartial<_30.GenesisOwners>): _30.GenesisOwners;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
                fromPartial(object: DeepPartial<_30.GenesisState>): _30.GenesisState;
            };
            Capability: {
                encode(message: _29.Capability, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _29.Capability;
                fromJSON(object: any): _29.Capability;
                toJSON(message: _29.Capability): unknown;
                fromPartial(object: DeepPartial<_29.Capability>): _29.Capability;
            };
            Owner: {
                encode(message: _29.Owner, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _29.Owner;
                fromJSON(object: any): _29.Owner;
                toJSON(message: _29.Owner): unknown;
                fromPartial(object: DeepPartial<_29.Owner>): _29.Owner;
            };
            CapabilityOwners: {
                encode(message: _29.CapabilityOwners, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _29.CapabilityOwners;
                fromJSON(object: any): _29.CapabilityOwners;
                toJSON(message: _29.CapabilityOwners): unknown;
                fromPartial(object: DeepPartial<_29.CapabilityOwners>): _29.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _32.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _32.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _32.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _32.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _32.MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _32.MsgVerifyInvariant;
                fromJSON(object: any): _32.MsgVerifyInvariant;
                toJSON(message: _32.MsgVerifyInvariant): unknown;
                fromPartial(object: DeepPartial<_32.MsgVerifyInvariant>): _32.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _32.MsgVerifyInvariantResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _32.MsgVerifyInvariantResponse;
                fromJSON(_: any): _32.MsgVerifyInvariantResponse;
                toJSON(_: _32.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: DeepPartial<_32.MsgVerifyInvariantResponse>): _32.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _31.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _31.GenesisState;
                fromJSON(object: any): _31.GenesisState;
                toJSON(message: _31.GenesisState): unknown;
                fromPartial(object: DeepPartial<_31.GenesisState>): _31.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _33.PubKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _33.PubKey;
                fromJSON(object: any): _33.PubKey;
                toJSON(message: _33.PubKey): unknown;
                fromPartial(object: DeepPartial<_33.PubKey>): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _33.PrivKey;
                fromJSON(object: any): _33.PrivKey;
                toJSON(message: _33.PrivKey): unknown;
                fromPartial(object: DeepPartial<_33.PrivKey>): _33.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _34.BIP44Params, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _34.BIP44Params;
                    fromJSON(object: any): _34.BIP44Params;
                    toJSON(message: _34.BIP44Params): unknown;
                    fromPartial(object: DeepPartial<_34.BIP44Params>): _34.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _35.Record, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _35.Record;
                    fromJSON(object: any): _35.Record;
                    toJSON(message: _35.Record): unknown;
                    fromPartial(object: DeepPartial<_35.Record>): _35.Record;
                };
                Record_Local: {
                    encode(message: _35.Record_Local, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _35.Record_Local;
                    fromJSON(object: any): _35.Record_Local;
                    toJSON(message: _35.Record_Local): unknown;
                    fromPartial(object: DeepPartial<_35.Record_Local>): _35.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _35.Record_Ledger, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _35.Record_Ledger;
                    fromJSON(object: any): _35.Record_Ledger;
                    toJSON(message: _35.Record_Ledger): unknown;
                    fromPartial(object: DeepPartial<_35.Record_Ledger>): _35.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _35.Record_Multi, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _35.Record_Multi;
                    fromJSON(_: any): _35.Record_Multi;
                    toJSON(_: _35.Record_Multi): unknown;
                    fromPartial(_: DeepPartial<_35.Record_Multi>): _35.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _35.Record_Offline, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _35.Record_Offline;
                    fromJSON(_: any): _35.Record_Offline;
                    toJSON(_: _35.Record_Offline): unknown;
                    fromPartial(_: DeepPartial<_35.Record_Offline>): _35.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _36.LegacyAminoPubKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _36.LegacyAminoPubKey;
                fromJSON(object: any): _36.LegacyAminoPubKey;
                toJSON(message: _36.LegacyAminoPubKey): unknown;
                fromPartial(object: DeepPartial<_36.LegacyAminoPubKey>): _36.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _37.PubKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _37.PubKey;
                fromJSON(object: any): _37.PubKey;
                toJSON(message: _37.PubKey): unknown;
                fromPartial(object: DeepPartial<_37.PubKey>): _37.PubKey;
            };
            PrivKey: {
                encode(message: _37.PrivKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _37.PrivKey;
                fromJSON(object: any): _37.PrivKey;
                toJSON(message: _37.PrivKey): unknown;
                fromPartial(object: DeepPartial<_37.PrivKey>): _37.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _38.PubKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _38.PubKey;
                fromJSON(object: any): _38.PubKey;
                toJSON(message: _38.PubKey): unknown;
                fromPartial(object: DeepPartial<_38.PubKey>): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _38.PrivKey;
                fromJSON(object: any): _38.PrivKey;
                toJSON(message: _38.PrivKey): unknown;
                fromPartial(object: DeepPartial<_38.PrivKey>): _38.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _165.QueryClientImpl;
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: any;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: any;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: any;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _42.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _42.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _42.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _42.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _42.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _42.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _42.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _42.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _42.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _42.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _42.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _42.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _42.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _42.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _42.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _42.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _42.MsgSetWithdrawAddress, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgSetWithdrawAddress;
                fromJSON(object: any): _42.MsgSetWithdrawAddress;
                toJSON(message: _42.MsgSetWithdrawAddress): unknown;
                fromPartial(object: DeepPartial<_42.MsgSetWithdrawAddress>): _42.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _42.MsgSetWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _42.MsgSetWithdrawAddressResponse;
                toJSON(_: _42.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: DeepPartial<_42.MsgSetWithdrawAddressResponse>): _42.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _42.MsgWithdrawDelegatorReward, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _42.MsgWithdrawDelegatorReward;
                toJSON(message: _42.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: DeepPartial<_42.MsgWithdrawDelegatorReward>): _42.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _42.MsgWithdrawDelegatorRewardResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _42.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _42.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: DeepPartial<_42.MsgWithdrawDelegatorRewardResponse>): _42.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _42.MsgWithdrawValidatorCommission, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommission;
                toJSON(message: _42.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: DeepPartial<_42.MsgWithdrawValidatorCommission>): _42.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _42.MsgWithdrawValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _42.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _42.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: DeepPartial<_42.MsgWithdrawValidatorCommissionResponse>): _42.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _42.MsgFundCommunityPool, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgFundCommunityPool;
                fromJSON(object: any): _42.MsgFundCommunityPool;
                toJSON(message: _42.MsgFundCommunityPool): unknown;
                fromPartial(object: DeepPartial<_42.MsgFundCommunityPool>): _42.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _42.MsgFundCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _42.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _42.MsgFundCommunityPoolResponse;
                toJSON(_: _42.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: DeepPartial<_42.MsgFundCommunityPoolResponse>): _42.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryParamsRequest;
                fromJSON(_: any): _41.QueryParamsRequest;
                toJSON(_: _41.QueryParamsRequest): unknown;
                fromPartial(_: DeepPartial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryParamsResponse;
                fromJSON(object: any): _41.QueryParamsResponse;
                toJSON(message: _41.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _41.QueryValidatorOutstandingRewardsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _41.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryValidatorOutstandingRewardsRequest>): _41.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _41.QueryValidatorOutstandingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _41.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _41.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryValidatorOutstandingRewardsResponse>): _41.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _41.QueryValidatorCommissionRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryValidatorCommissionRequest;
                fromJSON(object: any): _41.QueryValidatorCommissionRequest;
                toJSON(message: _41.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryValidatorCommissionRequest>): _41.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _41.QueryValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryValidatorCommissionResponse;
                fromJSON(object: any): _41.QueryValidatorCommissionResponse;
                toJSON(message: _41.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryValidatorCommissionResponse>): _41.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _41.QueryValidatorSlashesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryValidatorSlashesRequest;
                fromJSON(object: any): _41.QueryValidatorSlashesRequest;
                toJSON(message: _41.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryValidatorSlashesRequest>): _41.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _41.QueryValidatorSlashesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryValidatorSlashesResponse;
                fromJSON(object: any): _41.QueryValidatorSlashesResponse;
                toJSON(message: _41.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryValidatorSlashesResponse>): _41.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _41.QueryDelegationRewardsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegationRewardsRequest;
                fromJSON(object: any): _41.QueryDelegationRewardsRequest;
                toJSON(message: _41.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegationRewardsRequest>): _41.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _41.QueryDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegationRewardsResponse;
                fromJSON(object: any): _41.QueryDelegationRewardsResponse;
                toJSON(message: _41.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegationRewardsResponse>): _41.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _41.QueryDelegationTotalRewardsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsRequest;
                toJSON(message: _41.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegationTotalRewardsRequest>): _41.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _41.QueryDelegationTotalRewardsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _41.QueryDelegationTotalRewardsResponse;
                toJSON(message: _41.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegationTotalRewardsResponse>): _41.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _41.QueryDelegatorValidatorsRequest;
                toJSON(message: _41.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegatorValidatorsRequest>): _41.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _41.QueryDelegatorValidatorsResponse;
                toJSON(message: _41.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegatorValidatorsResponse>): _41.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _41.QueryDelegatorWithdrawAddressRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _41.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegatorWithdrawAddressRequest>): _41.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _41.QueryDelegatorWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _41.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _41.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryDelegatorWithdrawAddressResponse>): _41.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _41.QueryCommunityPoolRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryCommunityPoolRequest;
                fromJSON(_: any): _41.QueryCommunityPoolRequest;
                toJSON(_: _41.QueryCommunityPoolRequest): unknown;
                fromPartial(_: DeepPartial<_41.QueryCommunityPoolRequest>): _41.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _41.QueryCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _41.QueryCommunityPoolResponse;
                fromJSON(object: any): _41.QueryCommunityPoolResponse;
                toJSON(message: _41.QueryCommunityPoolResponse): unknown;
                fromPartial(object: DeepPartial<_41.QueryCommunityPoolResponse>): _41.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _40.DelegatorWithdrawInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.DelegatorWithdrawInfo;
                fromJSON(object: any): _40.DelegatorWithdrawInfo;
                toJSON(message: _40.DelegatorWithdrawInfo): unknown;
                fromPartial(object: DeepPartial<_40.DelegatorWithdrawInfo>): _40.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _40.ValidatorOutstandingRewardsRecord, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _40.ValidatorOutstandingRewardsRecord;
                toJSON(message: _40.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: DeepPartial<_40.ValidatorOutstandingRewardsRecord>): _40.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _40.ValidatorAccumulatedCommissionRecord, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _40.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _40.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: DeepPartial<_40.ValidatorAccumulatedCommissionRecord>): _40.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _40.ValidatorHistoricalRewardsRecord, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _40.ValidatorHistoricalRewardsRecord;
                toJSON(message: _40.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: DeepPartial<_40.ValidatorHistoricalRewardsRecord>): _40.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _40.ValidatorCurrentRewardsRecord, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _40.ValidatorCurrentRewardsRecord;
                toJSON(message: _40.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: DeepPartial<_40.ValidatorCurrentRewardsRecord>): _40.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _40.DelegatorStartingInfoRecord, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.DelegatorStartingInfoRecord;
                fromJSON(object: any): _40.DelegatorStartingInfoRecord;
                toJSON(message: _40.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: DeepPartial<_40.DelegatorStartingInfoRecord>): _40.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _40.ValidatorSlashEventRecord, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.ValidatorSlashEventRecord;
                fromJSON(object: any): _40.ValidatorSlashEventRecord;
                toJSON(message: _40.ValidatorSlashEventRecord): unknown;
                fromPartial(object: DeepPartial<_40.ValidatorSlashEventRecord>): _40.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _40.GenesisState;
                fromJSON(object: any): _40.GenesisState;
                toJSON(message: _40.GenesisState): unknown;
                fromPartial(object: DeepPartial<_40.GenesisState>): _40.GenesisState;
            };
            Params: {
                encode(message: _39.Params, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.Params;
                fromJSON(object: any): _39.Params;
                toJSON(message: _39.Params): unknown;
                fromPartial(object: DeepPartial<_39.Params>): _39.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _39.ValidatorHistoricalRewards, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.ValidatorHistoricalRewards;
                fromJSON(object: any): _39.ValidatorHistoricalRewards;
                toJSON(message: _39.ValidatorHistoricalRewards): unknown;
                fromPartial(object: DeepPartial<_39.ValidatorHistoricalRewards>): _39.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _39.ValidatorCurrentRewards, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.ValidatorCurrentRewards;
                fromJSON(object: any): _39.ValidatorCurrentRewards;
                toJSON(message: _39.ValidatorCurrentRewards): unknown;
                fromPartial(object: DeepPartial<_39.ValidatorCurrentRewards>): _39.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _39.ValidatorAccumulatedCommission, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.ValidatorAccumulatedCommission;
                fromJSON(object: any): _39.ValidatorAccumulatedCommission;
                toJSON(message: _39.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: DeepPartial<_39.ValidatorAccumulatedCommission>): _39.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _39.ValidatorOutstandingRewards, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.ValidatorOutstandingRewards;
                fromJSON(object: any): _39.ValidatorOutstandingRewards;
                toJSON(message: _39.ValidatorOutstandingRewards): unknown;
                fromPartial(object: DeepPartial<_39.ValidatorOutstandingRewards>): _39.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _39.ValidatorSlashEvent, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.ValidatorSlashEvent;
                fromJSON(object: any): _39.ValidatorSlashEvent;
                toJSON(message: _39.ValidatorSlashEvent): unknown;
                fromPartial(object: DeepPartial<_39.ValidatorSlashEvent>): _39.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _39.ValidatorSlashEvents, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.ValidatorSlashEvents;
                fromJSON(object: any): _39.ValidatorSlashEvents;
                toJSON(message: _39.ValidatorSlashEvents): unknown;
                fromPartial(object: DeepPartial<_39.ValidatorSlashEvents>): _39.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _39.FeePool, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.FeePool;
                fromJSON(object: any): _39.FeePool;
                toJSON(message: _39.FeePool): unknown;
                fromPartial(object: DeepPartial<_39.FeePool>): _39.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _39.CommunityPoolSpendProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.CommunityPoolSpendProposal;
                fromJSON(object: any): _39.CommunityPoolSpendProposal;
                toJSON(message: _39.CommunityPoolSpendProposal): unknown;
                fromPartial(object: DeepPartial<_39.CommunityPoolSpendProposal>): _39.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _39.DelegatorStartingInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.DelegatorStartingInfo;
                fromJSON(object: any): _39.DelegatorStartingInfo;
                toJSON(message: _39.DelegatorStartingInfo): unknown;
                fromPartial(object: DeepPartial<_39.DelegatorStartingInfo>): _39.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _39.DelegationDelegatorReward, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.DelegationDelegatorReward;
                fromJSON(object: any): _39.DelegationDelegatorReward;
                toJSON(message: _39.DelegationDelegatorReward): unknown;
                fromPartial(object: DeepPartial<_39.DelegationDelegatorReward>): _39.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _39.CommunityPoolSpendProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _39.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _39.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _39.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: DeepPartial<_39.CommunityPoolSpendProposalWithDeposit>): _39.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _166.QueryClientImpl;
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _46.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _46.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _46.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _46.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _46.MsgSubmitEvidence, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _46.MsgSubmitEvidence;
                fromJSON(object: any): _46.MsgSubmitEvidence;
                toJSON(message: _46.MsgSubmitEvidence): unknown;
                fromPartial(object: DeepPartial<_46.MsgSubmitEvidence>): _46.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _46.MsgSubmitEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _46.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _46.MsgSubmitEvidenceResponse;
                toJSON(message: _46.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: DeepPartial<_46.MsgSubmitEvidenceResponse>): _46.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _45.QueryEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _45.QueryEvidenceRequest;
                fromJSON(object: any): _45.QueryEvidenceRequest;
                toJSON(message: _45.QueryEvidenceRequest): unknown;
                fromPartial(object: DeepPartial<_45.QueryEvidenceRequest>): _45.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _45.QueryEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _45.QueryEvidenceResponse;
                fromJSON(object: any): _45.QueryEvidenceResponse;
                toJSON(message: _45.QueryEvidenceResponse): unknown;
                fromPartial(object: DeepPartial<_45.QueryEvidenceResponse>): _45.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _45.QueryAllEvidenceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _45.QueryAllEvidenceRequest;
                fromJSON(object: any): _45.QueryAllEvidenceRequest;
                toJSON(message: _45.QueryAllEvidenceRequest): unknown;
                fromPartial(object: DeepPartial<_45.QueryAllEvidenceRequest>): _45.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _45.QueryAllEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _45.QueryAllEvidenceResponse;
                fromJSON(object: any): _45.QueryAllEvidenceResponse;
                toJSON(message: _45.QueryAllEvidenceResponse): unknown;
                fromPartial(object: DeepPartial<_45.QueryAllEvidenceResponse>): _45.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _44.GenesisState;
                fromJSON(object: any): _44.GenesisState;
                toJSON(message: _44.GenesisState): unknown;
                fromPartial(object: DeepPartial<_44.GenesisState>): _44.GenesisState;
            };
            Equivocation: {
                encode(message: _43.Equivocation, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _43.Equivocation;
                fromJSON(object: any): _43.Equivocation;
                toJSON(message: _43.Equivocation): unknown;
                fromPartial(object: DeepPartial<_43.Equivocation>): _43.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _167.QueryClientImpl;
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: any;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _50.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _50.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _50.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _50.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _50.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _50.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _50.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _50.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _50.MsgGrantAllowance, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _50.MsgGrantAllowance;
                fromJSON(object: any): _50.MsgGrantAllowance;
                toJSON(message: _50.MsgGrantAllowance): unknown;
                fromPartial(object: DeepPartial<_50.MsgGrantAllowance>): _50.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _50.MsgGrantAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _50.MsgGrantAllowanceResponse;
                fromJSON(_: any): _50.MsgGrantAllowanceResponse;
                toJSON(_: _50.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: DeepPartial<_50.MsgGrantAllowanceResponse>): _50.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _50.MsgRevokeAllowance, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _50.MsgRevokeAllowance;
                fromJSON(object: any): _50.MsgRevokeAllowance;
                toJSON(message: _50.MsgRevokeAllowance): unknown;
                fromPartial(object: DeepPartial<_50.MsgRevokeAllowance>): _50.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _50.MsgRevokeAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _50.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _50.MsgRevokeAllowanceResponse;
                toJSON(_: _50.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: DeepPartial<_50.MsgRevokeAllowanceResponse>): _50.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _49.QueryAllowanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _49.QueryAllowanceRequest;
                fromJSON(object: any): _49.QueryAllowanceRequest;
                toJSON(message: _49.QueryAllowanceRequest): unknown;
                fromPartial(object: DeepPartial<_49.QueryAllowanceRequest>): _49.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _49.QueryAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _49.QueryAllowanceResponse;
                fromJSON(object: any): _49.QueryAllowanceResponse;
                toJSON(message: _49.QueryAllowanceResponse): unknown;
                fromPartial(object: DeepPartial<_49.QueryAllowanceResponse>): _49.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _49.QueryAllowancesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _49.QueryAllowancesRequest;
                fromJSON(object: any): _49.QueryAllowancesRequest;
                toJSON(message: _49.QueryAllowancesRequest): unknown;
                fromPartial(object: DeepPartial<_49.QueryAllowancesRequest>): _49.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _49.QueryAllowancesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _49.QueryAllowancesResponse;
                fromJSON(object: any): _49.QueryAllowancesResponse;
                toJSON(message: _49.QueryAllowancesResponse): unknown;
                fromPartial(object: DeepPartial<_49.QueryAllowancesResponse>): _49.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _49.QueryAllowancesByGranterRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _49.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _49.QueryAllowancesByGranterRequest;
                toJSON(message: _49.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: DeepPartial<_49.QueryAllowancesByGranterRequest>): _49.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _49.QueryAllowancesByGranterResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _49.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _49.QueryAllowancesByGranterResponse;
                toJSON(message: _49.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: DeepPartial<_49.QueryAllowancesByGranterResponse>): _49.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _48.GenesisState;
                fromJSON(object: any): _48.GenesisState;
                toJSON(message: _48.GenesisState): unknown;
                fromPartial(object: DeepPartial<_48.GenesisState>): _48.GenesisState;
            };
            BasicAllowance: {
                encode(message: _47.BasicAllowance, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _47.BasicAllowance;
                fromJSON(object: any): _47.BasicAllowance;
                toJSON(message: _47.BasicAllowance): unknown;
                fromPartial(object: DeepPartial<_47.BasicAllowance>): _47.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _47.PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _47.PeriodicAllowance;
                fromJSON(object: any): _47.PeriodicAllowance;
                toJSON(message: _47.PeriodicAllowance): unknown;
                fromPartial(object: DeepPartial<_47.PeriodicAllowance>): _47.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _47.AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _47.AllowedMsgAllowance;
                fromJSON(object: any): _47.AllowedMsgAllowance;
                toJSON(message: _47.AllowedMsgAllowance): unknown;
                fromPartial(object: DeepPartial<_47.AllowedMsgAllowance>): _47.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _47.Grant, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _47.Grant;
                fromJSON(object: any): _47.Grant;
                toJSON(message: _47.Grant): unknown;
                fromPartial(object: DeepPartial<_47.Grant>): _47.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _51.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: DeepPartial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _168.QueryClientImpl;
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: any;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: any;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: any;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _55.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _55.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _55.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _55.MsgExecLegacyContent;
                    };
                    vote(value: _55.MsgVote): {
                        typeUrl: string;
                        value: _55.MsgVote;
                    };
                    voteWeighted(value: _55.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _55.MsgVoteWeighted;
                    };
                    deposit(value: _55.MsgDeposit): {
                        typeUrl: string;
                        value: _55.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _55.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _55.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _55.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _55.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _55.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _55.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _55.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _55.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _55.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _55.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _55.MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgSubmitProposal;
                fromJSON(object: any): _55.MsgSubmitProposal;
                toJSON(message: _55.MsgSubmitProposal): unknown;
                fromPartial(object: DeepPartial<_55.MsgSubmitProposal>): _55.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _55.MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgSubmitProposalResponse;
                fromJSON(object: any): _55.MsgSubmitProposalResponse;
                toJSON(message: _55.MsgSubmitProposalResponse): unknown;
                fromPartial(object: DeepPartial<_55.MsgSubmitProposalResponse>): _55.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _55.MsgExecLegacyContent, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgExecLegacyContent;
                fromJSON(object: any): _55.MsgExecLegacyContent;
                toJSON(message: _55.MsgExecLegacyContent): unknown;
                fromPartial(object: DeepPartial<_55.MsgExecLegacyContent>): _55.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _55.MsgExecLegacyContentResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgExecLegacyContentResponse;
                fromJSON(_: any): _55.MsgExecLegacyContentResponse;
                toJSON(_: _55.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: DeepPartial<_55.MsgExecLegacyContentResponse>): _55.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _55.MsgVote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgVote;
                fromJSON(object: any): _55.MsgVote;
                toJSON(message: _55.MsgVote): unknown;
                fromPartial(object: DeepPartial<_55.MsgVote>): _55.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _55.MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgVoteResponse;
                fromJSON(_: any): _55.MsgVoteResponse;
                toJSON(_: _55.MsgVoteResponse): unknown;
                fromPartial(_: DeepPartial<_55.MsgVoteResponse>): _55.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _55.MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgVoteWeighted;
                fromJSON(object: any): _55.MsgVoteWeighted;
                toJSON(message: _55.MsgVoteWeighted): unknown;
                fromPartial(object: DeepPartial<_55.MsgVoteWeighted>): _55.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _55.MsgVoteWeightedResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgVoteWeightedResponse;
                fromJSON(_: any): _55.MsgVoteWeightedResponse;
                toJSON(_: _55.MsgVoteWeightedResponse): unknown;
                fromPartial(_: DeepPartial<_55.MsgVoteWeightedResponse>): _55.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _55.MsgDeposit, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgDeposit;
                fromJSON(object: any): _55.MsgDeposit;
                toJSON(message: _55.MsgDeposit): unknown;
                fromPartial(object: DeepPartial<_55.MsgDeposit>): _55.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _55.MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _55.MsgDepositResponse;
                fromJSON(_: any): _55.MsgDepositResponse;
                toJSON(_: _55.MsgDepositResponse): unknown;
                fromPartial(_: DeepPartial<_55.MsgDepositResponse>): _55.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _54.QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryProposalRequest;
                fromJSON(object: any): _54.QueryProposalRequest;
                toJSON(message: _54.QueryProposalRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryProposalRequest>): _54.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _54.QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryProposalResponse;
                fromJSON(object: any): _54.QueryProposalResponse;
                toJSON(message: _54.QueryProposalResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryProposalResponse>): _54.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _54.QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryProposalsRequest;
                fromJSON(object: any): _54.QueryProposalsRequest;
                toJSON(message: _54.QueryProposalsRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryProposalsRequest>): _54.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _54.QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryProposalsResponse;
                fromJSON(object: any): _54.QueryProposalsResponse;
                toJSON(message: _54.QueryProposalsResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryProposalsResponse>): _54.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _54.QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryVoteRequest;
                fromJSON(object: any): _54.QueryVoteRequest;
                toJSON(message: _54.QueryVoteRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryVoteRequest>): _54.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _54.QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryVoteResponse;
                fromJSON(object: any): _54.QueryVoteResponse;
                toJSON(message: _54.QueryVoteResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryVoteResponse>): _54.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _54.QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryVotesRequest;
                fromJSON(object: any): _54.QueryVotesRequest;
                toJSON(message: _54.QueryVotesRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryVotesRequest>): _54.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _54.QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryVotesResponse;
                fromJSON(object: any): _54.QueryVotesResponse;
                toJSON(message: _54.QueryVotesResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryVotesResponse>): _54.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryParamsRequest;
                fromJSON(object: any): _54.QueryParamsRequest;
                toJSON(message: _54.QueryParamsRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryParamsResponse;
                fromJSON(object: any): _54.QueryParamsResponse;
                toJSON(message: _54.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _54.QueryDepositRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryDepositRequest;
                fromJSON(object: any): _54.QueryDepositRequest;
                toJSON(message: _54.QueryDepositRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryDepositRequest>): _54.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _54.QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryDepositResponse;
                fromJSON(object: any): _54.QueryDepositResponse;
                toJSON(message: _54.QueryDepositResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryDepositResponse>): _54.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _54.QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryDepositsRequest;
                fromJSON(object: any): _54.QueryDepositsRequest;
                toJSON(message: _54.QueryDepositsRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryDepositsRequest>): _54.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _54.QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryDepositsResponse;
                fromJSON(object: any): _54.QueryDepositsResponse;
                toJSON(message: _54.QueryDepositsResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryDepositsResponse>): _54.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _54.QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryTallyResultRequest;
                fromJSON(object: any): _54.QueryTallyResultRequest;
                toJSON(message: _54.QueryTallyResultRequest): unknown;
                fromPartial(object: DeepPartial<_54.QueryTallyResultRequest>): _54.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _54.QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _54.QueryTallyResultResponse;
                fromJSON(object: any): _54.QueryTallyResultResponse;
                toJSON(message: _54.QueryTallyResultResponse): unknown;
                fromPartial(object: DeepPartial<_54.QueryTallyResultResponse>): _54.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _53.VoteOption;
            voteOptionToJSON(object: _53.VoteOption): string;
            proposalStatusFromJSON(object: any): _53.ProposalStatus;
            proposalStatusToJSON(object: _53.ProposalStatus): string;
            VoteOption: typeof _53.VoteOption;
            ProposalStatus: typeof _53.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _53.WeightedVoteOption, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.WeightedVoteOption;
                fromJSON(object: any): _53.WeightedVoteOption;
                toJSON(message: _53.WeightedVoteOption): unknown;
                fromPartial(object: DeepPartial<_53.WeightedVoteOption>): _53.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _53.Deposit, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.Deposit;
                fromJSON(object: any): _53.Deposit;
                toJSON(message: _53.Deposit): unknown;
                fromPartial(object: DeepPartial<_53.Deposit>): _53.Deposit;
            };
            Proposal: {
                encode(message: _53.Proposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.Proposal;
                fromJSON(object: any): _53.Proposal;
                toJSON(message: _53.Proposal): unknown;
                fromPartial(object: DeepPartial<_53.Proposal>): _53.Proposal;
            };
            TallyResult: {
                encode(message: _53.TallyResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.TallyResult;
                fromJSON(object: any): _53.TallyResult;
                toJSON(message: _53.TallyResult): unknown;
                fromPartial(object: DeepPartial<_53.TallyResult>): _53.TallyResult;
            };
            Vote: {
                encode(message: _53.Vote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.Vote;
                fromJSON(object: any): _53.Vote;
                toJSON(message: _53.Vote): unknown;
                fromPartial(object: DeepPartial<_53.Vote>): _53.Vote;
            };
            DepositParams: {
                encode(message: _53.DepositParams, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.DepositParams;
                fromJSON(object: any): _53.DepositParams;
                toJSON(message: _53.DepositParams): unknown;
                fromPartial(object: DeepPartial<_53.DepositParams>): _53.DepositParams;
            };
            VotingParams: {
                encode(message: _53.VotingParams, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.VotingParams;
                fromJSON(object: any): _53.VotingParams;
                toJSON(message: _53.VotingParams): unknown;
                fromPartial(object: DeepPartial<_53.VotingParams>): _53.VotingParams;
            };
            TallyParams: {
                encode(message: _53.TallyParams, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _53.TallyParams;
                fromJSON(object: any): _53.TallyParams;
                toJSON(message: _53.TallyParams): unknown;
                fromPartial(object: DeepPartial<_53.TallyParams>): _53.TallyParams;
            };
            GenesisState: {
                encode(message: _52.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _52.GenesisState;
                fromJSON(object: any): _52.GenesisState;
                toJSON(message: _52.GenesisState): unknown;
                fromPartial(object: DeepPartial<_52.GenesisState>): _52.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: any;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: any;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _59.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _59.MsgSubmitProposal;
                    };
                    vote(value: _59.MsgVote): {
                        typeUrl: string;
                        value: _59.MsgVote;
                    };
                    voteWeighted(value: _59.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _59.MsgVoteWeighted;
                    };
                    deposit(value: _59.MsgDeposit): {
                        typeUrl: string;
                        value: _59.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _59.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _59.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _59.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _59.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _59.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _59.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _59.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _59.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _59.MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgSubmitProposal;
                fromJSON(object: any): _59.MsgSubmitProposal;
                toJSON(message: _59.MsgSubmitProposal): unknown;
                fromPartial(object: DeepPartial<_59.MsgSubmitProposal>): _59.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _59.MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgSubmitProposalResponse;
                fromJSON(object: any): _59.MsgSubmitProposalResponse;
                toJSON(message: _59.MsgSubmitProposalResponse): unknown;
                fromPartial(object: DeepPartial<_59.MsgSubmitProposalResponse>): _59.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _59.MsgVote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgVote;
                fromJSON(object: any): _59.MsgVote;
                toJSON(message: _59.MsgVote): unknown;
                fromPartial(object: DeepPartial<_59.MsgVote>): _59.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _59.MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgVoteResponse;
                fromJSON(_: any): _59.MsgVoteResponse;
                toJSON(_: _59.MsgVoteResponse): unknown;
                fromPartial(_: DeepPartial<_59.MsgVoteResponse>): _59.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _59.MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgVoteWeighted;
                fromJSON(object: any): _59.MsgVoteWeighted;
                toJSON(message: _59.MsgVoteWeighted): unknown;
                fromPartial(object: DeepPartial<_59.MsgVoteWeighted>): _59.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _59.MsgVoteWeightedResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgVoteWeightedResponse;
                fromJSON(_: any): _59.MsgVoteWeightedResponse;
                toJSON(_: _59.MsgVoteWeightedResponse): unknown;
                fromPartial(_: DeepPartial<_59.MsgVoteWeightedResponse>): _59.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _59.MsgDeposit, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgDeposit;
                fromJSON(object: any): _59.MsgDeposit;
                toJSON(message: _59.MsgDeposit): unknown;
                fromPartial(object: DeepPartial<_59.MsgDeposit>): _59.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _59.MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _59.MsgDepositResponse;
                fromJSON(_: any): _59.MsgDepositResponse;
                toJSON(_: _59.MsgDepositResponse): unknown;
                fromPartial(_: DeepPartial<_59.MsgDepositResponse>): _59.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _58.QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryProposalRequest;
                fromJSON(object: any): _58.QueryProposalRequest;
                toJSON(message: _58.QueryProposalRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryProposalRequest>): _58.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _58.QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryProposalResponse;
                fromJSON(object: any): _58.QueryProposalResponse;
                toJSON(message: _58.QueryProposalResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryProposalResponse>): _58.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _58.QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryProposalsRequest;
                fromJSON(object: any): _58.QueryProposalsRequest;
                toJSON(message: _58.QueryProposalsRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryProposalsRequest>): _58.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _58.QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryProposalsResponse;
                fromJSON(object: any): _58.QueryProposalsResponse;
                toJSON(message: _58.QueryProposalsResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryProposalsResponse>): _58.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _58.QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryVoteRequest;
                fromJSON(object: any): _58.QueryVoteRequest;
                toJSON(message: _58.QueryVoteRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryVoteRequest>): _58.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _58.QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryVoteResponse;
                fromJSON(object: any): _58.QueryVoteResponse;
                toJSON(message: _58.QueryVoteResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryVoteResponse>): _58.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _58.QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryVotesRequest;
                fromJSON(object: any): _58.QueryVotesRequest;
                toJSON(message: _58.QueryVotesRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryVotesRequest>): _58.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _58.QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryVotesResponse;
                fromJSON(object: any): _58.QueryVotesResponse;
                toJSON(message: _58.QueryVotesResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryVotesResponse>): _58.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _58.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryParamsRequest;
                fromJSON(object: any): _58.QueryParamsRequest;
                toJSON(message: _58.QueryParamsRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _58.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryParamsResponse;
                fromJSON(object: any): _58.QueryParamsResponse;
                toJSON(message: _58.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _58.QueryDepositRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryDepositRequest;
                fromJSON(object: any): _58.QueryDepositRequest;
                toJSON(message: _58.QueryDepositRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryDepositRequest>): _58.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _58.QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryDepositResponse;
                fromJSON(object: any): _58.QueryDepositResponse;
                toJSON(message: _58.QueryDepositResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryDepositResponse>): _58.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _58.QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryDepositsRequest;
                fromJSON(object: any): _58.QueryDepositsRequest;
                toJSON(message: _58.QueryDepositsRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryDepositsRequest>): _58.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _58.QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryDepositsResponse;
                fromJSON(object: any): _58.QueryDepositsResponse;
                toJSON(message: _58.QueryDepositsResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryDepositsResponse>): _58.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _58.QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryTallyResultRequest;
                fromJSON(object: any): _58.QueryTallyResultRequest;
                toJSON(message: _58.QueryTallyResultRequest): unknown;
                fromPartial(object: DeepPartial<_58.QueryTallyResultRequest>): _58.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _58.QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _58.QueryTallyResultResponse;
                fromJSON(object: any): _58.QueryTallyResultResponse;
                toJSON(message: _58.QueryTallyResultResponse): unknown;
                fromPartial(object: DeepPartial<_58.QueryTallyResultResponse>): _58.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _57.VoteOption;
            voteOptionToJSON(object: _57.VoteOption): string;
            proposalStatusFromJSON(object: any): _57.ProposalStatus;
            proposalStatusToJSON(object: _57.ProposalStatus): string;
            VoteOption: typeof _57.VoteOption;
            ProposalStatus: typeof _57.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _57.WeightedVoteOption, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.WeightedVoteOption;
                fromJSON(object: any): _57.WeightedVoteOption;
                toJSON(message: _57.WeightedVoteOption): unknown;
                fromPartial(object: DeepPartial<_57.WeightedVoteOption>): _57.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _57.TextProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.TextProposal;
                fromJSON(object: any): _57.TextProposal;
                toJSON(message: _57.TextProposal): unknown;
                fromPartial(object: DeepPartial<_57.TextProposal>): _57.TextProposal;
            };
            Deposit: {
                encode(message: _57.Deposit, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.Deposit;
                fromJSON(object: any): _57.Deposit;
                toJSON(message: _57.Deposit): unknown;
                fromPartial(object: DeepPartial<_57.Deposit>): _57.Deposit;
            };
            Proposal: {
                encode(message: _57.Proposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.Proposal;
                fromJSON(object: any): _57.Proposal;
                toJSON(message: _57.Proposal): unknown;
                fromPartial(object: DeepPartial<_57.Proposal>): _57.Proposal;
            };
            TallyResult: {
                encode(message: _57.TallyResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.TallyResult;
                fromJSON(object: any): _57.TallyResult;
                toJSON(message: _57.TallyResult): unknown;
                fromPartial(object: DeepPartial<_57.TallyResult>): _57.TallyResult;
            };
            Vote: {
                encode(message: _57.Vote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.Vote;
                fromJSON(object: any): _57.Vote;
                toJSON(message: _57.Vote): unknown;
                fromPartial(object: DeepPartial<_57.Vote>): _57.Vote;
            };
            DepositParams: {
                encode(message: _57.DepositParams, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.DepositParams;
                fromJSON(object: any): _57.DepositParams;
                toJSON(message: _57.DepositParams): unknown;
                fromPartial(object: DeepPartial<_57.DepositParams>): _57.DepositParams;
            };
            VotingParams: {
                encode(message: _57.VotingParams, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.VotingParams;
                fromJSON(object: any): _57.VotingParams;
                toJSON(message: _57.VotingParams): unknown;
                fromPartial(object: DeepPartial<_57.VotingParams>): _57.VotingParams;
            };
            TallyParams: {
                encode(message: _57.TallyParams, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _57.TallyParams;
                fromJSON(object: any): _57.TallyParams;
                toJSON(message: _57.TallyParams): unknown;
                fromPartial(object: DeepPartial<_57.TallyParams>): _57.TallyParams;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                toJSON(message: _56.GenesisState): unknown;
                fromPartial(object: DeepPartial<_56.GenesisState>): _56.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: any;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: any;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: any;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: any;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: any;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: any;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: any;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: any;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _63.MsgCreateGroup): {
                        typeUrl: string;
                        value: _63.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _63.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _63.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _63.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _63.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _63.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _63.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _63.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _63.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _63.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _63.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _63.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _63.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _63.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _63.MsgWithdrawProposal;
                    };
                    vote(value: _63.MsgVote): {
                        typeUrl: string;
                        value: _63.MsgVote;
                    };
                    exec(value: _63.MsgExec): {
                        typeUrl: string;
                        value: _63.MsgExec;
                    };
                    leaveGroup(value: _63.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _63.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _63.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _63.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _63.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _63.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _63.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _63.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _63.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _63.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _63.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _63.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _63.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _63.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _63.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _63.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _63.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _63.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _63.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _63.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _63.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _63.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _63.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _63.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _63.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _64.VoteOption;
            voteOptionToJSON(object: _64.VoteOption): string;
            proposalStatusFromJSON(object: any): _64.ProposalStatus;
            proposalStatusToJSON(object: _64.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _64.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _64.ProposalExecutorResult): string;
            VoteOption: typeof _64.VoteOption;
            ProposalStatus: typeof _64.ProposalStatus;
            ProposalExecutorResult: typeof _64.ProposalExecutorResult;
            Member: {
                encode(message: _64.Member, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.Member;
                fromJSON(object: any): _64.Member;
                toJSON(message: _64.Member): unknown;
                fromPartial(object: DeepPartial<_64.Member>): _64.Member;
            };
            MemberRequest: {
                encode(message: _64.MemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.MemberRequest;
                fromJSON(object: any): _64.MemberRequest;
                toJSON(message: _64.MemberRequest): unknown;
                fromPartial(object: DeepPartial<_64.MemberRequest>): _64.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _64.ThresholdDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.ThresholdDecisionPolicy;
                fromJSON(object: any): _64.ThresholdDecisionPolicy;
                toJSON(message: _64.ThresholdDecisionPolicy): unknown;
                fromPartial(object: DeepPartial<_64.ThresholdDecisionPolicy>): _64.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _64.PercentageDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.PercentageDecisionPolicy;
                fromJSON(object: any): _64.PercentageDecisionPolicy;
                toJSON(message: _64.PercentageDecisionPolicy): unknown;
                fromPartial(object: DeepPartial<_64.PercentageDecisionPolicy>): _64.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _64.DecisionPolicyWindows, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.DecisionPolicyWindows;
                fromJSON(object: any): _64.DecisionPolicyWindows;
                toJSON(message: _64.DecisionPolicyWindows): unknown;
                fromPartial(object: DeepPartial<_64.DecisionPolicyWindows>): _64.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _64.GroupInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.GroupInfo;
                fromJSON(object: any): _64.GroupInfo;
                toJSON(message: _64.GroupInfo): unknown;
                fromPartial(object: DeepPartial<_64.GroupInfo>): _64.GroupInfo;
            };
            GroupMember: {
                encode(message: _64.GroupMember, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.GroupMember;
                fromJSON(object: any): _64.GroupMember;
                toJSON(message: _64.GroupMember): unknown;
                fromPartial(object: DeepPartial<_64.GroupMember>): _64.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _64.GroupPolicyInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.GroupPolicyInfo;
                fromJSON(object: any): _64.GroupPolicyInfo;
                toJSON(message: _64.GroupPolicyInfo): unknown;
                fromPartial(object: DeepPartial<_64.GroupPolicyInfo>): _64.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _64.Proposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.Proposal;
                fromJSON(object: any): _64.Proposal;
                toJSON(message: _64.Proposal): unknown;
                fromPartial(object: DeepPartial<_64.Proposal>): _64.Proposal;
            };
            TallyResult: {
                encode(message: _64.TallyResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.TallyResult;
                fromJSON(object: any): _64.TallyResult;
                toJSON(message: _64.TallyResult): unknown;
                fromPartial(object: DeepPartial<_64.TallyResult>): _64.TallyResult;
            };
            Vote: {
                encode(message: _64.Vote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _64.Vote;
                fromJSON(object: any): _64.Vote;
                toJSON(message: _64.Vote): unknown;
                fromPartial(object: DeepPartial<_64.Vote>): _64.Vote;
            };
            execFromJSON(object: any): _63.Exec;
            execToJSON(object: _63.Exec): string;
            Exec: typeof _63.Exec;
            MsgCreateGroup: {
                encode(message: _63.MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgCreateGroup;
                fromJSON(object: any): _63.MsgCreateGroup;
                toJSON(message: _63.MsgCreateGroup): unknown;
                fromPartial(object: DeepPartial<_63.MsgCreateGroup>): _63.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _63.MsgCreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgCreateGroupResponse;
                fromJSON(object: any): _63.MsgCreateGroupResponse;
                toJSON(message: _63.MsgCreateGroupResponse): unknown;
                fromPartial(object: DeepPartial<_63.MsgCreateGroupResponse>): _63.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _63.MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupMembers;
                fromJSON(object: any): _63.MsgUpdateGroupMembers;
                toJSON(message: _63.MsgUpdateGroupMembers): unknown;
                fromPartial(object: DeepPartial<_63.MsgUpdateGroupMembers>): _63.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _63.MsgUpdateGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _63.MsgUpdateGroupMembersResponse;
                toJSON(_: _63.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgUpdateGroupMembersResponse>): _63.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _63.MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupAdmin;
                fromJSON(object: any): _63.MsgUpdateGroupAdmin;
                toJSON(message: _63.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: DeepPartial<_63.MsgUpdateGroupAdmin>): _63.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _63.MsgUpdateGroupAdminResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _63.MsgUpdateGroupAdminResponse;
                toJSON(_: _63.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgUpdateGroupAdminResponse>): _63.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _63.MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupMetadata;
                fromJSON(object: any): _63.MsgUpdateGroupMetadata;
                toJSON(message: _63.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: DeepPartial<_63.MsgUpdateGroupMetadata>): _63.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _63.MsgUpdateGroupMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _63.MsgUpdateGroupMetadataResponse;
                toJSON(_: _63.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgUpdateGroupMetadataResponse>): _63.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _63.MsgCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgCreateGroupPolicy;
                fromJSON(object: any): _63.MsgCreateGroupPolicy;
                toJSON(message: _63.MsgCreateGroupPolicy): unknown;
                fromPartial(object: DeepPartial<_63.MsgCreateGroupPolicy>): _63.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _63.MsgCreateGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _63.MsgCreateGroupPolicyResponse;
                toJSON(message: _63.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: DeepPartial<_63.MsgCreateGroupPolicyResponse>): _63.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _63.MsgUpdateGroupPolicyAdmin, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _63.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: DeepPartial<_63.MsgUpdateGroupPolicyAdmin>): _63.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _63.MsgCreateGroupWithPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicy;
                toJSON(message: _63.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: DeepPartial<_63.MsgCreateGroupWithPolicy>): _63.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _63.MsgCreateGroupWithPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _63.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _63.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: DeepPartial<_63.MsgCreateGroupWithPolicyResponse>): _63.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _63.MsgUpdateGroupPolicyAdminResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _63.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgUpdateGroupPolicyAdminResponse>): _63.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _63.MsgUpdateGroupPolicyDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _63.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: DeepPartial<_63.MsgUpdateGroupPolicyDecisionPolicy>): _63.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _63.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgUpdateGroupPolicyDecisionPolicyResponse>): _63.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _63.MsgUpdateGroupPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _63.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _63.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: DeepPartial<_63.MsgUpdateGroupPolicyMetadata>): _63.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _63.MsgUpdateGroupPolicyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _63.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _63.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgUpdateGroupPolicyMetadataResponse>): _63.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _63.MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgSubmitProposal;
                fromJSON(object: any): _63.MsgSubmitProposal;
                toJSON(message: _63.MsgSubmitProposal): unknown;
                fromPartial(object: DeepPartial<_63.MsgSubmitProposal>): _63.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _63.MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgSubmitProposalResponse;
                fromJSON(object: any): _63.MsgSubmitProposalResponse;
                toJSON(message: _63.MsgSubmitProposalResponse): unknown;
                fromPartial(object: DeepPartial<_63.MsgSubmitProposalResponse>): _63.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _63.MsgWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgWithdrawProposal;
                fromJSON(object: any): _63.MsgWithdrawProposal;
                toJSON(message: _63.MsgWithdrawProposal): unknown;
                fromPartial(object: DeepPartial<_63.MsgWithdrawProposal>): _63.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _63.MsgWithdrawProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgWithdrawProposalResponse;
                fromJSON(_: any): _63.MsgWithdrawProposalResponse;
                toJSON(_: _63.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgWithdrawProposalResponse>): _63.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _63.MsgVote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgVote;
                fromJSON(object: any): _63.MsgVote;
                toJSON(message: _63.MsgVote): unknown;
                fromPartial(object: DeepPartial<_63.MsgVote>): _63.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _63.MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgVoteResponse;
                fromJSON(_: any): _63.MsgVoteResponse;
                toJSON(_: _63.MsgVoteResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgVoteResponse>): _63.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _63.MsgExec, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgExec;
                fromJSON(object: any): _63.MsgExec;
                toJSON(message: _63.MsgExec): unknown;
                fromPartial(object: DeepPartial<_63.MsgExec>): _63.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _63.MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgExecResponse;
                fromJSON(object: any): _63.MsgExecResponse;
                toJSON(message: _63.MsgExecResponse): unknown;
                fromPartial(object: DeepPartial<_63.MsgExecResponse>): _63.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _63.MsgLeaveGroup, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgLeaveGroup;
                fromJSON(object: any): _63.MsgLeaveGroup;
                toJSON(message: _63.MsgLeaveGroup): unknown;
                fromPartial(object: DeepPartial<_63.MsgLeaveGroup>): _63.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _63.MsgLeaveGroupResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _63.MsgLeaveGroupResponse;
                fromJSON(_: any): _63.MsgLeaveGroupResponse;
                toJSON(_: _63.MsgLeaveGroupResponse): unknown;
                fromPartial(_: DeepPartial<_63.MsgLeaveGroupResponse>): _63.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _62.QueryGroupInfoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupInfoRequest;
                fromJSON(object: any): _62.QueryGroupInfoRequest;
                toJSON(message: _62.QueryGroupInfoRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupInfoRequest>): _62.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _62.QueryGroupInfoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupInfoResponse;
                fromJSON(object: any): _62.QueryGroupInfoResponse;
                toJSON(message: _62.QueryGroupInfoResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupInfoResponse>): _62.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _62.QueryGroupPolicyInfoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _62.QueryGroupPolicyInfoRequest;
                toJSON(message: _62.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupPolicyInfoRequest>): _62.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _62.QueryGroupPolicyInfoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _62.QueryGroupPolicyInfoResponse;
                toJSON(message: _62.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupPolicyInfoResponse>): _62.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _62.QueryGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupMembersRequest;
                fromJSON(object: any): _62.QueryGroupMembersRequest;
                toJSON(message: _62.QueryGroupMembersRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupMembersRequest>): _62.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _62.QueryGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupMembersResponse;
                fromJSON(object: any): _62.QueryGroupMembersResponse;
                toJSON(message: _62.QueryGroupMembersResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupMembersResponse>): _62.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _62.QueryGroupsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupsByAdminRequest;
                fromJSON(object: any): _62.QueryGroupsByAdminRequest;
                toJSON(message: _62.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupsByAdminRequest>): _62.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _62.QueryGroupsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupsByAdminResponse;
                fromJSON(object: any): _62.QueryGroupsByAdminResponse;
                toJSON(message: _62.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupsByAdminResponse>): _62.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _62.QueryGroupPoliciesByGroupRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _62.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupPoliciesByGroupRequest>): _62.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _62.QueryGroupPoliciesByGroupResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _62.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _62.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupPoliciesByGroupResponse>): _62.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _62.QueryGroupPoliciesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _62.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupPoliciesByAdminRequest>): _62.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _62.QueryGroupPoliciesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _62.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _62.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupPoliciesByAdminResponse>): _62.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _62.QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryProposalRequest;
                fromJSON(object: any): _62.QueryProposalRequest;
                toJSON(message: _62.QueryProposalRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryProposalRequest>): _62.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _62.QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryProposalResponse;
                fromJSON(object: any): _62.QueryProposalResponse;
                toJSON(message: _62.QueryProposalResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryProposalResponse>): _62.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _62.QueryProposalsByGroupPolicyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _62.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryProposalsByGroupPolicyRequest>): _62.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _62.QueryProposalsByGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _62.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _62.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryProposalsByGroupPolicyResponse>): _62.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _62.QueryVoteByProposalVoterRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _62.QueryVoteByProposalVoterRequest;
                toJSON(message: _62.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryVoteByProposalVoterRequest>): _62.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _62.QueryVoteByProposalVoterResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _62.QueryVoteByProposalVoterResponse;
                toJSON(message: _62.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryVoteByProposalVoterResponse>): _62.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _62.QueryVotesByProposalRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryVotesByProposalRequest;
                fromJSON(object: any): _62.QueryVotesByProposalRequest;
                toJSON(message: _62.QueryVotesByProposalRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryVotesByProposalRequest>): _62.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _62.QueryVotesByProposalResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryVotesByProposalResponse;
                fromJSON(object: any): _62.QueryVotesByProposalResponse;
                toJSON(message: _62.QueryVotesByProposalResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryVotesByProposalResponse>): _62.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _62.QueryVotesByVoterRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryVotesByVoterRequest;
                fromJSON(object: any): _62.QueryVotesByVoterRequest;
                toJSON(message: _62.QueryVotesByVoterRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryVotesByVoterRequest>): _62.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _62.QueryVotesByVoterResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryVotesByVoterResponse;
                fromJSON(object: any): _62.QueryVotesByVoterResponse;
                toJSON(message: _62.QueryVotesByVoterResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryVotesByVoterResponse>): _62.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _62.QueryGroupsByMemberRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupsByMemberRequest;
                fromJSON(object: any): _62.QueryGroupsByMemberRequest;
                toJSON(message: _62.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupsByMemberRequest>): _62.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _62.QueryGroupsByMemberResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryGroupsByMemberResponse;
                fromJSON(object: any): _62.QueryGroupsByMemberResponse;
                toJSON(message: _62.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryGroupsByMemberResponse>): _62.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _62.QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryTallyResultRequest;
                fromJSON(object: any): _62.QueryTallyResultRequest;
                toJSON(message: _62.QueryTallyResultRequest): unknown;
                fromPartial(object: DeepPartial<_62.QueryTallyResultRequest>): _62.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _62.QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _62.QueryTallyResultResponse;
                fromJSON(object: any): _62.QueryTallyResultResponse;
                toJSON(message: _62.QueryTallyResultResponse): unknown;
                fromPartial(object: DeepPartial<_62.QueryTallyResultResponse>): _62.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: DeepPartial<_61.GenesisState>): _61.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _60.EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventCreateGroup;
                fromJSON(object: any): _60.EventCreateGroup;
                toJSON(message: _60.EventCreateGroup): unknown;
                fromPartial(object: DeepPartial<_60.EventCreateGroup>): _60.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _60.EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventUpdateGroup;
                fromJSON(object: any): _60.EventUpdateGroup;
                toJSON(message: _60.EventUpdateGroup): unknown;
                fromPartial(object: DeepPartial<_60.EventUpdateGroup>): _60.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _60.EventCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventCreateGroupPolicy;
                fromJSON(object: any): _60.EventCreateGroupPolicy;
                toJSON(message: _60.EventCreateGroupPolicy): unknown;
                fromPartial(object: DeepPartial<_60.EventCreateGroupPolicy>): _60.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _60.EventUpdateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventUpdateGroupPolicy;
                fromJSON(object: any): _60.EventUpdateGroupPolicy;
                toJSON(message: _60.EventUpdateGroupPolicy): unknown;
                fromPartial(object: DeepPartial<_60.EventUpdateGroupPolicy>): _60.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _60.EventSubmitProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventSubmitProposal;
                fromJSON(object: any): _60.EventSubmitProposal;
                toJSON(message: _60.EventSubmitProposal): unknown;
                fromPartial(object: DeepPartial<_60.EventSubmitProposal>): _60.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _60.EventWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventWithdrawProposal;
                fromJSON(object: any): _60.EventWithdrawProposal;
                toJSON(message: _60.EventWithdrawProposal): unknown;
                fromPartial(object: DeepPartial<_60.EventWithdrawProposal>): _60.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _60.EventVote, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventVote;
                fromJSON(object: any): _60.EventVote;
                toJSON(message: _60.EventVote): unknown;
                fromPartial(object: DeepPartial<_60.EventVote>): _60.EventVote;
            };
            EventExec: {
                encode(message: _60.EventExec, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventExec;
                fromJSON(object: any): _60.EventExec;
                toJSON(message: _60.EventExec): unknown;
                fromPartial(object: DeepPartial<_60.EventExec>): _60.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _60.EventLeaveGroup, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _60.EventLeaveGroup;
                fromJSON(object: any): _60.EventLeaveGroup;
                toJSON(message: _60.EventLeaveGroup): unknown;
                fromPartial(object: DeepPartial<_60.EventLeaveGroup>): _60.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _171.QueryClientImpl;
            LCDQueryClient: typeof _154.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _67.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _67.QueryParamsRequest;
                fromJSON(_: any): _67.QueryParamsRequest;
                toJSON(_: _67.QueryParamsRequest): unknown;
                fromPartial(_: DeepPartial<_67.QueryParamsRequest>): _67.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _67.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _67.QueryParamsResponse;
                fromJSON(object: any): _67.QueryParamsResponse;
                toJSON(message: _67.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_67.QueryParamsResponse>): _67.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _67.QueryInflationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _67.QueryInflationRequest;
                fromJSON(_: any): _67.QueryInflationRequest;
                toJSON(_: _67.QueryInflationRequest): unknown;
                fromPartial(_: DeepPartial<_67.QueryInflationRequest>): _67.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _67.QueryInflationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _67.QueryInflationResponse;
                fromJSON(object: any): _67.QueryInflationResponse;
                toJSON(message: _67.QueryInflationResponse): unknown;
                fromPartial(object: DeepPartial<_67.QueryInflationResponse>): _67.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _67.QueryAnnualProvisionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _67.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _67.QueryAnnualProvisionsRequest;
                toJSON(_: _67.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: DeepPartial<_67.QueryAnnualProvisionsRequest>): _67.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _67.QueryAnnualProvisionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _67.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _67.QueryAnnualProvisionsResponse;
                toJSON(message: _67.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: DeepPartial<_67.QueryAnnualProvisionsResponse>): _67.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _66.Minter, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _66.Minter;
                fromJSON(object: any): _66.Minter;
                toJSON(message: _66.Minter): unknown;
                fromPartial(object: DeepPartial<_66.Minter>): _66.Minter;
            };
            Params: {
                encode(message: _66.Params, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _66.Params;
                fromJSON(object: any): _66.Params;
                toJSON(message: _66.Params): unknown;
                fromPartial(object: DeepPartial<_66.Params>): _66.Params;
            };
            GenesisState: {
                encode(message: _65.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _65.GenesisState;
                fromJSON(object: any): _65.GenesisState;
                toJSON(message: _65.GenesisState): unknown;
                fromPartial(object: DeepPartial<_65.GenesisState>): _65.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            LCDQueryClient: typeof _155.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _73.MsgSend): {
                        typeUrl: string;
                        value: _73.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _73.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _73.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _73.MsgSend, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _73.MsgSend;
                fromJSON(object: any): _73.MsgSend;
                toJSON(message: _73.MsgSend): unknown;
                fromPartial(object: DeepPartial<_73.MsgSend>): _73.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _73.MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _73.MsgSendResponse;
                fromJSON(_: any): _73.MsgSendResponse;
                toJSON(_: _73.MsgSendResponse): unknown;
                fromPartial(_: DeepPartial<_73.MsgSendResponse>): _73.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _72.QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryBalanceRequest;
                fromJSON(object: any): _72.QueryBalanceRequest;
                toJSON(message: _72.QueryBalanceRequest): unknown;
                fromPartial(object: DeepPartial<_72.QueryBalanceRequest>): _72.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _72.QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryBalanceResponse;
                fromJSON(object: any): _72.QueryBalanceResponse;
                toJSON(message: _72.QueryBalanceResponse): unknown;
                fromPartial(object: DeepPartial<_72.QueryBalanceResponse>): _72.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _72.QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryOwnerRequest;
                fromJSON(object: any): _72.QueryOwnerRequest;
                toJSON(message: _72.QueryOwnerRequest): unknown;
                fromPartial(object: DeepPartial<_72.QueryOwnerRequest>): _72.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _72.QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryOwnerResponse;
                fromJSON(object: any): _72.QueryOwnerResponse;
                toJSON(message: _72.QueryOwnerResponse): unknown;
                fromPartial(object: DeepPartial<_72.QueryOwnerResponse>): _72.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _72.QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QuerySupplyRequest;
                fromJSON(object: any): _72.QuerySupplyRequest;
                toJSON(message: _72.QuerySupplyRequest): unknown;
                fromPartial(object: DeepPartial<_72.QuerySupplyRequest>): _72.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _72.QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QuerySupplyResponse;
                fromJSON(object: any): _72.QuerySupplyResponse;
                toJSON(message: _72.QuerySupplyResponse): unknown;
                fromPartial(object: DeepPartial<_72.QuerySupplyResponse>): _72.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _72.QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryNFTsRequest;
                fromJSON(object: any): _72.QueryNFTsRequest;
                toJSON(message: _72.QueryNFTsRequest): unknown;
                fromPartial(object: DeepPartial<_72.QueryNFTsRequest>): _72.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _72.QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryNFTsResponse;
                fromJSON(object: any): _72.QueryNFTsResponse;
                toJSON(message: _72.QueryNFTsResponse): unknown;
                fromPartial(object: DeepPartial<_72.QueryNFTsResponse>): _72.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _72.QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryNFTRequest;
                fromJSON(object: any): _72.QueryNFTRequest;
                toJSON(message: _72.QueryNFTRequest): unknown;
                fromPartial(object: DeepPartial<_72.QueryNFTRequest>): _72.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _72.QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryNFTResponse;
                fromJSON(object: any): _72.QueryNFTResponse;
                toJSON(message: _72.QueryNFTResponse): unknown;
                fromPartial(object: DeepPartial<_72.QueryNFTResponse>): _72.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _72.QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryClassRequest;
                fromJSON(object: any): _72.QueryClassRequest;
                toJSON(message: _72.QueryClassRequest): unknown;
                fromPartial(object: DeepPartial<_72.QueryClassRequest>): _72.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _72.QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryClassResponse;
                fromJSON(object: any): _72.QueryClassResponse;
                toJSON(message: _72.QueryClassResponse): unknown;
                fromPartial(object: DeepPartial<_72.QueryClassResponse>): _72.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _72.QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryClassesRequest;
                fromJSON(object: any): _72.QueryClassesRequest;
                toJSON(message: _72.QueryClassesRequest): unknown;
                fromPartial(object: DeepPartial<_72.QueryClassesRequest>): _72.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _72.QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _72.QueryClassesResponse;
                fromJSON(object: any): _72.QueryClassesResponse;
                toJSON(message: _72.QueryClassesResponse): unknown;
                fromPartial(object: DeepPartial<_72.QueryClassesResponse>): _72.QueryClassesResponse;
            };
            Class: {
                encode(message: _71.Class, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _71.Class;
                fromJSON(object: any): _71.Class;
                toJSON(message: _71.Class): unknown;
                fromPartial(object: DeepPartial<_71.Class>): _71.Class;
            };
            NFT: {
                encode(message: _71.NFT, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _71.NFT;
                fromJSON(object: any): _71.NFT;
                toJSON(message: _71.NFT): unknown;
                fromPartial(object: DeepPartial<_71.NFT>): _71.NFT;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _70.GenesisState;
                fromJSON(object: any): _70.GenesisState;
                toJSON(message: _70.GenesisState): unknown;
                fromPartial(object: DeepPartial<_70.GenesisState>): _70.GenesisState;
            };
            Entry: {
                encode(message: _70.Entry, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _70.Entry;
                fromJSON(object: any): _70.Entry;
                toJSON(message: _70.Entry): unknown;
                fromPartial(object: DeepPartial<_70.Entry>): _70.Entry;
            };
            EventSend: {
                encode(message: _69.EventSend, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _69.EventSend;
                fromJSON(object: any): _69.EventSend;
                toJSON(message: _69.EventSend): unknown;
                fromPartial(object: DeepPartial<_69.EventSend>): _69.EventSend;
            };
            EventMint: {
                encode(message: _69.EventMint, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _69.EventMint;
                fromJSON(object: any): _69.EventMint;
                toJSON(message: _69.EventMint): unknown;
                fromPartial(object: DeepPartial<_69.EventMint>): _69.EventMint;
            };
            EventBurn: {
                encode(message: _69.EventBurn, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _69.EventBurn;
                fromJSON(object: any): _69.EventBurn;
                toJSON(message: _69.EventBurn): unknown;
                fromPartial(object: DeepPartial<_69.EventBurn>): _69.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _74.Module, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _74.Module;
                    fromJSON(_: any): _74.Module;
                    toJSON(_: _74.Module): unknown;
                    fromPartial(_: DeepPartial<_74.Module>): _74.Module;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _75.TableDescriptor, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _75.TableDescriptor;
                fromJSON(object: any): _75.TableDescriptor;
                toJSON(message: _75.TableDescriptor): unknown;
                fromPartial(object: DeepPartial<_75.TableDescriptor>): _75.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _75.PrimaryKeyDescriptor, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _75.PrimaryKeyDescriptor;
                fromJSON(object: any): _75.PrimaryKeyDescriptor;
                toJSON(message: _75.PrimaryKeyDescriptor): unknown;
                fromPartial(object: DeepPartial<_75.PrimaryKeyDescriptor>): _75.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _75.SecondaryIndexDescriptor, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _75.SecondaryIndexDescriptor;
                fromJSON(object: any): _75.SecondaryIndexDescriptor;
                toJSON(message: _75.SecondaryIndexDescriptor): unknown;
                fromPartial(object: DeepPartial<_75.SecondaryIndexDescriptor>): _75.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _75.SingletonDescriptor, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _75.SingletonDescriptor;
                fromJSON(object: any): _75.SingletonDescriptor;
                toJSON(message: _75.SingletonDescriptor): unknown;
                fromPartial(object: DeepPartial<_75.SingletonDescriptor>): _75.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _76.StorageType;
            storageTypeToJSON(object: _76.StorageType): string;
            StorageType: typeof _76.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _76.ModuleSchemaDescriptor, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _76.ModuleSchemaDescriptor;
                fromJSON(object: any): _76.ModuleSchemaDescriptor;
                toJSON(message: _76.ModuleSchemaDescriptor): unknown;
                fromPartial(object: DeepPartial<_76.ModuleSchemaDescriptor>): _76.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _76.ModuleSchemaDescriptor_FileEntry, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _76.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _76.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _76.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: DeepPartial<_76.ModuleSchemaDescriptor_FileEntry>): _76.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            LCDQueryClient: typeof _156.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _78.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _78.QueryParamsRequest;
                fromJSON(object: any): _78.QueryParamsRequest;
                toJSON(message: _78.QueryParamsRequest): unknown;
                fromPartial(object: DeepPartial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _78.QueryParamsResponse;
                fromJSON(object: any): _78.QueryParamsResponse;
                toJSON(message: _78.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _78.QuerySubspacesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _78.QuerySubspacesRequest;
                fromJSON(_: any): _78.QuerySubspacesRequest;
                toJSON(_: _78.QuerySubspacesRequest): unknown;
                fromPartial(_: DeepPartial<_78.QuerySubspacesRequest>): _78.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _78.QuerySubspacesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _78.QuerySubspacesResponse;
                fromJSON(object: any): _78.QuerySubspacesResponse;
                toJSON(message: _78.QuerySubspacesResponse): unknown;
                fromPartial(object: DeepPartial<_78.QuerySubspacesResponse>): _78.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _78.Subspace, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _78.Subspace;
                fromJSON(object: any): _78.Subspace;
                toJSON(message: _78.Subspace): unknown;
                fromPartial(object: DeepPartial<_78.Subspace>): _78.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _77.ParameterChangeProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _77.ParameterChangeProposal;
                fromJSON(object: any): _77.ParameterChangeProposal;
                toJSON(message: _77.ParameterChangeProposal): unknown;
                fromPartial(object: DeepPartial<_77.ParameterChangeProposal>): _77.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _77.ParamChange, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _77.ParamChange;
                fromJSON(object: any): _77.ParamChange;
                toJSON(message: _77.ParamChange): unknown;
                fromPartial(object: DeepPartial<_77.ParamChange>): _77.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _82.MsgUnjail): {
                        typeUrl: string;
                        value: _82.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _82.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _82.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _82.MsgUnjail, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _82.MsgUnjail;
                fromJSON(object: any): _82.MsgUnjail;
                toJSON(message: _82.MsgUnjail): unknown;
                fromPartial(object: DeepPartial<_82.MsgUnjail>): _82.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _82.MsgUnjailResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _82.MsgUnjailResponse;
                fromJSON(_: any): _82.MsgUnjailResponse;
                toJSON(_: _82.MsgUnjailResponse): unknown;
                fromPartial(_: DeepPartial<_82.MsgUnjailResponse>): _82.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _81.ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _81.ValidatorSigningInfo;
                fromJSON(object: any): _81.ValidatorSigningInfo;
                toJSON(message: _81.ValidatorSigningInfo): unknown;
                fromPartial(object: DeepPartial<_81.ValidatorSigningInfo>): _81.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _81.Params, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _81.Params;
                fromJSON(object: any): _81.Params;
                toJSON(message: _81.Params): unknown;
                fromPartial(object: DeepPartial<_81.Params>): _81.Params;
            };
            QueryParamsRequest: {
                encode(_: _80.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _80.QueryParamsRequest;
                fromJSON(_: any): _80.QueryParamsRequest;
                toJSON(_: _80.QueryParamsRequest): unknown;
                fromPartial(_: DeepPartial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _80.QuerySigningInfoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _80.QuerySigningInfoRequest;
                fromJSON(object: any): _80.QuerySigningInfoRequest;
                toJSON(message: _80.QuerySigningInfoRequest): unknown;
                fromPartial(object: DeepPartial<_80.QuerySigningInfoRequest>): _80.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _80.QuerySigningInfoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _80.QuerySigningInfoResponse;
                fromJSON(object: any): _80.QuerySigningInfoResponse;
                toJSON(message: _80.QuerySigningInfoResponse): unknown;
                fromPartial(object: DeepPartial<_80.QuerySigningInfoResponse>): _80.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _80.QuerySigningInfosRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _80.QuerySigningInfosRequest;
                fromJSON(object: any): _80.QuerySigningInfosRequest;
                toJSON(message: _80.QuerySigningInfosRequest): unknown;
                fromPartial(object: DeepPartial<_80.QuerySigningInfosRequest>): _80.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _80.QuerySigningInfosResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _80.QuerySigningInfosResponse;
                fromJSON(object: any): _80.QuerySigningInfosResponse;
                toJSON(message: _80.QuerySigningInfosResponse): unknown;
                fromPartial(object: DeepPartial<_80.QuerySigningInfosResponse>): _80.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _79.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _79.GenesisState;
                fromJSON(object: any): _79.GenesisState;
                toJSON(message: _79.GenesisState): unknown;
                fromPartial(object: DeepPartial<_79.GenesisState>): _79.GenesisState;
            };
            SigningInfo: {
                encode(message: _79.SigningInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _79.SigningInfo;
                fromJSON(object: any): _79.SigningInfo;
                toJSON(message: _79.SigningInfo): unknown;
                fromPartial(object: DeepPartial<_79.SigningInfo>): _79.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _79.ValidatorMissedBlocks, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _79.ValidatorMissedBlocks;
                fromJSON(object: any): _79.ValidatorMissedBlocks;
                toJSON(message: _79.ValidatorMissedBlocks): unknown;
                fromPartial(object: DeepPartial<_79.ValidatorMissedBlocks>): _79.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _79.MissedBlock, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _79.MissedBlock;
                fromJSON(object: any): _79.MissedBlock;
                toJSON(message: _79.MissedBlock): unknown;
                fromPartial(object: DeepPartial<_79.MissedBlock>): _79.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            LCDQueryClient: typeof _158.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: any;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: any;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: any;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: any;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: any;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
                toJSON: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _87.MsgCreateValidator): {
                        typeUrl: string;
                        value: _87.MsgCreateValidator;
                    };
                    editValidator(value: _87.MsgEditValidator): {
                        typeUrl: string;
                        value: _87.MsgEditValidator;
                    };
                    delegate(value: _87.MsgDelegate): {
                        typeUrl: string;
                        value: _87.MsgDelegate;
                    };
                    beginRedelegate(value: _87.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _87.MsgBeginRedelegate;
                    };
                    undelegate(value: _87.MsgUndelegate): {
                        typeUrl: string;
                        value: _87.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _87.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _87.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _87.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _87.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _87.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _87.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _87.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _87.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _87.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _87.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _87.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _87.MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgCreateValidator;
                fromJSON(object: any): _87.MsgCreateValidator;
                toJSON(message: _87.MsgCreateValidator): unknown;
                fromPartial(object: DeepPartial<_87.MsgCreateValidator>): _87.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _87.MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgCreateValidatorResponse;
                fromJSON(_: any): _87.MsgCreateValidatorResponse;
                toJSON(_: _87.MsgCreateValidatorResponse): unknown;
                fromPartial(_: DeepPartial<_87.MsgCreateValidatorResponse>): _87.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _87.MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgEditValidator;
                fromJSON(object: any): _87.MsgEditValidator;
                toJSON(message: _87.MsgEditValidator): unknown;
                fromPartial(object: DeepPartial<_87.MsgEditValidator>): _87.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _87.MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgEditValidatorResponse;
                fromJSON(_: any): _87.MsgEditValidatorResponse;
                toJSON(_: _87.MsgEditValidatorResponse): unknown;
                fromPartial(_: DeepPartial<_87.MsgEditValidatorResponse>): _87.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _87.MsgDelegate, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgDelegate;
                fromJSON(object: any): _87.MsgDelegate;
                toJSON(message: _87.MsgDelegate): unknown;
                fromPartial(object: DeepPartial<_87.MsgDelegate>): _87.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _87.MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgDelegateResponse;
                fromJSON(_: any): _87.MsgDelegateResponse;
                toJSON(_: _87.MsgDelegateResponse): unknown;
                fromPartial(_: DeepPartial<_87.MsgDelegateResponse>): _87.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _87.MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgBeginRedelegate;
                fromJSON(object: any): _87.MsgBeginRedelegate;
                toJSON(message: _87.MsgBeginRedelegate): unknown;
                fromPartial(object: DeepPartial<_87.MsgBeginRedelegate>): _87.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _87.MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgBeginRedelegateResponse;
                fromJSON(object: any): _87.MsgBeginRedelegateResponse;
                toJSON(message: _87.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: DeepPartial<_87.MsgBeginRedelegateResponse>): _87.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _87.MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgUndelegate;
                fromJSON(object: any): _87.MsgUndelegate;
                toJSON(message: _87.MsgUndelegate): unknown;
                fromPartial(object: DeepPartial<_87.MsgUndelegate>): _87.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _87.MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgUndelegateResponse;
                fromJSON(object: any): _87.MsgUndelegateResponse;
                toJSON(message: _87.MsgUndelegateResponse): unknown;
                fromPartial(object: DeepPartial<_87.MsgUndelegateResponse>): _87.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _87.MsgCancelUnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _87.MsgCancelUnbondingDelegation;
                toJSON(message: _87.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: DeepPartial<_87.MsgCancelUnbondingDelegation>): _87.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _87.MsgCancelUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _87.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _87.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _87.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: DeepPartial<_87.MsgCancelUnbondingDelegationResponse>): _87.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _86.BondStatus;
            bondStatusToJSON(object: _86.BondStatus): string;
            BondStatus: typeof _86.BondStatus;
            HistoricalInfo: {
                encode(message: _86.HistoricalInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.HistoricalInfo;
                fromJSON(object: any): _86.HistoricalInfo;
                toJSON(message: _86.HistoricalInfo): unknown;
                fromPartial(object: DeepPartial<_86.HistoricalInfo>): _86.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _86.CommissionRates, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.CommissionRates;
                fromJSON(object: any): _86.CommissionRates;
                toJSON(message: _86.CommissionRates): unknown;
                fromPartial(object: DeepPartial<_86.CommissionRates>): _86.CommissionRates;
            };
            Commission: {
                encode(message: _86.Commission, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Commission;
                fromJSON(object: any): _86.Commission;
                toJSON(message: _86.Commission): unknown;
                fromPartial(object: DeepPartial<_86.Commission>): _86.Commission;
            };
            Description: {
                encode(message: _86.Description, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Description;
                fromJSON(object: any): _86.Description;
                toJSON(message: _86.Description): unknown;
                fromPartial(object: DeepPartial<_86.Description>): _86.Description;
            };
            Validator: {
                encode(message: _86.Validator, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Validator;
                fromJSON(object: any): _86.Validator;
                toJSON(message: _86.Validator): unknown;
                fromPartial(object: DeepPartial<_86.Validator>): _86.Validator;
            };
            ValAddresses: {
                encode(message: _86.ValAddresses, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.ValAddresses;
                fromJSON(object: any): _86.ValAddresses;
                toJSON(message: _86.ValAddresses): unknown;
                fromPartial(object: DeepPartial<_86.ValAddresses>): _86.ValAddresses;
            };
            DVPair: {
                encode(message: _86.DVPair, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.DVPair;
                fromJSON(object: any): _86.DVPair;
                toJSON(message: _86.DVPair): unknown;
                fromPartial(object: DeepPartial<_86.DVPair>): _86.DVPair;
            };
            DVPairs: {
                encode(message: _86.DVPairs, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.DVPairs;
                fromJSON(object: any): _86.DVPairs;
                toJSON(message: _86.DVPairs): unknown;
                fromPartial(object: DeepPartial<_86.DVPairs>): _86.DVPairs;
            };
            DVVTriplet: {
                encode(message: _86.DVVTriplet, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.DVVTriplet;
                fromJSON(object: any): _86.DVVTriplet;
                toJSON(message: _86.DVVTriplet): unknown;
                fromPartial(object: DeepPartial<_86.DVVTriplet>): _86.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _86.DVVTriplets, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.DVVTriplets;
                fromJSON(object: any): _86.DVVTriplets;
                toJSON(message: _86.DVVTriplets): unknown;
                fromPartial(object: DeepPartial<_86.DVVTriplets>): _86.DVVTriplets;
            };
            Delegation: {
                encode(message: _86.Delegation, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Delegation;
                fromJSON(object: any): _86.Delegation;
                toJSON(message: _86.Delegation): unknown;
                fromPartial(object: DeepPartial<_86.Delegation>): _86.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _86.UnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.UnbondingDelegation;
                fromJSON(object: any): _86.UnbondingDelegation;
                toJSON(message: _86.UnbondingDelegation): unknown;
                fromPartial(object: DeepPartial<_86.UnbondingDelegation>): _86.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _86.UnbondingDelegationEntry, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.UnbondingDelegationEntry;
                fromJSON(object: any): _86.UnbondingDelegationEntry;
                toJSON(message: _86.UnbondingDelegationEntry): unknown;
                fromPartial(object: DeepPartial<_86.UnbondingDelegationEntry>): _86.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _86.RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.RedelegationEntry;
                fromJSON(object: any): _86.RedelegationEntry;
                toJSON(message: _86.RedelegationEntry): unknown;
                fromPartial(object: DeepPartial<_86.RedelegationEntry>): _86.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _86.Redelegation, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Redelegation;
                fromJSON(object: any): _86.Redelegation;
                toJSON(message: _86.Redelegation): unknown;
                fromPartial(object: DeepPartial<_86.Redelegation>): _86.Redelegation;
            };
            Params: {
                encode(message: _86.Params, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Params;
                fromJSON(object: any): _86.Params;
                toJSON(message: _86.Params): unknown;
                fromPartial(object: DeepPartial<_86.Params>): _86.Params;
            };
            DelegationResponse: {
                encode(message: _86.DelegationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.DelegationResponse;
                fromJSON(object: any): _86.DelegationResponse;
                toJSON(message: _86.DelegationResponse): unknown;
                fromPartial(object: DeepPartial<_86.DelegationResponse>): _86.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _86.RedelegationEntryResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.RedelegationEntryResponse;
                fromJSON(object: any): _86.RedelegationEntryResponse;
                toJSON(message: _86.RedelegationEntryResponse): unknown;
                fromPartial(object: DeepPartial<_86.RedelegationEntryResponse>): _86.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _86.RedelegationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.RedelegationResponse;
                fromJSON(object: any): _86.RedelegationResponse;
                toJSON(message: _86.RedelegationResponse): unknown;
                fromPartial(object: DeepPartial<_86.RedelegationResponse>): _86.RedelegationResponse;
            };
            Pool: {
                encode(message: _86.Pool, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _86.Pool;
                fromJSON(object: any): _86.Pool;
                toJSON(message: _86.Pool): unknown;
                fromPartial(object: DeepPartial<_86.Pool>): _86.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _85.QueryValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorsRequest;
                fromJSON(object: any): _85.QueryValidatorsRequest;
                toJSON(message: _85.QueryValidatorsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorsRequest>): _85.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _85.QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorsResponse;
                fromJSON(object: any): _85.QueryValidatorsResponse;
                toJSON(message: _85.QueryValidatorsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorsResponse>): _85.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _85.QueryValidatorRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorRequest;
                fromJSON(object: any): _85.QueryValidatorRequest;
                toJSON(message: _85.QueryValidatorRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorRequest>): _85.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _85.QueryValidatorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorResponse;
                fromJSON(object: any): _85.QueryValidatorResponse;
                toJSON(message: _85.QueryValidatorResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorResponse>): _85.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _85.QueryValidatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _85.QueryValidatorDelegationsRequest;
                toJSON(message: _85.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorDelegationsRequest>): _85.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _85.QueryValidatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _85.QueryValidatorDelegationsResponse;
                toJSON(message: _85.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorDelegationsResponse>): _85.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _85.QueryValidatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _85.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorUnbondingDelegationsRequest>): _85.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _85.QueryValidatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _85.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _85.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryValidatorUnbondingDelegationsResponse>): _85.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _85.QueryDelegationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegationRequest;
                fromJSON(object: any): _85.QueryDelegationRequest;
                toJSON(message: _85.QueryDelegationRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegationRequest>): _85.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _85.QueryDelegationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegationResponse;
                fromJSON(object: any): _85.QueryDelegationResponse;
                toJSON(message: _85.QueryDelegationResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegationResponse>): _85.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _85.QueryUnbondingDelegationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _85.QueryUnbondingDelegationRequest;
                toJSON(message: _85.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryUnbondingDelegationRequest>): _85.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _85.QueryUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _85.QueryUnbondingDelegationResponse;
                toJSON(message: _85.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryUnbondingDelegationResponse>): _85.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _85.QueryDelegatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _85.QueryDelegatorDelegationsRequest;
                toJSON(message: _85.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorDelegationsRequest>): _85.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _85.QueryDelegatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _85.QueryDelegatorDelegationsResponse;
                toJSON(message: _85.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorDelegationsResponse>): _85.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _85.QueryDelegatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _85.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorUnbondingDelegationsRequest>): _85.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _85.QueryDelegatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _85.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _85.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorUnbondingDelegationsResponse>): _85.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _85.QueryRedelegationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryRedelegationsRequest;
                fromJSON(object: any): _85.QueryRedelegationsRequest;
                toJSON(message: _85.QueryRedelegationsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryRedelegationsRequest>): _85.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _85.QueryRedelegationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryRedelegationsResponse;
                fromJSON(object: any): _85.QueryRedelegationsResponse;
                toJSON(message: _85.QueryRedelegationsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryRedelegationsResponse>): _85.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _85.QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _85.QueryDelegatorValidatorsRequest;
                toJSON(message: _85.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorValidatorsRequest>): _85.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _85.QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _85.QueryDelegatorValidatorsResponse;
                toJSON(message: _85.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorValidatorsResponse>): _85.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _85.QueryDelegatorValidatorRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _85.QueryDelegatorValidatorRequest;
                toJSON(message: _85.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorValidatorRequest>): _85.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _85.QueryDelegatorValidatorResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _85.QueryDelegatorValidatorResponse;
                toJSON(message: _85.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryDelegatorValidatorResponse>): _85.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _85.QueryHistoricalInfoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryHistoricalInfoRequest;
                fromJSON(object: any): _85.QueryHistoricalInfoRequest;
                toJSON(message: _85.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: DeepPartial<_85.QueryHistoricalInfoRequest>): _85.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _85.QueryHistoricalInfoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryHistoricalInfoResponse;
                fromJSON(object: any): _85.QueryHistoricalInfoResponse;
                toJSON(message: _85.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryHistoricalInfoResponse>): _85.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _85.QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryPoolRequest;
                fromJSON(_: any): _85.QueryPoolRequest;
                toJSON(_: _85.QueryPoolRequest): unknown;
                fromPartial(_: DeepPartial<_85.QueryPoolRequest>): _85.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _85.QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryPoolResponse;
                fromJSON(object: any): _85.QueryPoolResponse;
                toJSON(message: _85.QueryPoolResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryPoolResponse>): _85.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _85.QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryParamsRequest;
                fromJSON(_: any): _85.QueryParamsRequest;
                toJSON(_: _85.QueryParamsRequest): unknown;
                fromPartial(_: DeepPartial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _85.QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _85.QueryParamsResponse;
                fromJSON(object: any): _85.QueryParamsResponse;
                toJSON(message: _85.QueryParamsResponse): unknown;
                fromPartial(object: DeepPartial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _84.GenesisState;
                fromJSON(object: any): _84.GenesisState;
                toJSON(message: _84.GenesisState): unknown;
                fromPartial(object: DeepPartial<_84.GenesisState>): _84.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _84.LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _84.LastValidatorPower;
                fromJSON(object: any): _84.LastValidatorPower;
                toJSON(message: _84.LastValidatorPower): unknown;
                fromPartial(object: DeepPartial<_84.LastValidatorPower>): _84.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _83.AuthorizationType;
            authorizationTypeToJSON(object: _83.AuthorizationType): string;
            AuthorizationType: typeof _83.AuthorizationType;
            StakeAuthorization: {
                encode(message: _83.StakeAuthorization, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _83.StakeAuthorization;
                fromJSON(object: any): _83.StakeAuthorization;
                toJSON(message: _83.StakeAuthorization): unknown;
                fromPartial(object: DeepPartial<_83.StakeAuthorization>): _83.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _83.StakeAuthorization_Validators, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _83.StakeAuthorization_Validators;
                fromJSON(object: any): _83.StakeAuthorization_Validators;
                toJSON(message: _83.StakeAuthorization_Validators): unknown;
                fromPartial(object: DeepPartial<_83.StakeAuthorization_Validators>): _83.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _88.SignMode;
                signModeToJSON(object: _88.SignMode): string;
                SignMode: typeof _88.SignMode;
                SignatureDescriptors: {
                    encode(message: _88.SignatureDescriptors, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _88.SignatureDescriptors;
                    fromJSON(object: any): _88.SignatureDescriptors;
                    toJSON(message: _88.SignatureDescriptors): unknown;
                    fromPartial(object: DeepPartial<_88.SignatureDescriptors>): _88.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _88.SignatureDescriptor, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _88.SignatureDescriptor;
                    fromJSON(object: any): _88.SignatureDescriptor;
                    toJSON(message: _88.SignatureDescriptor): unknown;
                    fromPartial(object: DeepPartial<_88.SignatureDescriptor>): _88.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _88.SignatureDescriptor_Data, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _88.SignatureDescriptor_Data;
                    fromJSON(object: any): _88.SignatureDescriptor_Data;
                    toJSON(message: _88.SignatureDescriptor_Data): unknown;
                    fromPartial(object: DeepPartial<_88.SignatureDescriptor_Data>): _88.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _88.SignatureDescriptor_Data_Single, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _88.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Single;
                    toJSON(message: _88.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: DeepPartial<_88.SignatureDescriptor_Data_Single>): _88.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _88.SignatureDescriptor_Data_Multi, writer?: _m0.Writer): _m0.Writer;
                    decode(input: any, length?: number): _88.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _88.SignatureDescriptor_Data_Multi;
                    toJSON(message: _88.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: DeepPartial<_88.SignatureDescriptor_Data_Multi>): _88.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _176.ServiceClientImpl;
            Tx: {
                encode(message: _90.Tx, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.Tx;
                fromJSON(object: any): _90.Tx;
                toJSON(message: _90.Tx): unknown;
                fromPartial(object: DeepPartial<_90.Tx>): _90.Tx;
            };
            TxRaw: {
                encode(message: _90.TxRaw, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.TxRaw;
                fromJSON(object: any): _90.TxRaw;
                toJSON(message: _90.TxRaw): unknown;
                fromPartial(object: DeepPartial<_90.TxRaw>): _90.TxRaw;
            };
            SignDoc: {
                encode(message: _90.SignDoc, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.SignDoc;
                fromJSON(object: any): _90.SignDoc;
                toJSON(message: _90.SignDoc): unknown;
                fromPartial(object: DeepPartial<_90.SignDoc>): _90.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _90.SignDocDirectAux, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.SignDocDirectAux;
                fromJSON(object: any): _90.SignDocDirectAux;
                toJSON(message: _90.SignDocDirectAux): unknown;
                fromPartial(object: DeepPartial<_90.SignDocDirectAux>): _90.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _90.TxBody, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.TxBody;
                fromJSON(object: any): _90.TxBody;
                toJSON(message: _90.TxBody): unknown;
                fromPartial(object: DeepPartial<_90.TxBody>): _90.TxBody;
            };
            AuthInfo: {
                encode(message: _90.AuthInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.AuthInfo;
                fromJSON(object: any): _90.AuthInfo;
                toJSON(message: _90.AuthInfo): unknown;
                fromPartial(object: DeepPartial<_90.AuthInfo>): _90.AuthInfo;
            };
            SignerInfo: {
                encode(message: _90.SignerInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.SignerInfo;
                fromJSON(object: any): _90.SignerInfo;
                toJSON(message: _90.SignerInfo): unknown;
                fromPartial(object: DeepPartial<_90.SignerInfo>): _90.SignerInfo;
            };
            ModeInfo: {
                encode(message: _90.ModeInfo, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.ModeInfo;
                fromJSON(object: any): _90.ModeInfo;
                toJSON(message: _90.ModeInfo): unknown;
                fromPartial(object: DeepPartial<_90.ModeInfo>): _90.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _90.ModeInfo_Single, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.ModeInfo_Single;
                fromJSON(object: any): _90.ModeInfo_Single;
                toJSON(message: _90.ModeInfo_Single): unknown;
                fromPartial(object: DeepPartial<_90.ModeInfo_Single>): _90.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _90.ModeInfo_Multi, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.ModeInfo_Multi;
                fromJSON(object: any): _90.ModeInfo_Multi;
                toJSON(message: _90.ModeInfo_Multi): unknown;
                fromPartial(object: DeepPartial<_90.ModeInfo_Multi>): _90.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _90.Fee, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.Fee;
                fromJSON(object: any): _90.Fee;
                toJSON(message: _90.Fee): unknown;
                fromPartial(object: DeepPartial<_90.Fee>): _90.Fee;
            };
            Tip: {
                encode(message: _90.Tip, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.Tip;
                fromJSON(object: any): _90.Tip;
                toJSON(message: _90.Tip): unknown;
                fromPartial(object: DeepPartial<_90.Tip>): _90.Tip;
            };
            AuxSignerData: {
                encode(message: _90.AuxSignerData, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _90.AuxSignerData;
                fromJSON(object: any): _90.AuxSignerData;
                toJSON(message: _90.AuxSignerData): unknown;
                fromPartial(object: DeepPartial<_90.AuxSignerData>): _90.AuxSignerData;
            };
            orderByFromJSON(object: any): _89.OrderBy;
            orderByToJSON(object: _89.OrderBy): string;
            broadcastModeFromJSON(object: any): _89.BroadcastMode;
            broadcastModeToJSON(object: _89.BroadcastMode): string;
            OrderBy: typeof _89.OrderBy;
            BroadcastMode: typeof _89.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _89.GetTxsEventRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.GetTxsEventRequest;
                fromJSON(object: any): _89.GetTxsEventRequest;
                toJSON(message: _89.GetTxsEventRequest): unknown;
                fromPartial(object: DeepPartial<_89.GetTxsEventRequest>): _89.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _89.GetTxsEventResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.GetTxsEventResponse;
                fromJSON(object: any): _89.GetTxsEventResponse;
                toJSON(message: _89.GetTxsEventResponse): unknown;
                fromPartial(object: DeepPartial<_89.GetTxsEventResponse>): _89.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _89.BroadcastTxRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.BroadcastTxRequest;
                fromJSON(object: any): _89.BroadcastTxRequest;
                toJSON(message: _89.BroadcastTxRequest): unknown;
                fromPartial(object: DeepPartial<_89.BroadcastTxRequest>): _89.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _89.BroadcastTxResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.BroadcastTxResponse;
                fromJSON(object: any): _89.BroadcastTxResponse;
                toJSON(message: _89.BroadcastTxResponse): unknown;
                fromPartial(object: DeepPartial<_89.BroadcastTxResponse>): _89.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _89.SimulateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.SimulateRequest;
                fromJSON(object: any): _89.SimulateRequest;
                toJSON(message: _89.SimulateRequest): unknown;
                fromPartial(object: DeepPartial<_89.SimulateRequest>): _89.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _89.SimulateResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.SimulateResponse;
                fromJSON(object: any): _89.SimulateResponse;
                toJSON(message: _89.SimulateResponse): unknown;
                fromPartial(object: DeepPartial<_89.SimulateResponse>): _89.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _89.GetTxRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.GetTxRequest;
                fromJSON(object: any): _89.GetTxRequest;
                toJSON(message: _89.GetTxRequest): unknown;
                fromPartial(object: DeepPartial<_89.GetTxRequest>): _89.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _89.GetTxResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.GetTxResponse;
                fromJSON(object: any): _89.GetTxResponse;
                toJSON(message: _89.GetTxResponse): unknown;
                fromPartial(object: DeepPartial<_89.GetTxResponse>): _89.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _89.GetBlockWithTxsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.GetBlockWithTxsRequest;
                fromJSON(object: any): _89.GetBlockWithTxsRequest;
                toJSON(message: _89.GetBlockWithTxsRequest): unknown;
                fromPartial(object: DeepPartial<_89.GetBlockWithTxsRequest>): _89.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _89.GetBlockWithTxsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _89.GetBlockWithTxsResponse;
                fromJSON(object: any): _89.GetBlockWithTxsResponse;
                toJSON(message: _89.GetBlockWithTxsResponse): unknown;
                fromPartial(object: DeepPartial<_89.GetBlockWithTxsResponse>): _89.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            LCDQueryClient: typeof _159.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: any;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _92.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _92.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _92.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _92.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _92.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _92.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _92.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _92.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _93.Plan, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _93.Plan;
                fromJSON(object: any): _93.Plan;
                toJSON(message: _93.Plan): unknown;
                fromPartial(object: DeepPartial<_93.Plan>): _93.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _93.SoftwareUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _93.SoftwareUpgradeProposal;
                fromJSON(object: any): _93.SoftwareUpgradeProposal;
                toJSON(message: _93.SoftwareUpgradeProposal): unknown;
                fromPartial(object: DeepPartial<_93.SoftwareUpgradeProposal>): _93.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _93.CancelSoftwareUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _93.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _93.CancelSoftwareUpgradeProposal;
                toJSON(message: _93.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: DeepPartial<_93.CancelSoftwareUpgradeProposal>): _93.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _93.ModuleVersion, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _93.ModuleVersion;
                fromJSON(object: any): _93.ModuleVersion;
                toJSON(message: _93.ModuleVersion): unknown;
                fromPartial(object: DeepPartial<_93.ModuleVersion>): _93.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _92.MsgSoftwareUpgrade, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _92.MsgSoftwareUpgrade;
                fromJSON(object: any): _92.MsgSoftwareUpgrade;
                toJSON(message: _92.MsgSoftwareUpgrade): unknown;
                fromPartial(object: DeepPartial<_92.MsgSoftwareUpgrade>): _92.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _92.MsgSoftwareUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _92.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _92.MsgSoftwareUpgradeResponse;
                toJSON(_: _92.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: DeepPartial<_92.MsgSoftwareUpgradeResponse>): _92.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _92.MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _92.MsgCancelUpgrade;
                fromJSON(object: any): _92.MsgCancelUpgrade;
                toJSON(message: _92.MsgCancelUpgrade): unknown;
                fromPartial(object: DeepPartial<_92.MsgCancelUpgrade>): _92.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _92.MsgCancelUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _92.MsgCancelUpgradeResponse;
                fromJSON(_: any): _92.MsgCancelUpgradeResponse;
                toJSON(_: _92.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: DeepPartial<_92.MsgCancelUpgradeResponse>): _92.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _91.QueryCurrentPlanRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryCurrentPlanRequest;
                fromJSON(_: any): _91.QueryCurrentPlanRequest;
                toJSON(_: _91.QueryCurrentPlanRequest): unknown;
                fromPartial(_: DeepPartial<_91.QueryCurrentPlanRequest>): _91.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _91.QueryCurrentPlanResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryCurrentPlanResponse;
                fromJSON(object: any): _91.QueryCurrentPlanResponse;
                toJSON(message: _91.QueryCurrentPlanResponse): unknown;
                fromPartial(object: DeepPartial<_91.QueryCurrentPlanResponse>): _91.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _91.QueryAppliedPlanRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryAppliedPlanRequest;
                fromJSON(object: any): _91.QueryAppliedPlanRequest;
                toJSON(message: _91.QueryAppliedPlanRequest): unknown;
                fromPartial(object: DeepPartial<_91.QueryAppliedPlanRequest>): _91.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _91.QueryAppliedPlanResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryAppliedPlanResponse;
                fromJSON(object: any): _91.QueryAppliedPlanResponse;
                toJSON(message: _91.QueryAppliedPlanResponse): unknown;
                fromPartial(object: DeepPartial<_91.QueryAppliedPlanResponse>): _91.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _91.QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateRequest;
                toJSON(message: _91.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: DeepPartial<_91.QueryUpgradedConsensusStateRequest>): _91.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _91.QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _91.QueryUpgradedConsensusStateResponse;
                toJSON(message: _91.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: DeepPartial<_91.QueryUpgradedConsensusStateResponse>): _91.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _91.QueryModuleVersionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryModuleVersionsRequest;
                fromJSON(object: any): _91.QueryModuleVersionsRequest;
                toJSON(message: _91.QueryModuleVersionsRequest): unknown;
                fromPartial(object: DeepPartial<_91.QueryModuleVersionsRequest>): _91.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _91.QueryModuleVersionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryModuleVersionsResponse;
                fromJSON(object: any): _91.QueryModuleVersionsResponse;
                toJSON(message: _91.QueryModuleVersionsResponse): unknown;
                fromPartial(object: DeepPartial<_91.QueryModuleVersionsResponse>): _91.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _91.QueryAuthorityRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryAuthorityRequest;
                fromJSON(_: any): _91.QueryAuthorityRequest;
                toJSON(_: _91.QueryAuthorityRequest): unknown;
                fromPartial(_: DeepPartial<_91.QueryAuthorityRequest>): _91.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _91.QueryAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _91.QueryAuthorityResponse;
                fromJSON(object: any): _91.QueryAuthorityResponse;
                toJSON(message: _91.QueryAuthorityResponse): unknown;
                fromPartial(object: DeepPartial<_91.QueryAuthorityResponse>): _91.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: any;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: any;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: any;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _94.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _94.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _94.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _94.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _94.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _94.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _94.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _94.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _94.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _94.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _95.BaseVestingAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _95.BaseVestingAccount;
                fromJSON(object: any): _95.BaseVestingAccount;
                toJSON(message: _95.BaseVestingAccount): unknown;
                fromPartial(object: DeepPartial<_95.BaseVestingAccount>): _95.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _95.ContinuousVestingAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _95.ContinuousVestingAccount;
                fromJSON(object: any): _95.ContinuousVestingAccount;
                toJSON(message: _95.ContinuousVestingAccount): unknown;
                fromPartial(object: DeepPartial<_95.ContinuousVestingAccount>): _95.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _95.DelayedVestingAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _95.DelayedVestingAccount;
                fromJSON(object: any): _95.DelayedVestingAccount;
                toJSON(message: _95.DelayedVestingAccount): unknown;
                fromPartial(object: DeepPartial<_95.DelayedVestingAccount>): _95.DelayedVestingAccount;
            };
            Period: {
                encode(message: _95.Period, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _95.Period;
                fromJSON(object: any): _95.Period;
                toJSON(message: _95.Period): unknown;
                fromPartial(object: DeepPartial<_95.Period>): _95.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _95.PeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _95.PeriodicVestingAccount;
                fromJSON(object: any): _95.PeriodicVestingAccount;
                toJSON(message: _95.PeriodicVestingAccount): unknown;
                fromPartial(object: DeepPartial<_95.PeriodicVestingAccount>): _95.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _95.PermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _95.PermanentLockedAccount;
                fromJSON(object: any): _95.PermanentLockedAccount;
                toJSON(message: _95.PermanentLockedAccount): unknown;
                fromPartial(object: DeepPartial<_95.PermanentLockedAccount>): _95.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _94.MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _94.MsgCreateVestingAccount;
                fromJSON(object: any): _94.MsgCreateVestingAccount;
                toJSON(message: _94.MsgCreateVestingAccount): unknown;
                fromPartial(object: DeepPartial<_94.MsgCreateVestingAccount>): _94.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _94.MsgCreateVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _94.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _94.MsgCreateVestingAccountResponse;
                toJSON(_: _94.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: DeepPartial<_94.MsgCreateVestingAccountResponse>): _94.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _94.MsgCreatePermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _94.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _94.MsgCreatePermanentLockedAccount;
                toJSON(message: _94.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: DeepPartial<_94.MsgCreatePermanentLockedAccount>): _94.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _94.MsgCreatePermanentLockedAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _94.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _94.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _94.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: DeepPartial<_94.MsgCreatePermanentLockedAccountResponse>): _94.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _94.MsgCreatePeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _94.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _94.MsgCreatePeriodicVestingAccount;
                toJSON(message: _94.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: DeepPartial<_94.MsgCreatePeriodicVestingAccount>): _94.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _94.MsgCreatePeriodicVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: any, length?: number): _94.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _94.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _94.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: DeepPartial<_94.MsgCreatePeriodicVestingAccountResponse>): _94.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _178.MsgClientImpl;
                };
                bank: {
                    v1beta1: _179.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _180.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _181.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _182.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _183.MsgClientImpl;
                };
                gov: {
                    v1: _184.MsgClientImpl;
                    v1beta1: _185.MsgClientImpl;
                };
                group: {
                    v1: _186.MsgClientImpl;
                };
                nft: {
                    v1beta1: _187.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _188.MsgClientImpl;
                };
                staking: {
                    v1beta1: _189.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _190.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _191.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: _160.QueryClientImpl;
                };
                auth: {
                    v1beta1: _161.QueryClientImpl;
                };
                authz: {
                    v1beta1: _162.QueryClientImpl;
                };
                bank: {
                    v1beta1: _163.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _165.QueryClientImpl;
                };
                evidence: {
                    v1beta1: _166.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _167.QueryClientImpl;
                };
                gov: {
                    v1: _168.QueryClientImpl;
                    v1beta1: _169.QueryClientImpl;
                };
                group: {
                    v1: _170.QueryClientImpl;
                };
                mint: {
                    v1beta1: _171.QueryClientImpl;
                };
                nft: {
                    v1beta1: _172.QueryClientImpl;
                };
                params: {
                    v1beta1: _173.QueryClientImpl;
                };
                slashing: {
                    v1beta1: _174.QueryClientImpl;
                };
                staking: {
                    v1beta1: _175.QueryClientImpl;
                };
                upgrade: {
                    v1beta1: _177.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _145.LCDQueryClient;
                };
                authz: {
                    v1beta1: _146.LCDQueryClient;
                };
                bank: {
                    v1beta1: _147.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _148.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _149.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _150.LCDQueryClient;
                };
                gov: {
                    v1: _151.LCDQueryClient;
                    v1beta1: _152.LCDQueryClient;
                };
                group: {
                    v1: _153.LCDQueryClient;
                };
                mint: {
                    v1beta1: _154.LCDQueryClient;
                };
                nft: {
                    v1beta1: _155.LCDQueryClient;
                };
                params: {
                    v1beta1: _156.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _157.LCDQueryClient;
                };
                staking: {
                    v1beta1: _158.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _159.LCDQueryClient;
                };
            };
        }>;
    };
}
