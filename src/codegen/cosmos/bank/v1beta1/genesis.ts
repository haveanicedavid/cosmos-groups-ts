import { Params, Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
  params: Params;
  balances: Balance[];
  supply: Coin[];
  denom_metadata: Metadata[];
}
export interface Balance {
  address: string;
  coins: Coin[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    balances: [],
    supply: [],
    denom_metadata: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.denom_metadata) {
      Metadata.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;

        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.denom_metadata.push(Metadata.decode(reader, reader.uint32()));
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
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : [],
      denom_metadata: Array.isArray(object?.denom_metadata) ? object.denom_metadata.map((e: any) => Metadata.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supply = [];
    }

    if (message.denom_metadata) {
      obj.denom_metadata = message.denom_metadata.map(e => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.denom_metadata = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.denom_metadata = object.denom_metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBalance(): Balance {
  return {
    address: "",
    coins: []
  };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Balance {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};