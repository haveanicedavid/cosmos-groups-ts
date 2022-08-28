import { Rpc } from "@osmonauts/helpers";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
/** Service defines the RPC service */
export interface Service {
    getNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
    aBCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    getNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
    aBCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
