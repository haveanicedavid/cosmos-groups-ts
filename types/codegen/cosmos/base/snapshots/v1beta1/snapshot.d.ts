import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Snapshot {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Metadata;
}
export interface Metadata {
    chunk_hashes: Uint8Array[];
}
export interface SnapshotItem {
    store?: SnapshotStoreItem;
    iavl?: SnapshotIAVLItem;
    extension?: SnapshotExtensionMeta;
    extension_payload?: SnapshotExtensionPayload;
    kv?: SnapshotKVItem;
    schema?: SnapshotSchema;
}
export interface SnapshotStoreItem {
    name: string;
}
export interface SnapshotIAVLItem {
    key: Uint8Array;
    value: Uint8Array;
    version: Long;
    height: number;
}
export interface SnapshotExtensionMeta {
    name: string;
    format: number;
}
export interface SnapshotExtensionPayload {
    payload: Uint8Array;
}
export interface SnapshotKVItem {
    key: Uint8Array;
    value: Uint8Array;
}
export interface SnapshotSchema {
    keys: Uint8Array[];
}
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial(object: DeepPartial<Metadata>): Metadata;
};
export declare const SnapshotItem: {
    encode(message: SnapshotItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotItem;
    fromJSON(object: any): SnapshotItem;
    toJSON(message: SnapshotItem): unknown;
    fromPartial(object: DeepPartial<SnapshotItem>): SnapshotItem;
};
export declare const SnapshotStoreItem: {
    encode(message: SnapshotStoreItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotStoreItem;
    fromJSON(object: any): SnapshotStoreItem;
    toJSON(message: SnapshotStoreItem): unknown;
    fromPartial(object: DeepPartial<SnapshotStoreItem>): SnapshotStoreItem;
};
export declare const SnapshotIAVLItem: {
    encode(message: SnapshotIAVLItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotIAVLItem;
    fromJSON(object: any): SnapshotIAVLItem;
    toJSON(message: SnapshotIAVLItem): unknown;
    fromPartial(object: DeepPartial<SnapshotIAVLItem>): SnapshotIAVLItem;
};
export declare const SnapshotExtensionMeta: {
    encode(message: SnapshotExtensionMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionMeta;
    fromJSON(object: any): SnapshotExtensionMeta;
    toJSON(message: SnapshotExtensionMeta): unknown;
    fromPartial(object: DeepPartial<SnapshotExtensionMeta>): SnapshotExtensionMeta;
};
export declare const SnapshotExtensionPayload: {
    encode(message: SnapshotExtensionPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionPayload;
    fromJSON(object: any): SnapshotExtensionPayload;
    toJSON(message: SnapshotExtensionPayload): unknown;
    fromPartial(object: DeepPartial<SnapshotExtensionPayload>): SnapshotExtensionPayload;
};
export declare const SnapshotKVItem: {
    encode(message: SnapshotKVItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotKVItem;
    fromJSON(object: any): SnapshotKVItem;
    toJSON(message: SnapshotKVItem): unknown;
    fromPartial(object: DeepPartial<SnapshotKVItem>): SnapshotKVItem;
};
export declare const SnapshotSchema: {
    encode(message: SnapshotSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchema;
    fromJSON(object: any): SnapshotSchema;
    toJSON(message: SnapshotSchema): unknown;
    fromPartial(object: DeepPartial<SnapshotSchema>): SnapshotSchema;
};
