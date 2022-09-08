import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
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

function createBaseModuleDescriptor(): ModuleDescriptor {
  return {
    go_import: "",
    use_package: [],
    can_migrate_from: []
  };
}

export const ModuleDescriptor = {
  encode(message: ModuleDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.go_import !== "") {
      writer.uint32(10).string(message.go_import);
    }

    for (const v of message.use_package) {
      PackageReference.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.can_migrate_from) {
      MigrateFromInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.go_import = reader.string();
          break;

        case 2:
          message.use_package.push(PackageReference.decode(reader, reader.uint32()));
          break;

        case 3:
          message.can_migrate_from.push(MigrateFromInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleDescriptor {
    return {
      go_import: isSet(object.go_import) ? String(object.go_import) : "",
      use_package: Array.isArray(object?.use_package) ? object.use_package.map((e: any) => PackageReference.fromJSON(e)) : [],
      can_migrate_from: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e: any) => MigrateFromInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleDescriptor): unknown {
    const obj: any = {};
    message.go_import !== undefined && (obj.go_import = message.go_import);

    if (message.use_package) {
      obj.use_package = message.use_package.map(e => e ? PackageReference.toJSON(e) : undefined);
    } else {
      obj.use_package = [];
    }

    if (message.can_migrate_from) {
      obj.can_migrate_from = message.can_migrate_from.map(e => e ? MigrateFromInfo.toJSON(e) : undefined);
    } else {
      obj.can_migrate_from = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ModuleDescriptor>): ModuleDescriptor {
    const message = createBaseModuleDescriptor();
    message.go_import = object.go_import ?? "";
    message.use_package = object.use_package?.map(e => PackageReference.fromPartial(e)) || [];
    message.can_migrate_from = object.can_migrate_from?.map(e => MigrateFromInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBasePackageReference(): PackageReference {
  return {
    name: "",
    revision: 0
  };
}

export const PackageReference = {
  encode(message: PackageReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackageReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageReference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.revision = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PackageReference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      revision: isSet(object.revision) ? Number(object.revision) : 0
    };
  },

  toJSON(message: PackageReference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    return obj;
  },

  fromPartial(object: DeepPartial<PackageReference>): PackageReference {
    const message = createBasePackageReference();
    message.name = object.name ?? "";
    message.revision = object.revision ?? 0;
    return message;
  }

};

function createBaseMigrateFromInfo(): MigrateFromInfo {
  return {
    module: ""
  };
}

export const MigrateFromInfo = {
  encode(message: MigrateFromInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateFromInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateFromInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MigrateFromInfo {
    return {
      module: isSet(object.module) ? String(object.module) : ""
    };
  },

  toJSON(message: MigrateFromInfo): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  fromPartial(object: DeepPartial<MigrateFromInfo>): MigrateFromInfo {
    const message = createBaseMigrateFromInfo();
    message.module = object.module ?? "";
    return message;
  }

};