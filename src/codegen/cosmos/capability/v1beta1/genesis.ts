import { CapabilityOwners } from "./capability";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface GenesisOwners {
  index: Long;
  index_owners: CapabilityOwners;
}
export interface GenesisState {
  index: Long;
  owners: GenesisOwners[];
}

function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: Long.UZERO,
    index_owners: undefined
  };
}

export const GenesisOwners = {
  encode(message: GenesisOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }

    if (message.index_owners !== undefined) {
      CapabilityOwners.encode(message.index_owners, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.uint64() as Long);
          break;

        case 2:
          message.index_owners = CapabilityOwners.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? Long.fromString(object.index) : Long.UZERO,
      index_owners: isSet(object.index_owners) ? CapabilityOwners.fromJSON(object.index_owners) : undefined
    };
  },

  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    message.index_owners !== undefined && (obj.index_owners = message.index_owners ? CapabilityOwners.toJSON(message.index_owners) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.index_owners = object.index_owners !== undefined && object.index_owners !== null ? CapabilityOwners.fromPartial(object.index_owners) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    index: Long.UZERO,
    owners: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }

    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.uint64() as Long);
          break;

        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      index: isSet(object.index) ? Long.fromString(object.index) : Long.UZERO,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());

    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  }

};