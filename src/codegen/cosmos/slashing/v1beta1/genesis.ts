import { Params, ValidatorSigningInfo } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState {
  params: Params;
  signing_infos: SigningInfo[];
  missed_blocks: ValidatorMissedBlocks[];
}
export interface SigningInfo {
  address: string;
  validator_signing_info: ValidatorSigningInfo;
}
export interface ValidatorMissedBlocks {
  address: string;
  missed_blocks: MissedBlock[];
}
export interface MissedBlock {
  index: Long;
  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    signing_infos: [],
    missed_blocks: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.signing_infos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.missed_blocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
          break;

        case 3:
          message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      signing_infos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromJSON(e)) : [],
      missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.signing_infos) {
      obj.signing_infos = message.signing_infos.map(e => e ? SigningInfo.toJSON(e) : undefined);
    } else {
      obj.signing_infos = [];
    }

    if (message.missed_blocks) {
      obj.missed_blocks = message.missed_blocks.map(e => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signing_infos = object.signing_infos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missed_blocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validator_signing_info: undefined
  };
}

export const SigningInfo = {
  encode(message: SigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.validator_signing_info !== undefined) {
      ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      validator_signing_info: isSet(object.validator_signing_info) ? ValidatorSigningInfo.fromJSON(object.validator_signing_info) : undefined
    };
  },

  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.validator_signing_info !== undefined && (obj.validator_signing_info = message.validator_signing_info ? ValidatorSigningInfo.toJSON(message.validator_signing_info) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validator_signing_info = object.validator_signing_info !== undefined && object.validator_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.validator_signing_info) : undefined;
    return message;
  }

};

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missed_blocks: []
  };
}

export const ValidatorMissedBlocks = {
  encode(message: ValidatorMissedBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.missed_blocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => MissedBlock.fromJSON(e)) : []
    };
  },

  toJSON(message: ValidatorMissedBlocks): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.missed_blocks) {
      obj.missed_blocks = message.missed_blocks.map(e => e ? MissedBlock.toJSON(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missed_blocks = object.missed_blocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMissedBlock(): MissedBlock {
  return {
    index: Long.ZERO,
    missed: false
  };
}

export const MissedBlock = {
  encode(message: MissedBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }

    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.int64() as Long);
          break;

        case 2:
          message.missed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? Long.fromString(object.index) : Long.ZERO,
      missed: isSet(object.missed) ? Boolean(object.missed) : false
    };
  },

  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
    message.missed !== undefined && (obj.missed = message.missed);
    return obj;
  },

  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.missed = object.missed ?? false;
    return message;
  }

};