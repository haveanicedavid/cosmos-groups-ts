import * as _106 from "./abci/types";
import * as _107 from "./crypto/keys";
import * as _108 from "./crypto/proof";
import * as _109 from "./libs/bits/types";
import * as _110 from "./p2p/types";
import * as _111 from "./types/block";
import * as _112 from "./types/evidence";
import * as _113 from "./types/params";
import * as _114 from "./types/types";
import * as _115 from "./types/validator";
import * as _116 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _106.CheckTxType;
        checkTxTypeToJSON(object: _106.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _106.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _106.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _106.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _106.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _106.EvidenceType;
        evidenceTypeToJSON(object: _106.EvidenceType): string;
        CheckTxType: typeof _106.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _106.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _106.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _106.EvidenceType;
        Request: {
            encode(message: _106.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Request;
            fromJSON(object: any): _106.Request;
            toJSON(message: _106.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    block_version?: any;
                    p2p_version?: any;
                };
                set_option?: {
                    key?: string;
                    value?: string;
                };
                init_chain?: {
                    time?: Date;
                    chain_id?: string;
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_state_bytes?: Uint8Array;
                    initial_height?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                begin_block?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    last_commit_info?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signed_last_block?: boolean;
                        }[];
                    };
                    byzantine_validators?: {
                        type?: _106.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        total_voting_power?: any;
                    }[];
                };
                check_tx?: {
                    tx?: Uint8Array;
                    type?: _106.CheckTxType;
                };
                deliver_tx?: {
                    tx?: Uint8Array;
                };
                end_block?: {
                    height?: any;
                };
                commit?: {};
                list_snapshots?: {};
                offer_snapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    app_hash?: Uint8Array;
                };
                load_snapshot_chunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                apply_snapshot_chunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _106.Request;
        };
        RequestEcho: {
            encode(message: _106.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestEcho;
            fromJSON(object: any): _106.RequestEcho;
            toJSON(message: _106.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _106.RequestEcho;
        };
        RequestFlush: {
            encode(_: _106.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestFlush;
            fromJSON(_: any): _106.RequestFlush;
            toJSON(_: _106.RequestFlush): unknown;
            fromPartial(_: {}): _106.RequestFlush;
        };
        RequestInfo: {
            encode(message: _106.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestInfo;
            fromJSON(object: any): _106.RequestInfo;
            toJSON(message: _106.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                block_version?: any;
                p2p_version?: any;
            }): _106.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _106.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestSetOption;
            fromJSON(object: any): _106.RequestSetOption;
            toJSON(message: _106.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _106.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _106.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestInitChain;
            fromJSON(object: any): _106.RequestInitChain;
            toJSON(message: _106.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chain_id?: string;
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_state_bytes?: Uint8Array;
                initial_height?: any;
            }): _106.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _106.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestQuery;
            fromJSON(object: any): _106.RequestQuery;
            toJSON(message: _106.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _106.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _106.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestBeginBlock;
            fromJSON(object: any): _106.RequestBeginBlock;
            toJSON(message: _106.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                last_commit_info?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signed_last_block?: boolean;
                    }[];
                };
                byzantine_validators?: {
                    type?: _106.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    total_voting_power?: any;
                }[];
            }): _106.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _106.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestCheckTx;
            fromJSON(object: any): _106.RequestCheckTx;
            toJSON(message: _106.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _106.CheckTxType;
            }): _106.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _106.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestDeliverTx;
            fromJSON(object: any): _106.RequestDeliverTx;
            toJSON(message: _106.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _106.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _106.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestEndBlock;
            fromJSON(object: any): _106.RequestEndBlock;
            toJSON(message: _106.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: any;
            }): _106.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _106.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestCommit;
            fromJSON(_: any): _106.RequestCommit;
            toJSON(_: _106.RequestCommit): unknown;
            fromPartial(_: {}): _106.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _106.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestListSnapshots;
            fromJSON(_: any): _106.RequestListSnapshots;
            toJSON(_: _106.RequestListSnapshots): unknown;
            fromPartial(_: {}): _106.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _106.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestOfferSnapshot;
            fromJSON(object: any): _106.RequestOfferSnapshot;
            toJSON(message: _106.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                app_hash?: Uint8Array;
            }): _106.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _106.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestLoadSnapshotChunk;
            fromJSON(object: any): _106.RequestLoadSnapshotChunk;
            toJSON(message: _106.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _106.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _106.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.RequestApplySnapshotChunk;
            fromJSON(object: any): _106.RequestApplySnapshotChunk;
            toJSON(message: _106.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _106.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _106.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Response;
            fromJSON(object: any): _106.Response;
            toJSON(message: _106.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    app_version?: any;
                    last_block_height?: any;
                    last_block_app_hash?: Uint8Array;
                };
                set_option?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                init_chain?: {
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_hash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proof_ops?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                check_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliver_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                end_block?: {
                    validator_updates?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensus_param_updates?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retain_height?: any;
                };
                list_snapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offer_snapshot?: {
                    result?: _106.ResponseOfferSnapshot_Result;
                };
                load_snapshot_chunk?: {
                    chunk?: Uint8Array;
                };
                apply_snapshot_chunk?: {
                    result?: _106.ResponseApplySnapshotChunk_Result;
                    refetch_chunks?: number[];
                    reject_senders?: string[];
                };
            }): _106.Response;
        };
        ResponseException: {
            encode(message: _106.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseException;
            fromJSON(object: any): _106.ResponseException;
            toJSON(message: _106.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _106.ResponseException;
        };
        ResponseEcho: {
            encode(message: _106.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseEcho;
            fromJSON(object: any): _106.ResponseEcho;
            toJSON(message: _106.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _106.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _106.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseFlush;
            fromJSON(_: any): _106.ResponseFlush;
            toJSON(_: _106.ResponseFlush): unknown;
            fromPartial(_: {}): _106.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _106.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseInfo;
            fromJSON(object: any): _106.ResponseInfo;
            toJSON(message: _106.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                app_version?: any;
                last_block_height?: any;
                last_block_app_hash?: Uint8Array;
            }): _106.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _106.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseSetOption;
            fromJSON(object: any): _106.ResponseSetOption;
            toJSON(message: _106.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _106.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _106.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseInitChain;
            fromJSON(object: any): _106.ResponseInitChain;
            toJSON(message: _106.ResponseInitChain): unknown;
            fromPartial(object: {
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_hash?: Uint8Array;
            }): _106.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _106.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseQuery;
            fromJSON(object: any): _106.ResponseQuery;
            toJSON(message: _106.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proof_ops?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _106.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _106.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseBeginBlock;
            fromJSON(object: any): _106.ResponseBeginBlock;
            toJSON(message: _106.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _106.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _106.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseCheckTx;
            fromJSON(object: any): _106.ResponseCheckTx;
            toJSON(message: _106.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _106.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _106.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseDeliverTx;
            fromJSON(object: any): _106.ResponseDeliverTx;
            toJSON(message: _106.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _106.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _106.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseEndBlock;
            fromJSON(object: any): _106.ResponseEndBlock;
            toJSON(message: _106.ResponseEndBlock): unknown;
            fromPartial(object: {
                validator_updates?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensus_param_updates?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _106.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _106.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseCommit;
            fromJSON(object: any): _106.ResponseCommit;
            toJSON(message: _106.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retain_height?: any;
            }): _106.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _106.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseListSnapshots;
            fromJSON(object: any): _106.ResponseListSnapshots;
            toJSON(message: _106.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _106.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _106.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseOfferSnapshot;
            fromJSON(object: any): _106.ResponseOfferSnapshot;
            toJSON(message: _106.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _106.ResponseOfferSnapshot_Result;
            }): _106.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _106.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _106.ResponseLoadSnapshotChunk;
            toJSON(message: _106.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _106.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _106.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ResponseApplySnapshotChunk;
            fromJSON(object: any): _106.ResponseApplySnapshotChunk;
            toJSON(message: _106.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _106.ResponseApplySnapshotChunk_Result;
                refetch_chunks?: number[];
                reject_senders?: string[];
            }): _106.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _106.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ConsensusParams;
            fromJSON(object: any): _106.ConsensusParams;
            toJSON(message: _106.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _106.ConsensusParams;
        };
        BlockParams: {
            encode(message: _106.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BlockParams;
            fromJSON(object: any): _106.BlockParams;
            toJSON(message: _106.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
            }): _106.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _106.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.LastCommitInfo;
            fromJSON(object: any): _106.LastCommitInfo;
            toJSON(message: _106.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signed_last_block?: boolean;
                }[];
            }): _106.LastCommitInfo;
        };
        Event: {
            encode(message: _106.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Event;
            fromJSON(object: any): _106.Event;
            toJSON(message: _106.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _106.Event;
        };
        EventAttribute: {
            encode(message: _106.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventAttribute;
            fromJSON(object: any): _106.EventAttribute;
            toJSON(message: _106.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _106.EventAttribute;
        };
        TxResult: {
            encode(message: _106.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.TxResult;
            fromJSON(object: any): _106.TxResult;
            toJSON(message: _106.TxResult): unknown;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _106.TxResult;
        };
        Validator: {
            encode(message: _106.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Validator;
            fromJSON(object: any): _106.Validator;
            toJSON(message: _106.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _106.Validator;
        };
        ValidatorUpdate: {
            encode(message: _106.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorUpdate;
            fromJSON(object: any): _106.ValidatorUpdate;
            toJSON(message: _106.ValidatorUpdate): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _106.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _106.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.VoteInfo;
            fromJSON(object: any): _106.VoteInfo;
            toJSON(message: _106.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signed_last_block?: boolean;
            }): _106.VoteInfo;
        };
        Evidence: {
            encode(message: _106.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Evidence;
            fromJSON(object: any): _106.Evidence;
            toJSON(message: _106.Evidence): unknown;
            fromPartial(object: {
                type?: _106.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                total_voting_power?: any;
            }): _106.Evidence;
        };
        Snapshot: {
            encode(message: _106.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Snapshot;
            fromJSON(object: any): _106.Snapshot;
            toJSON(message: _106.Snapshot): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _106.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _108.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Proof;
            fromJSON(object: any): _108.Proof;
            toJSON(message: _108.Proof): unknown;
            fromPartial(object: {
                total?: any;
                index?: any;
                leaf_hash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _108.Proof;
        };
        ValueOp: {
            encode(message: _108.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ValueOp;
            fromJSON(object: any): _108.ValueOp;
            toJSON(message: _108.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _108.ValueOp;
        };
        DominoOp: {
            encode(message: _108.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DominoOp;
            fromJSON(object: any): _108.DominoOp;
            toJSON(message: _108.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _108.DominoOp;
        };
        ProofOp: {
            encode(message: _108.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProofOp;
            fromJSON(object: any): _108.ProofOp;
            toJSON(message: _108.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _108.ProofOp;
        };
        ProofOps: {
            encode(message: _108.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ProofOps;
            fromJSON(object: any): _108.ProofOps;
            toJSON(message: _108.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _108.ProofOps;
        };
        PublicKey: {
            encode(message: _107.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PublicKey;
            fromJSON(object: any): _107.PublicKey;
            toJSON(message: _107.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _107.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _109.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BitArray;
                fromJSON(object: any): _109.BitArray;
                toJSON(message: _109.BitArray): unknown;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _109.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _110.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.NetAddress;
            fromJSON(object: any): _110.NetAddress;
            toJSON(message: _110.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _110.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _110.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ProtocolVersion;
            fromJSON(object: any): _110.ProtocolVersion;
            toJSON(message: _110.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _110.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _110.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DefaultNodeInfo;
            fromJSON(object: any): _110.DefaultNodeInfo;
            toJSON(message: _110.DefaultNodeInfo): unknown;
            fromPartial(object: {
                protocol_version?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                default_node_id?: string;
                listen_addr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    tx_index?: string;
                    rpc_address?: string;
                };
            }): _110.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _110.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DefaultNodeInfoOther;
            fromJSON(object: any): _110.DefaultNodeInfoOther;
            toJSON(message: _110.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                tx_index?: string;
                rpc_address?: string;
            }): _110.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _115.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ValidatorSet;
            fromJSON(object: any): _115.ValidatorSet;
            toJSON(message: _115.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                };
                total_voting_power?: any;
            }): _115.ValidatorSet;
        };
        Validator: {
            encode(message: _115.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Validator;
            fromJSON(object: any): _115.Validator;
            toJSON(message: _115.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
                proposer_priority?: any;
            }): _115.Validator;
        };
        SimpleValidator: {
            encode(message: _115.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SimpleValidator;
            fromJSON(object: any): _115.SimpleValidator;
            toJSON(message: _115.SimpleValidator): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
            }): _115.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _114.BlockIDFlag;
        blockIDFlagToJSON(object: _114.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _114.SignedMsgType;
        signedMsgTypeToJSON(object: _114.SignedMsgType): string;
        BlockIDFlag: typeof _114.BlockIDFlag;
        SignedMsgType: typeof _114.SignedMsgType;
        PartSetHeader: {
            encode(message: _114.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PartSetHeader;
            fromJSON(object: any): _114.PartSetHeader;
            toJSON(message: _114.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _114.PartSetHeader;
        };
        Part: {
            encode(message: _114.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Part;
            fromJSON(object: any): _114.Part;
            toJSON(message: _114.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _114.Part;
        };
        BlockID: {
            encode(message: _114.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockID;
            fromJSON(object: any): _114.BlockID;
            toJSON(message: _114.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _114.BlockID;
        };
        Header: {
            encode(message: _114.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Header;
            fromJSON(object: any): _114.Header;
            toJSON(message: _114.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chain_id?: string;
                height?: any;
                time?: Date;
                last_block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                last_commit_hash?: Uint8Array;
                data_hash?: Uint8Array;
                validators_hash?: Uint8Array;
                next_validators_hash?: Uint8Array;
                consensus_hash?: Uint8Array;
                app_hash?: Uint8Array;
                last_results_hash?: Uint8Array;
                evidence_hash?: Uint8Array;
                proposer_address?: Uint8Array;
            }): _114.Header;
        };
        Data: {
            encode(message: _114.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Data;
            fromJSON(object: any): _114.Data;
            toJSON(message: _114.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _114.Data;
        };
        Vote: {
            encode(message: _114.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Vote;
            fromJSON(object: any): _114.Vote;
            toJSON(message: _114.Vote): unknown;
            fromPartial(object: {
                type?: _114.SignedMsgType;
                height?: any;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validator_address?: Uint8Array;
                validator_index?: number;
                signature?: Uint8Array;
            }): _114.Vote;
        };
        Commit: {
            encode(message: _114.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Commit;
            fromJSON(object: any): _114.Commit;
            toJSON(message: _114.Commit): unknown;
            fromPartial(object: {
                height?: any;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    block_id_flag?: _114.BlockIDFlag;
                    validator_address?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _114.Commit;
        };
        CommitSig: {
            encode(message: _114.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CommitSig;
            fromJSON(object: any): _114.CommitSig;
            toJSON(message: _114.CommitSig): unknown;
            fromPartial(object: {
                block_id_flag?: _114.BlockIDFlag;
                validator_address?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _114.CommitSig;
        };
        Proposal: {
            encode(message: _114.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Proposal;
            fromJSON(object: any): _114.Proposal;
            toJSON(message: _114.Proposal): unknown;
            fromPartial(object: {
                type?: _114.SignedMsgType;
                height?: any;
                round?: number;
                pol_round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _114.Proposal;
        };
        SignedHeader: {
            encode(message: _114.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.SignedHeader;
            fromJSON(object: any): _114.SignedHeader;
            toJSON(message: _114.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _114.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _114.SignedHeader;
        };
        LightBlock: {
            encode(message: _114.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LightBlock;
            fromJSON(object: any): _114.LightBlock;
            toJSON(message: _114.LightBlock): unknown;
            fromPartial(object: {
                signed_header?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            block_id_flag?: _114.BlockIDFlag;
                            validator_address?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validator_set?: {
                    validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    };
                    total_voting_power?: any;
                };
            }): _114.LightBlock;
        };
        BlockMeta: {
            encode(message: _114.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.BlockMeta;
            fromJSON(object: any): _114.BlockMeta;
            toJSON(message: _114.BlockMeta): unknown;
            fromPartial(object: {
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                block_size?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                num_txs?: any;
            }): _114.BlockMeta;
        };
        TxProof: {
            encode(message: _114.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.TxProof;
            fromJSON(object: any): _114.TxProof;
            toJSON(message: _114.TxProof): unknown;
            fromPartial(object: {
                root_hash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _114.TxProof;
        };
        ConsensusParams: {
            encode(message: _113.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ConsensusParams;
            fromJSON(object: any): _113.ConsensusParams;
            toJSON(message: _113.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                    time_iota_ms?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _113.ConsensusParams;
        };
        BlockParams: {
            encode(message: _113.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.BlockParams;
            fromJSON(object: any): _113.BlockParams;
            toJSON(message: _113.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
                time_iota_ms?: any;
            }): _113.BlockParams;
        };
        EvidenceParams: {
            encode(message: _113.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EvidenceParams;
            fromJSON(object: any): _113.EvidenceParams;
            toJSON(message: _113.EvidenceParams): unknown;
            fromPartial(object: {
                max_age_num_blocks?: any;
                max_age_duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                max_bytes?: any;
            }): _113.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _113.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.ValidatorParams;
            fromJSON(object: any): _113.ValidatorParams;
            toJSON(message: _113.ValidatorParams): unknown;
            fromPartial(object: {
                pub_key_types?: string[];
            }): _113.ValidatorParams;
        };
        VersionParams: {
            encode(message: _113.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.VersionParams;
            fromJSON(object: any): _113.VersionParams;
            toJSON(message: _113.VersionParams): unknown;
            fromPartial(object: {
                app_version?: any;
            }): _113.VersionParams;
        };
        HashedParams: {
            encode(message: _113.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.HashedParams;
            fromJSON(object: any): _113.HashedParams;
            toJSON(message: _113.HashedParams): unknown;
            fromPartial(object: {
                block_max_bytes?: any;
                block_max_gas?: any;
            }): _113.HashedParams;
        };
        Evidence: {
            encode(message: _112.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Evidence;
            fromJSON(object: any): _112.Evidence;
            toJSON(message: _112.Evidence): unknown;
            fromPartial(object: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: _114.SignedMsgType;
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    vote_b?: {
                        type?: _114.SignedMsgType;
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    total_voting_power?: any;
                    validator_power?: any;
                    timestamp?: Date;
                };
                light_client_attack_evidence?: {
                    conflicting_block?: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: _114.BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validator_set?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                    };
                    common_height?: any;
                    byzantine_validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }[];
                    total_voting_power?: any;
                    timestamp?: Date;
                };
            }): _112.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _112.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DuplicateVoteEvidence;
            fromJSON(object: any): _112.DuplicateVoteEvidence;
            toJSON(message: _112.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                vote_a?: {
                    type?: _114.SignedMsgType;
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                vote_b?: {
                    type?: _114.SignedMsgType;
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                total_voting_power?: any;
                validator_power?: any;
                timestamp?: Date;
            }): _112.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _112.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.LightClientAttackEvidence;
            fromJSON(object: any): _112.LightClientAttackEvidence;
            toJSON(message: _112.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflicting_block?: {
                    signed_header?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chain_id?: string;
                            height?: any;
                            time?: Date;
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: _114.BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validator_set?: {
                        validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        };
                        total_voting_power?: any;
                    };
                };
                common_height?: any;
                byzantine_validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                }[];
                total_voting_power?: any;
                timestamp?: Date;
            }): _112.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _112.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EvidenceList;
            fromJSON(object: any): _112.EvidenceList;
            toJSON(message: _112.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: _114.SignedMsgType;
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        vote_b?: {
                            type?: _114.SignedMsgType;
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        total_voting_power?: any;
                        validator_power?: any;
                        timestamp?: Date;
                    };
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: _114.BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                        common_height?: any;
                        byzantine_validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        total_voting_power?: any;
                        timestamp?: Date;
                    };
                }[];
            }): _112.EvidenceList;
        };
        Block: {
            encode(message: _111.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Block;
            fromJSON(object: any): _111.Block;
            toJSON(message: _111.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicate_vote_evidence?: {
                            vote_a?: {
                                type?: _114.SignedMsgType;
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            vote_b?: {
                                type?: _114.SignedMsgType;
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            total_voting_power?: any;
                            validator_power?: any;
                            timestamp?: Date;
                        };
                        light_client_attack_evidence?: {
                            conflicting_block?: {
                                signed_header?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chain_id?: string;
                                        height?: any;
                                        time?: Date;
                                        last_block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        last_commit_hash?: Uint8Array;
                                        data_hash?: Uint8Array;
                                        validators_hash?: Uint8Array;
                                        next_validators_hash?: Uint8Array;
                                        consensus_hash?: Uint8Array;
                                        app_hash?: Uint8Array;
                                        last_results_hash?: Uint8Array;
                                        evidence_hash?: Uint8Array;
                                        proposer_address?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            block_id_flag?: _114.BlockIDFlag;
                                            validator_address?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validator_set?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    };
                                    total_voting_power?: any;
                                };
                            };
                            common_height?: any;
                            byzantine_validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            total_voting_power?: any;
                            timestamp?: Date;
                        };
                    }[];
                };
                last_commit?: {
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _114.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _111.Block;
        };
    };
    const version: {
        App: {
            encode(message: _116.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.App;
            fromJSON(object: any): _116.App;
            toJSON(message: _116.App): unknown;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _116.App;
        };
        Consensus: {
            encode(message: _116.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Consensus;
            fromJSON(object: any): _116.Consensus;
            toJSON(message: _116.Consensus): unknown;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _116.Consensus;
        };
    };
}
