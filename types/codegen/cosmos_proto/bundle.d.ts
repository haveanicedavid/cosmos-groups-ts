import * as _0 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _0.ScalarType;
    scalarTypeToJSON(object: _0.ScalarType): string;
    ScalarType: typeof _0.ScalarType;
    InterfaceDescriptor: {
        encode(message: _0.InterfaceDescriptor, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): _0.InterfaceDescriptor;
        fromJSON(object: any): _0.InterfaceDescriptor;
        toJSON(message: _0.InterfaceDescriptor): unknown;
        fromPartial(object: DeepPartial<_0.InterfaceDescriptor>): _0.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _0.ScalarDescriptor, writer?: _m0.Writer): _m0.Writer;
        decode(input: any, length?: number): _0.ScalarDescriptor;
        fromJSON(object: any): _0.ScalarDescriptor;
        toJSON(message: _0.ScalarDescriptor): unknown;
        fromPartial(object: DeepPartial<_0.ScalarDescriptor>): _0.ScalarDescriptor;
    };
};
