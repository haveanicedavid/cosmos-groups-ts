import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface PubKey {
  key: Uint8Array;
}
export interface PrivKey {
  key: Uint8Array;
}

function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}

export const PubKey = {
  encode(message: PubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PubKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },

  toJSON(message: PubKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }

};

function createBasePrivKey(): PrivKey {
  return {
    key: new Uint8Array()
  };
}

export const PrivKey = {
  encode(message: PrivKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PrivKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },

  toJSON(message: PrivKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }

};