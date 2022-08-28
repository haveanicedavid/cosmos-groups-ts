import * as _98 from "./api/http";
import * as _99 from "./protobuf/any";
import * as _100 from "./protobuf/duration";
import * as _101 from "./protobuf/timestamp";
import * as _102 from "./protobuf/empty";
import * as _103 from "./protobuf/struct";
import * as _104 from "./protobuf/wrappers";
import * as _105 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _98.Http, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _98.Http;
            fromJSON(object: any): _98.Http;
            toJSON(message: _98.Http): unknown;
            fromPartial(object: DeepPartial<_98.Http>): _98.Http;
        };
        HttpRule: {
            encode(message: _98.HttpRule, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _98.HttpRule;
            fromJSON(object: any): _98.HttpRule;
            toJSON(message: _98.HttpRule): unknown;
            fromPartial(object: DeepPartial<_98.HttpRule>): _98.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _98.CustomHttpPattern, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _98.CustomHttpPattern;
            fromJSON(object: any): _98.CustomHttpPattern;
            toJSON(message: _98.CustomHttpPattern): unknown;
            fromPartial(object: DeepPartial<_98.CustomHttpPattern>): _98.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _105.FieldMask, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _105.FieldMask;
            fromJSON(object: any): _105.FieldMask;
            toJSON(message: _105.FieldMask): unknown;
            fromPartial(object: DeepPartial<_105.FieldMask>): _105.FieldMask;
        };
        DoubleValue: {
            encode(message: _104.DoubleValue, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.DoubleValue;
            fromJSON(object: any): _104.DoubleValue;
            toJSON(message: _104.DoubleValue): unknown;
            fromPartial(object: DeepPartial<_104.DoubleValue>): _104.DoubleValue;
        };
        FloatValue: {
            encode(message: _104.FloatValue, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.FloatValue;
            fromJSON(object: any): _104.FloatValue;
            toJSON(message: _104.FloatValue): unknown;
            fromPartial(object: DeepPartial<_104.FloatValue>): _104.FloatValue;
        };
        Int64Value: {
            encode(message: _104.Int64Value, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.Int64Value;
            fromJSON(object: any): _104.Int64Value;
            toJSON(message: _104.Int64Value): unknown;
            fromPartial(object: DeepPartial<_104.Int64Value>): _104.Int64Value;
        };
        UInt64Value: {
            encode(message: _104.UInt64Value, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.UInt64Value;
            fromJSON(object: any): _104.UInt64Value;
            toJSON(message: _104.UInt64Value): unknown;
            fromPartial(object: DeepPartial<_104.UInt64Value>): _104.UInt64Value;
        };
        Int32Value: {
            encode(message: _104.Int32Value, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.Int32Value;
            fromJSON(object: any): _104.Int32Value;
            toJSON(message: _104.Int32Value): unknown;
            fromPartial(object: DeepPartial<_104.Int32Value>): _104.Int32Value;
        };
        UInt32Value: {
            encode(message: _104.UInt32Value, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.UInt32Value;
            fromJSON(object: any): _104.UInt32Value;
            toJSON(message: _104.UInt32Value): unknown;
            fromPartial(object: DeepPartial<_104.UInt32Value>): _104.UInt32Value;
        };
        BoolValue: {
            encode(message: _104.BoolValue, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.BoolValue;
            fromJSON(object: any): _104.BoolValue;
            toJSON(message: _104.BoolValue): unknown;
            fromPartial(object: DeepPartial<_104.BoolValue>): _104.BoolValue;
        };
        StringValue: {
            encode(message: _104.StringValue, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.StringValue;
            fromJSON(object: any): _104.StringValue;
            toJSON(message: _104.StringValue): unknown;
            fromPartial(object: DeepPartial<_104.StringValue>): _104.StringValue;
        };
        BytesValue: {
            encode(message: _104.BytesValue, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _104.BytesValue;
            fromJSON(object: any): _104.BytesValue;
            toJSON(message: _104.BytesValue): unknown;
            fromPartial(object: DeepPartial<_104.BytesValue>): _104.BytesValue;
        };
        nullValueFromJSON(object: any): _103.NullValue;
        nullValueToJSON(object: _103.NullValue): string;
        NullValue: typeof _103.NullValue;
        Struct_FieldsEntry: {
            encode(message: _103.Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _103.Struct_FieldsEntry;
            fromJSON(object: any): _103.Struct_FieldsEntry;
            toJSON(message: _103.Struct_FieldsEntry): unknown;
            fromPartial(object: DeepPartial<_103.Struct_FieldsEntry>): _103.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _103.Struct, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _103.Struct;
            fromJSON(object: any): _103.Struct;
            toJSON(message: _103.Struct): unknown;
            fromPartial(object: DeepPartial<_103.Struct>): _103.Struct;
        };
        Value: {
            encode(message: _103.Value, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _103.Value;
            fromJSON(object: any): _103.Value;
            toJSON(message: _103.Value): unknown;
            fromPartial(object: DeepPartial<_103.Value>): _103.Value;
        };
        ListValue: {
            encode(message: _103.ListValue, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _103.ListValue;
            fromJSON(object: any): _103.ListValue;
            toJSON(message: _103.ListValue): unknown;
            fromPartial(object: DeepPartial<_103.ListValue>): _103.ListValue;
        };
        Empty: {
            encode(_: _102.Empty, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _102.Empty;
            fromJSON(_: any): _102.Empty;
            toJSON(_: _102.Empty): unknown;
            fromPartial(_: DeepPartial<_102.Empty>): _102.Empty;
        };
        Timestamp: {
            encode(message: _101.Timestamp, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _101.Timestamp;
            fromJSON(object: any): _101.Timestamp;
            toJSON(message: _101.Timestamp): unknown;
            fromPartial(object: DeepPartial<_101.Timestamp>): _101.Timestamp;
        };
        Duration: {
            encode(message: _100.Duration, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _100.Duration;
            fromJSON(object: any): _100.Duration;
            toJSON(message: _100.Duration): unknown;
            fromPartial(object: DeepPartial<_100.Duration>): _100.Duration;
        };
        Any: {
            encode(message: _99.Any, writer?: _m0.Writer): _m0.Writer;
            decode(input: any, length?: number): _99.Any;
            fromJSON(object: any): _99.Any;
            toJSON(message: _99.Any): unknown;
            fromPartial(object: DeepPartial<_99.Any>): _99.Any;
        };
    };
}
