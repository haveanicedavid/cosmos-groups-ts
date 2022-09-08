import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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
export declare const TableDescriptor: {
    encode(message: TableDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableDescriptor;
    fromJSON(object: any): TableDescriptor;
    toJSON(message: TableDescriptor): unknown;
    fromPartial(object: DeepPartial<TableDescriptor>): TableDescriptor;
};
export declare const PrimaryKeyDescriptor: {
    encode(message: PrimaryKeyDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKeyDescriptor;
    fromJSON(object: any): PrimaryKeyDescriptor;
    toJSON(message: PrimaryKeyDescriptor): unknown;
    fromPartial(object: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor;
};
export declare const SecondaryIndexDescriptor: {
    encode(message: SecondaryIndexDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryIndexDescriptor;
    fromJSON(object: any): SecondaryIndexDescriptor;
    toJSON(message: SecondaryIndexDescriptor): unknown;
    fromPartial(object: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor;
};
export declare const SingletonDescriptor: {
    encode(message: SingletonDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SingletonDescriptor;
    fromJSON(object: any): SingletonDescriptor;
    toJSON(message: SingletonDescriptor): unknown;
    fromPartial(object: DeepPartial<SingletonDescriptor>): SingletonDescriptor;
};
