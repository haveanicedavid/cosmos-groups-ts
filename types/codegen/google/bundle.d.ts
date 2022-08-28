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
            encode(message: _98.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Http;
            fromJSON(object: any): _98.Http;
            toJSON(message: _98.Http): unknown;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _98.Http;
        };
        HttpRule: {
            encode(message: _98.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.HttpRule;
            fromJSON(object: any): _98.HttpRule;
            toJSON(message: _98.HttpRule): unknown;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _98.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _98.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.CustomHttpPattern;
            fromJSON(object: any): _98.CustomHttpPattern;
            toJSON(message: _98.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _98.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _105.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FieldMask;
            fromJSON(object: any): _105.FieldMask;
            toJSON(message: _105.FieldMask): unknown;
            fromPartial(object: {
                paths?: string[];
            }): _105.FieldMask;
        };
        DoubleValue: {
            encode(message: _104.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DoubleValue;
            fromJSON(object: any): _104.DoubleValue;
            toJSON(message: _104.DoubleValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _104.DoubleValue;
        };
        FloatValue: {
            encode(message: _104.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FloatValue;
            fromJSON(object: any): _104.FloatValue;
            toJSON(message: _104.FloatValue): unknown;
            fromPartial(object: {
                value?: number;
            }): _104.FloatValue;
        };
        Int64Value: {
            encode(message: _104.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Int64Value;
            fromJSON(object: any): _104.Int64Value;
            toJSON(message: _104.Int64Value): unknown;
            fromPartial(object: {
                value?: any;
            }): _104.Int64Value;
        };
        UInt64Value: {
            encode(message: _104.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UInt64Value;
            fromJSON(object: any): _104.UInt64Value;
            toJSON(message: _104.UInt64Value): unknown;
            fromPartial(object: {
                value?: any;
            }): _104.UInt64Value;
        };
        Int32Value: {
            encode(message: _104.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Int32Value;
            fromJSON(object: any): _104.Int32Value;
            toJSON(message: _104.Int32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _104.Int32Value;
        };
        UInt32Value: {
            encode(message: _104.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UInt32Value;
            fromJSON(object: any): _104.UInt32Value;
            toJSON(message: _104.UInt32Value): unknown;
            fromPartial(object: {
                value?: number;
            }): _104.UInt32Value;
        };
        BoolValue: {
            encode(message: _104.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BoolValue;
            fromJSON(object: any): _104.BoolValue;
            toJSON(message: _104.BoolValue): unknown;
            fromPartial(object: {
                value?: boolean;
            }): _104.BoolValue;
        };
        StringValue: {
            encode(message: _104.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.StringValue;
            fromJSON(object: any): _104.StringValue;
            toJSON(message: _104.StringValue): unknown;
            fromPartial(object: {
                value?: string;
            }): _104.StringValue;
        };
        BytesValue: {
            encode(message: _104.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BytesValue;
            fromJSON(object: any): _104.BytesValue;
            toJSON(message: _104.BytesValue): unknown;
            fromPartial(object: {
                value?: Uint8Array;
            }): _104.BytesValue;
        };
        nullValueFromJSON(object: any): _103.NullValue;
        nullValueToJSON(object: _103.NullValue): string;
        NullValue: typeof _103.NullValue;
        Struct_FieldsEntry: {
            encode(message: _103.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Struct_FieldsEntry;
            fromJSON(object: any): _103.Struct_FieldsEntry;
            toJSON(message: _103.Struct_FieldsEntry): unknown;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _103.NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                };
            }): _103.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _103.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Struct;
            fromJSON(object: any): _103.Struct;
            toJSON(message: _103.Struct): unknown;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _103.Struct;
        };
        Value: {
            encode(message: _103.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Value;
            fromJSON(object: any): _103.Value;
            toJSON(message: _103.Value): unknown;
            fromPartial(object: {
                nullValue?: _103.NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            }): _103.Value;
        };
        ListValue: {
            encode(message: _103.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ListValue;
            fromJSON(object: any): _103.ListValue;
            toJSON(message: _103.ListValue): unknown;
            fromPartial(object: {
                values?: any[];
            }): _103.ListValue;
        };
        Empty: {
            encode(_: _102.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Empty;
            fromJSON(_: any): _102.Empty;
            toJSON(_: _102.Empty): unknown;
            fromPartial(_: {}): _102.Empty;
        };
        Timestamp: {
            encode(message: _101.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Timestamp;
            fromJSON(object: any): _101.Timestamp;
            toJSON(message: _101.Timestamp): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _101.Timestamp;
        };
        Duration: {
            encode(message: _100.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Duration;
            fromJSON(object: any): _100.Duration;
            toJSON(message: _100.Duration): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _100.Duration;
        };
        Any: {
            encode(message: _99.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Any;
            fromJSON(object: any): _99.Any;
            toJSON(message: _99.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _99.Any;
        };
    };
}
