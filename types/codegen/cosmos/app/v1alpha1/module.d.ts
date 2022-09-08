import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ModuleDescriptor {
    go_import: string;
    use_package: PackageReference[];
    can_migrate_from: MigrateFromInfo[];
}
export interface PackageReference {
    name: string;
    revision: number;
}
export interface MigrateFromInfo {
    module: string;
}
export declare const ModuleDescriptor: {
    encode(message: ModuleDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDescriptor;
    fromJSON(object: any): ModuleDescriptor;
    toJSON(message: ModuleDescriptor): unknown;
    fromPartial(object: DeepPartial<ModuleDescriptor>): ModuleDescriptor;
};
export declare const PackageReference: {
    encode(message: PackageReference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PackageReference;
    fromJSON(object: any): PackageReference;
    toJSON(message: PackageReference): unknown;
    fromPartial(object: DeepPartial<PackageReference>): PackageReference;
};
export declare const MigrateFromInfo: {
    encode(message: MigrateFromInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateFromInfo;
    fromJSON(object: any): MigrateFromInfo;
    toJSON(message: MigrateFromInfo): unknown;
    fromPartial(object: DeepPartial<MigrateFromInfo>): MigrateFromInfo;
};
