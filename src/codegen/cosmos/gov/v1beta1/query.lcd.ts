import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Proposal */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}`;
    return await this.request<QueryProposalResponse>(endpoint);
  }

  /* Proposals */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposal_status !== "undefined") {
      options.params.proposal_status = params.proposal_status;
    }

    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }

    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals`;
    return await this.request<QueryProposalsResponse>(endpoint, options);
  }

  /* Vote */
  async vote(params: QueryVoteRequest): Promise<QueryVoteResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}votes/${params.voter}`;
    return await this.request<QueryVoteResponse>(endpoint);
  }

  /* Votes */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/votes`;
    return await this.request<QueryVotesResponse>(endpoint, options);
  }

  /* Params */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/gov/v1beta1/params/${params.paramsType}`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Deposit */
  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}deposits/${params.depositor}`;
    return await this.request<QueryDepositResponse>(endpoint);
  }

  /* Deposits */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/deposits`;
    return await this.request<QueryDepositsResponse>(endpoint, options);
  }

  /* TallyResult */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/tally`;
    return await this.request<QueryTallyResultResponse>(endpoint);
  }

}