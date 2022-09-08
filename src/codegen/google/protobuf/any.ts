import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface Any {
  type_url: string;
  value: Uint8Array;
}

function createBaseAny(): Any {
  return {
    type_url: "",
    value: new Uint8Array()
  };
}

export const Any = {
  encode(message: Any, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type_url !== "") {
      writer.uint32(10).string(message.type_url);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Any {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAny();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type_url = reader.string();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Any {
    return {
      type_url: isSet(object.type_url) ? String(object.type_url) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: Any): unknown {
    const obj: any = {};
    message.type_url !== undefined && (obj.type_url = message.type_url);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Any>): Any {
    const message = createBaseAny();
    message.type_url = object.type_url ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};