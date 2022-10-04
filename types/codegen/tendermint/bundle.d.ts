import * as _103 from "./abci/types";
import * as _104 from "./crypto/keys";
import * as _105 from "./crypto/proof";
import * as _106 from "./libs/bits/types";
import * as _107 from "./p2p/types";
import * as _108 from "./types/block";
import * as _109 from "./types/evidence";
import * as _110 from "./types/params";
import * as _111 from "./types/types";
import * as _112 from "./types/validator";
import * as _113 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _103.CheckTxType;
        checkTxTypeToJSON(object: _103.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _103.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _103.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _103.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _103.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _103.EvidenceType;
        evidenceTypeToJSON(object: _103.EvidenceType): string;
        CheckTxType: typeof _103.CheckTxType;
        CheckTxTypeSDKType: typeof _103.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _103.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _103.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _103.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _103.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _103.EvidenceType;
        EvidenceTypeSDKType: typeof _103.EvidenceTypeSDKType;
        Request: {
            encode(message: _103.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _103.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _103.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _103.Request;
        };
        RequestEcho: {
            encode(message: _103.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _103.RequestEcho;
        };
        RequestFlush: {
            encode(_: _103.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestFlush;
            fromPartial(_: {}): _103.RequestFlush;
        };
        RequestInfo: {
            encode(message: _103.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            }): _103.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _103.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _103.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _103.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            }): _103.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _103.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _103.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _103.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _103.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[];
            }): _103.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _103.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _103.CheckTxType;
            }): _103.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _103.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _103.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _103.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestEndBlock;
            fromPartial(object: {
                height?: any;
            }): _103.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _103.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestCommit;
            fromPartial(_: {}): _103.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _103.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestListSnapshots;
            fromPartial(_: {}): _103.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _103.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _103.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _103.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _103.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _103.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _103.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _103.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Response;
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
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
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
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
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
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
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
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _103.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _103.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _103.Response;
        };
        ResponseException: {
            encode(message: _103.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _103.ResponseException;
        };
        ResponseEcho: {
            encode(message: _103.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _103.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _103.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseFlush;
            fromPartial(_: {}): _103.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _103.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            }): _103.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _103.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _103.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _103.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            }): _103.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _103.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _103.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _103.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _103.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _103.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _103.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _103.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _103.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _103.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
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
            }): _103.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _103.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: any;
            }): _103.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _103.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _103.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _103.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _103.ResponseOfferSnapshot_Result;
            }): _103.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _103.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _103.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _103.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _103.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _103.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _103.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _103.ConsensusParams;
        };
        BlockParams: {
            encode(message: _103.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BlockParams;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
            }): _103.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _103.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _103.LastCommitInfo;
        };
        Event: {
            encode(message: _103.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _103.Event;
        };
        EventAttribute: {
            encode(message: _103.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _103.EventAttribute;
        };
        TxResult: {
            encode(message: _103.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.TxResult;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
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
            }): _103.TxResult;
        };
        Validator: {
            encode(message: _103.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _103.Validator;
        };
        ValidatorUpdate: {
            encode(message: _103.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _103.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _103.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }): _103.VoteInfo;
        };
        Evidence: {
            encode(message: _103.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Evidence;
            fromPartial(object: {
                type?: _103.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }): _103.Evidence;
        };
        Snapshot: {
            encode(message: _103.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Snapshot;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _103.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _105.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Proof;
            fromPartial(object: {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _105.Proof;
        };
        ValueOp: {
            encode(message: _105.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _105.ValueOp;
        };
        DominoOp: {
            encode(message: _105.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _105.DominoOp;
        };
        ProofOp: {
            encode(message: _105.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _105.ProofOp;
        };
        ProofOps: {
            encode(message: _105.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _105.ProofOps;
        };
        PublicKey: {
            encode(message: _104.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _104.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _106.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.BitArray;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _106.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _107.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _107.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _107.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ProtocolVersion;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _107.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _107.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DefaultNodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _107.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _107.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _107.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _112.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ValidatorSet;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                };
                totalVotingPower?: any;
            }): _112.ValidatorSet;
        };
        Validator: {
            encode(message: _112.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            }): _112.Validator;
        };
        SimpleValidator: {
            encode(message: _112.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            }): _112.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _111.BlockIDFlag;
        blockIDFlagToJSON(object: _111.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _111.SignedMsgType;
        signedMsgTypeToJSON(object: _111.SignedMsgType): string;
        BlockIDFlag: typeof _111.BlockIDFlag;
        BlockIDFlagSDKType: typeof _111.BlockIDFlagSDKType;
        SignedMsgType: typeof _111.SignedMsgType;
        SignedMsgTypeSDKType: typeof _111.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _111.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _111.PartSetHeader;
        };
        Part: {
            encode(message: _111.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _111.Part;
        };
        BlockID: {
            encode(message: _111.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _111.BlockID;
        };
        Header: {
            encode(message: _111.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Header;
            fromPartial(object: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _111.Header;
        };
        Data: {
            encode(message: _111.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _111.Data;
        };
        Vote: {
            encode(message: _111.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Vote;
            fromPartial(object: {
                type?: _111.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _111.Vote;
        };
        Commit: {
            encode(message: _111.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Commit;
            fromPartial(object: {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _111.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _111.Commit;
        };
        CommitSig: {
            encode(message: _111.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _111.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _111.CommitSig;
        };
        Proposal: {
            encode(message: _111.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Proposal;
            fromPartial(object: {
                type?: _111.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _111.Proposal;
        };
        SignedHeader: {
            encode(message: _111.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.SignedHeader;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _111.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _111.SignedHeader;
        };
        LightBlock: {
            encode(message: _111.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.LightBlock;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _111.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    };
                    totalVotingPower?: any;
                };
            }): _111.LightBlock;
        };
        BlockMeta: {
            encode(message: _111.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: any;
            }): _111.BlockMeta;
        };
        TxProof: {
            encode(message: _111.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _111.TxProof;
        };
        ConsensusParams: {
            encode(message: _110.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _110.ConsensusParams;
        };
        BlockParams: {
            encode(message: _110.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.BlockParams;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            }): _110.BlockParams;
        };
        EvidenceParams: {
            encode(message: _110.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: {
                    seconds?: any;
                    nanos?: number;
                };
                maxBytes?: any;
            }): _110.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _110.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _110.ValidatorParams;
        };
        VersionParams: {
            encode(message: _110.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.VersionParams;
            fromPartial(object: {
                appVersion?: any;
            }): _110.VersionParams;
        };
        HashedParams: {
            encode(message: _110.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            }): _110.HashedParams;
        };
        Evidence: {
            encode(message: _109.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _111.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _111.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _111.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                };
            }): _109.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _109.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _111.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _111.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            }): _109.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _109.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _111.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    };
                };
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                totalVotingPower?: any;
                timestamp?: Date;
            }): _109.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _109.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _111.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _111.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _111.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[];
            }): _109.EvidenceList;
        };
        Block: {
            encode(message: _108.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Block;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _111.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _111.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _111.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _111.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _108.Block;
        };
    };
    const version: {
        App: {
            encode(message: _113.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.App;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _113.App;
        };
        Consensus: {
            encode(message: _113.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Consensus;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _113.Consensus;
        };
    };
}
