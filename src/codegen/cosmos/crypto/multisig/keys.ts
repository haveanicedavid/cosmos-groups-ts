import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface LegacyAminoPubKey {
  threshold: number;
  public_keys: Any[];
}

function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
  return {
    threshold: 0,
    public_keys: []
  };
}

export const LegacyAminoPubKey = {
  encode(message: LegacyAminoPubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }

    for (const v of message.public_keys) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAminoPubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.uint32();
          break;

        case 2:
          message.public_keys.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LegacyAminoPubKey {
    return {
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
      public_keys: Array.isArray(object?.public_keys) ? object.public_keys.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: LegacyAminoPubKey): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));

    if (message.public_keys) {
      obj.public_keys = message.public_keys.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.public_keys = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<LegacyAminoPubKey>): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.public_keys = object.public_keys?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};