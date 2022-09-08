import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Config {
    modules: ModuleConfig[];
}
export interface ModuleConfig {
    name: string;
    config: Any;
}
export declare const Config: {
    encode(message: Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Config;
    fromJSON(object: any): Config;
    toJSON(message: Config): unknown;
    fromPartial(object: DeepPartial<Config>): Config;
};
export declare const ModuleConfig: {
    encode(message: ModuleConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleConfig;
    fromJSON(object: any): ModuleConfig;
    toJSON(message: ModuleConfig): unknown;
    fromPartial(object: DeepPartial<ModuleConfig>): ModuleConfig;
};
