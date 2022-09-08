import {
  ProposalStatus,
  Proposal,
  Vote,
  VotingParams,
  DepositParams,
  TallyParams,
  Deposit,
  TallyResult,
} from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface QueryProposalRequest {
  proposal_id: Long;
}
export interface QueryProposalResponse {
  proposal: Proposal;
}
export interface QueryProposalsRequest {
  proposal_status: ProposalStatus;
  voter: string;
  depositor: string;
  Pagination?: PageRequest;
}
export interface QueryProposalsResponse {
  proposals: Proposal[];
  Pagination?: PageResponse;
}
export interface QueryVoteRequest {
  proposal_id: Long;
  voter: string;
}
export interface QueryVoteResponse {
  vote: Vote;
}
export interface QueryVotesRequest {
  proposal_id: Long;
  Pagination?: PageRequest;
}
export interface QueryVotesResponse {
  votes: Vote[];
  Pagination?: PageResponse;
}
export interface QueryParamsRequest {
  params_type: string;
}
export interface QueryParamsResponse {
  voting_params: VotingParams;
  deposit_params: DepositParams;
  tally_params: TallyParams;
}
export interface QueryDepositRequest {
  proposal_id: Long;
  depositor: string;
}
export interface QueryDepositResponse {
  deposit: Deposit;
}
export interface QueryDepositsRequest {
  proposal_id: Long;
  Pagination?: PageRequest;
}
export interface QueryDepositsResponse {
  deposits: Deposit[];
  Pagination?: PageResponse;
}
export interface QueryTallyResultRequest {
  proposal_id: Long;
}
export interface QueryTallyResultResponse {
  tally: TallyResult;
}
export declare const QueryProposalRequest: {
  encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
  fromJSON(object: any): QueryProposalRequest;
  toJSON(message: QueryProposalRequest): unknown;
  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
  encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalResponse;
  fromJSON(object: any): QueryProposalResponse;
  toJSON(message: QueryProposalResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryProposalResponse>
  ): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
  encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsRequest;
  fromJSON(object: any): QueryProposalsRequest;
  toJSON(message: QueryProposalsRequest): unknown;
  fromPartial(
    object: DeepPartial<QueryProposalsRequest>
  ): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
  encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsResponse;
  fromJSON(object: any): QueryProposalsResponse;
  toJSON(message: QueryProposalsResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryProposalsResponse>
  ): QueryProposalsResponse;
};
export declare const QueryVoteRequest: {
  encode(message: QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest;
  fromJSON(object: any): QueryVoteRequest;
  toJSON(message: QueryVoteRequest): unknown;
  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
  encode(message: QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse;
  fromJSON(object: any): QueryVoteResponse;
  toJSON(message: QueryVoteResponse): unknown;
  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse;
};
export declare const QueryVotesRequest: {
  encode(message: QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest;
  fromJSON(object: any): QueryVotesRequest;
  toJSON(message: QueryVotesRequest): unknown;
  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
  encode(message: QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse;
  fromJSON(object: any): QueryVotesResponse;
  toJSON(message: QueryVotesResponse): unknown;
  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse;
};
export declare const QueryParamsRequest: {
  encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
  fromJSON(object: any): QueryParamsRequest;
  toJSON(message: QueryParamsRequest): unknown;
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
  encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
  fromJSON(object: any): QueryParamsResponse;
  toJSON(message: QueryParamsResponse): unknown;
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDepositRequest: {
  encode(message: QueryDepositRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest;
  fromJSON(object: any): QueryDepositRequest;
  toJSON(message: QueryDepositRequest): unknown;
  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest;
};
export declare const QueryDepositResponse: {
  encode(message: QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse;
  fromJSON(object: any): QueryDepositResponse;
  toJSON(message: QueryDepositResponse): unknown;
  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse;
};
export declare const QueryDepositsRequest: {
  encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
  fromJSON(object: any): QueryDepositsRequest;
  toJSON(message: QueryDepositsRequest): unknown;
  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
  encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositsResponse;
  fromJSON(object: any): QueryDepositsResponse;
  toJSON(message: QueryDepositsResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryDepositsResponse>
  ): QueryDepositsResponse;
};
export declare const QueryTallyResultRequest: {
  encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTallyResultRequest;
  fromJSON(object: any): QueryTallyResultRequest;
  toJSON(message: QueryTallyResultRequest): unknown;
  fromPartial(
    object: DeepPartial<QueryTallyResultRequest>
  ): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
  encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTallyResultResponse;
  fromJSON(object: any): QueryTallyResultResponse;
  toJSON(message: QueryTallyResultResponse): unknown;
  fromPartial(
    object: DeepPartial<QueryTallyResultResponse>
  ): QueryTallyResultResponse;
};
