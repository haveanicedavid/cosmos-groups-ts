import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export enum StorageType {
  STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,
  STORAGE_TYPE_MEMORY = 1,
  STORAGE_TYPE_TRANSIENT = 2,
  STORAGE_TYPE_INDEX = 3,
  STORAGE_TYPE_COMMITMENT = 4,
  UNRECOGNIZED = -1,
}
export function storageTypeFromJSON(object: any): StorageType {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;

    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;

    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;

    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;

    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}
export function storageTypeToJSON(object: StorageType): string {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";

    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";

    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";

    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";

    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";

    default:
      return "UNKNOWN";
  }
}
export interface ModuleSchemaDescriptor {
  schema_file: ModuleSchemaDescriptor_FileEntry[];
  prefix: Uint8Array;
}
export interface ModuleSchemaDescriptor_FileEntry {
  id: number;
  proto_file_name: string;
  storage_type: StorageType;
}

function createBaseModuleSchemaDescriptor(): ModuleSchemaDescriptor {
  return {
    schema_file: [],
    prefix: new Uint8Array()
  };
}

export const ModuleSchemaDescriptor = {
  encode(message: ModuleSchemaDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schema_file) {
      ModuleSchemaDescriptor_FileEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schema_file.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleSchemaDescriptor {
    return {
      schema_file: Array.isArray(object?.schema_file) ? object.schema_file.map((e: any) => ModuleSchemaDescriptor_FileEntry.fromJSON(e)) : [],
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
    };
  },

  toJSON(message: ModuleSchemaDescriptor): unknown {
    const obj: any = {};

    if (message.schema_file) {
      obj.schema_file = message.schema_file.map(e => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
    } else {
      obj.schema_file = [];
    }

    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleSchemaDescriptor>): ModuleSchemaDescriptor {
    const message = createBaseModuleSchemaDescriptor();
    message.schema_file = object.schema_file?.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  }

};

function createBaseModuleSchemaDescriptor_FileEntry(): ModuleSchemaDescriptor_FileEntry {
  return {
    id: 0,
    proto_file_name: "",
    storage_type: 0
  };
}

export const ModuleSchemaDescriptor_FileEntry = {
  encode(message: ModuleSchemaDescriptor_FileEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.proto_file_name !== "") {
      writer.uint32(18).string(message.proto_file_name);
    }

    if (message.storage_type !== 0) {
      writer.uint32(24).int32(message.storage_type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor_FileEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.proto_file_name = reader.string();
          break;

        case 3:
          message.storage_type = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleSchemaDescriptor_FileEntry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      proto_file_name: isSet(object.proto_file_name) ? String(object.proto_file_name) : "",
      storage_type: isSet(object.storage_type) ? storageTypeFromJSON(object.storage_type) : 0
    };
  },

  toJSON(message: ModuleSchemaDescriptor_FileEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.proto_file_name !== undefined && (obj.proto_file_name = message.proto_file_name);
    message.storage_type !== undefined && (obj.storage_type = storageTypeToJSON(message.storage_type));
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleSchemaDescriptor_FileEntry>): ModuleSchemaDescriptor_FileEntry {
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = object.id ?? 0;
    message.proto_file_name = object.proto_file_name ?? "";
    message.storage_type = object.storage_type ?? 0;
    return message;
  }

};