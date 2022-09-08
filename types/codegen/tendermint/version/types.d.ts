import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface App {
    protocol: Long;
    software: string;
}
export interface Consensus {
    block: Long;
    app: Long;
}
export declare const App: {
    encode(message: App, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): App;
    fromJSON(object: any): App;
    toJSON(message: App): unknown;
    fromPartial(object: DeepPartial<App>): App;
};
export declare const Consensus: {
    encode(message: Consensus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Consensus;
    fromJSON(object: any): Consensus;
    toJSON(message: Consensus): unknown;
    fromPartial(object: DeepPartial<Consensus>): Consensus;
};
