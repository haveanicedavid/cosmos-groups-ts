import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface TableDescriptor {
  primary_key: PrimaryKeyDescriptor;
  index: SecondaryIndexDescriptor[];
  id: number;
}
export interface PrimaryKeyDescriptor {
  fields: string;
  auto_increment: boolean;
}
export interface SecondaryIndexDescriptor {
  fields: string;
  id: number;
  unique: boolean;
}
export interface SingletonDescriptor {
  id: number;
}

function createBaseTableDescriptor(): TableDescriptor {
  return {
    primary_key: undefined,
    index: [],
    id: 0
  };
}

export const TableDescriptor = {
  encode(message: TableDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primary_key !== undefined) {
      PrimaryKeyDescriptor.encode(message.primary_key, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.primary_key = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.id = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TableDescriptor {
    return {
      primary_key: isSet(object.primary_key) ? PrimaryKeyDescriptor.fromJSON(object.primary_key) : undefined,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SecondaryIndexDescriptor.fromJSON(e)) : [],
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: TableDescriptor): unknown {
    const obj: any = {};
    message.primary_key !== undefined && (obj.primary_key = message.primary_key ? PrimaryKeyDescriptor.toJSON(message.primary_key) : undefined);

    if (message.index) {
      obj.index = message.index.map(e => e ? SecondaryIndexDescriptor.toJSON(e) : undefined);
    } else {
      obj.index = [];
    }

    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<TableDescriptor>): TableDescriptor {
    const message = createBaseTableDescriptor();
    message.primary_key = object.primary_key !== undefined && object.primary_key !== null ? PrimaryKeyDescriptor.fromPartial(object.primary_key) : undefined;
    message.index = object.index?.map(e => SecondaryIndexDescriptor.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  }

};

function createBasePrimaryKeyDescriptor(): PrimaryKeyDescriptor {
  return {
    fields: "",
    auto_increment: false
  };
}

export const PrimaryKeyDescriptor = {
  encode(message: PrimaryKeyDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }

    if (message.auto_increment === true) {
      writer.uint32(16).bool(message.auto_increment);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKeyDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;

        case 2:
          message.auto_increment = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PrimaryKeyDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      auto_increment: isSet(object.auto_increment) ? Boolean(object.auto_increment) : false
    };
  },

  toJSON(message: PrimaryKeyDescriptor): unknown {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.auto_increment !== undefined && (obj.auto_increment = message.auto_increment);
    return obj;
  },

  fromPartial(object: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    message.fields = object.fields ?? "";
    message.auto_increment = object.auto_increment ?? false;
    return message;
  }

};

function createBaseSecondaryIndexDescriptor(): SecondaryIndexDescriptor {
  return {
    fields: "",
    id: 0,
    unique: false
  };
}

export const SecondaryIndexDescriptor = {
  encode(message: SecondaryIndexDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }

    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }

    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryIndexDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fields = reader.string();
          break;

        case 2:
          message.id = reader.uint32();
          break;

        case 3:
          message.unique = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SecondaryIndexDescriptor {
    return {
      fields: isSet(object.fields) ? String(object.fields) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      unique: isSet(object.unique) ? Boolean(object.unique) : false
    };
  },

  toJSON(message: SecondaryIndexDescriptor): unknown {
    const obj: any = {};
    message.fields !== undefined && (obj.fields = message.fields);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.unique !== undefined && (obj.unique = message.unique);
    return obj;
  },

  fromPartial(object: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = object.fields ?? "";
    message.id = object.id ?? 0;
    message.unique = object.unique ?? false;
    return message;
  }

};

function createBaseSingletonDescriptor(): SingletonDescriptor {
  return {
    id: 0
  };
}

export const SingletonDescriptor = {
  encode(message: SingletonDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingletonDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SingletonDescriptor {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: SingletonDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<SingletonDescriptor>): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    message.id = object.id ?? 0;
    return message;
  }

};