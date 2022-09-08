import { Any } from "../../../google/protobuf/any";
import { SignMode } from "../signing/v1beta1/signing";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Tx {
    body: TxBody;
    auth_info: AuthInfo;
    signatures: Uint8Array[];
}
export interface TxRaw {
    body_bytes: Uint8Array;
    auth_info_bytes: Uint8Array;
    signatures: Uint8Array[];
}
export interface SignDoc {
    body_bytes: Uint8Array;
    auth_info_bytes: Uint8Array;
    chain_id: string;
    account_number: Long;
}
export interface SignDocDirectAux {
    body_bytes: Uint8Array;
    public_key: Any;
    chain_id: string;
    account_number: Long;
    sequence: Long;
    tip: Tip;
}
export interface TxBody {
    messages: Any[];
    memo: string;
    timeout_height: Long;
    extension_options: Any[];
    non_critical_extension_options: Any[];
}
export interface AuthInfo {
    signer_infos: SignerInfo[];
    fee: Fee;
    tip: Tip;
}
export interface SignerInfo {
    public_key: Any;
    mode_info: ModeInfo;
    sequence: Long;
}
export interface ModeInfo {
    single?: ModeInfo_Single;
    multi?: ModeInfo_Multi;
}
export interface ModeInfo_Single {
    mode: SignMode;
}
export interface ModeInfo_Multi {
    bitarray: CompactBitArray;
    mode_infos: ModeInfo[];
}
export interface Fee {
    amount: Coin[];
    gas_limit: Long;
    payer: string;
    granter: string;
}
export interface Tip {
    amount: Coin[];
    tipper: string;
}
export interface AuxSignerData {
    address: string;
    sign_doc: SignDocDirectAux;
    mode: SignMode;
    sig: Uint8Array;
}
export declare const Tx: {
    encode(message: Tx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tx;
    fromJSON(object: any): Tx;
    toJSON(message: Tx): unknown;
    fromPartial(object: DeepPartial<Tx>): Tx;
};
export declare const TxRaw: {
    encode(message: TxRaw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxRaw;
    fromJSON(object: any): TxRaw;
    toJSON(message: TxRaw): unknown;
    fromPartial(object: DeepPartial<TxRaw>): TxRaw;
};
export declare const SignDoc: {
    encode(message: SignDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignDoc;
    fromJSON(object: any): SignDoc;
    toJSON(message: SignDoc): unknown;
    fromPartial(object: DeepPartial<SignDoc>): SignDoc;
};
export declare const SignDocDirectAux: {
    encode(message: SignDocDirectAux, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignDocDirectAux;
    fromJSON(object: any): SignDocDirectAux;
    toJSON(message: SignDocDirectAux): unknown;
    fromPartial(object: DeepPartial<SignDocDirectAux>): SignDocDirectAux;
};
export declare const TxBody: {
    encode(message: TxBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxBody;
    fromJSON(object: any): TxBody;
    toJSON(message: TxBody): unknown;
    fromPartial(object: DeepPartial<TxBody>): TxBody;
};
export declare const AuthInfo: {
    encode(message: AuthInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthInfo;
    fromJSON(object: any): AuthInfo;
    toJSON(message: AuthInfo): unknown;
    fromPartial(object: DeepPartial<AuthInfo>): AuthInfo;
};
export declare const SignerInfo: {
    encode(message: SignerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignerInfo;
    fromJSON(object: any): SignerInfo;
    toJSON(message: SignerInfo): unknown;
    fromPartial(object: DeepPartial<SignerInfo>): SignerInfo;
};
export declare const ModeInfo: {
    encode(message: ModeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo;
    fromJSON(object: any): ModeInfo;
    toJSON(message: ModeInfo): unknown;
    fromPartial(object: DeepPartial<ModeInfo>): ModeInfo;
};
export declare const ModeInfo_Single: {
    encode(message: ModeInfo_Single, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Single;
    fromJSON(object: any): ModeInfo_Single;
    toJSON(message: ModeInfo_Single): unknown;
    fromPartial(object: DeepPartial<ModeInfo_Single>): ModeInfo_Single;
};
export declare const ModeInfo_Multi: {
    encode(message: ModeInfo_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Multi;
    fromJSON(object: any): ModeInfo_Multi;
    toJSON(message: ModeInfo_Multi): unknown;
    fromPartial(object: DeepPartial<ModeInfo_Multi>): ModeInfo_Multi;
};
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    fromPartial(object: DeepPartial<Fee>): Fee;
};
export declare const Tip: {
    encode(message: Tip, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tip;
    fromJSON(object: any): Tip;
    toJSON(message: Tip): unknown;
    fromPartial(object: DeepPartial<Tip>): Tip;
};
export declare const AuxSignerData: {
    encode(message: AuxSignerData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuxSignerData;
    fromJSON(object: any): AuxSignerData;
    toJSON(message: AuxSignerData): unknown;
    fromPartial(object: DeepPartial<AuxSignerData>): AuxSignerData;
};
