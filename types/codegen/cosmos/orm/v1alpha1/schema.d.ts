import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum StorageType {
    STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,
    STORAGE_TYPE_MEMORY = 1,
    STORAGE_TYPE_TRANSIENT = 2,
    STORAGE_TYPE_INDEX = 3,
    STORAGE_TYPE_COMMITMENT = 4,
    UNRECOGNIZED = -1
}
export declare function storageTypeFromJSON(object: any): StorageType;
export declare function storageTypeToJSON(object: StorageType): string;
export interface ModuleSchemaDescriptor {
    schema_file: ModuleSchemaDescriptor_FileEntry[];
    prefix: Uint8Array;
}
export interface ModuleSchemaDescriptor_FileEntry {
    id: number;
    proto_file_name: string;
    storage_type: StorageType;
}
export declare const ModuleSchemaDescriptor: {
    encode(message: ModuleSchemaDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor;
    fromJSON(object: any): ModuleSchemaDescriptor;
    toJSON(message: ModuleSchemaDescriptor): unknown;
    fromPartial(object: DeepPartial<ModuleSchemaDescriptor>): ModuleSchemaDescriptor;
};
export declare const ModuleSchemaDescriptor_FileEntry: {
    encode(message: ModuleSchemaDescriptor_FileEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor_FileEntry;
    fromJSON(object: any): ModuleSchemaDescriptor_FileEntry;
    toJSON(message: ModuleSchemaDescriptor_FileEntry): unknown;
    fromPartial(object: DeepPartial<ModuleSchemaDescriptor_FileEntry>): ModuleSchemaDescriptor_FileEntry;
};
