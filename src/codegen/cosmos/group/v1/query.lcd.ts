import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  GroupInfo,
  GroupPolicyInfo,
  GroupMember,
  Proposal,
  Vote,
  TallyResult,
} from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import {
  QueryGroupInfoRequest,
  QueryGroupInfoResponse,
  QueryGroupPolicyInfoRequest,
  QueryGroupPolicyInfoResponse,
  QueryGroupMembersRequest,
  QueryGroupMembersResponse,
  QueryGroupsByAdminRequest,
  QueryGroupsByAdminResponse,
  QueryGroupPoliciesByGroupRequest,
  QueryGroupPoliciesByGroupResponse,
  QueryGroupPoliciesByAdminRequest,
  QueryGroupPoliciesByAdminResponse,
  QueryProposalRequest,
  QueryProposalResponse,
  QueryProposalsByGroupPolicyRequest,
  QueryProposalsByGroupPolicyResponse,
  QueryVoteByProposalVoterRequest,
  QueryVoteByProposalVoterResponse,
  QueryVotesByProposalRequest,
  QueryVotesByProposalResponse,
  QueryVotesByVoterRequest,
  QueryVotesByVoterResponse,
  QueryGroupsByMemberRequest,
  QueryGroupsByMemberResponse,
  QueryTallyResultRequest,
  QueryTallyResultResponse,
} from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({ restEndpoint }: { restEndpoint: string }) {
    super({
      restEndpoint,
    });
  }

  /* GroupInfo */
  async groupInfo(
    params: QueryGroupInfoRequest
  ): Promise<QueryGroupInfoResponse> {
    const endpoint = `cosmos/group/v1/group_info/${params.group_id}`;
    return await this.request<QueryGroupInfoResponse>(endpoint);
  }

  /* GroupPolicyInfo */
  async groupPolicyInfo(
    params: QueryGroupPolicyInfoRequest
  ): Promise<QueryGroupPolicyInfoResponse> {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return await this.request<QueryGroupPolicyInfoResponse>(endpoint);
  }

  /* GroupMembers */
  async groupMembers(
    params: QueryGroupMembersRequest
  ): Promise<QueryGroupMembersResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_members/${params.group_id}`;
    return await this.request<QueryGroupMembersResponse>(endpoint, options);
  }

  /* GroupsByAdmin */
  async groupsByAdmin(
    params: QueryGroupsByAdminRequest
  ): Promise<QueryGroupsByAdminResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return await this.request<QueryGroupsByAdminResponse>(endpoint, options);
  }

  /* GroupPoliciesByGroup */
  async groupPoliciesByGroup(
    params: QueryGroupPoliciesByGroupRequest
  ): Promise<QueryGroupPoliciesByGroupResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.group_id}`;
    return await this.request<QueryGroupPoliciesByGroupResponse>(
      endpoint,
      options
    );
  }

  /* GroupPoliciesByAdmin */
  async groupPoliciesByAdmin(
    params: QueryGroupPoliciesByAdminRequest
  ): Promise<QueryGroupPoliciesByAdminResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return await this.request<QueryGroupPoliciesByAdminResponse>(
      endpoint,
      options
    );
  }

  /* Proposal */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const endpoint = `cosmos/group/v1/proposal/${params.proposalId}`;
    return await this.request<QueryProposalResponse>(endpoint);
  }

  /* ProposalsByGroupPolicy */
  async proposalsByGroupPolicy(
    params: QueryProposalsByGroupPolicyRequest
  ): Promise<QueryProposalsByGroupPolicyResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return await this.request<QueryProposalsByGroupPolicyResponse>(
      endpoint,
      options
    );
  }

  /* VoteByProposalVoter */
  async voteByProposalVoter(
    params: QueryVoteByProposalVoterRequest
  ): Promise<QueryVoteByProposalVoterResponse> {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`;
    return await this.request<QueryVoteByProposalVoterResponse>(endpoint);
  }

  /* VotesByProposal */
  async votesByProposal(
    params: QueryVotesByProposalRequest
  ): Promise<QueryVotesByProposalResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposal_id}`;
    return await this.request<QueryVotesByProposalResponse>(endpoint, options);
  }

  /* VotesByVoter */
  async votesByVoter(
    params: QueryVotesByVoterRequest
  ): Promise<QueryVotesByVoterResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return await this.request<QueryVotesByVoterResponse>(endpoint, options);
  }

  /* GroupsByMember */
  async groupsByMember(
    params: QueryGroupsByMemberRequest
  ): Promise<QueryGroupsByMemberResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return await this.request<QueryGroupsByMemberResponse>(endpoint, options);
  }

  /* TallyResult */
  async tallyResult(
    params: QueryTallyResultRequest
  ): Promise<QueryTallyResultResponse> {
    const endpoint = `cosmos/group/v1/proposals/${params.proposal_id}/tally`;
    return await this.request<QueryTallyResultResponse>(endpoint);
  }
}
