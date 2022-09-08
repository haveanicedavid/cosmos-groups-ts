import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
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

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* ValidatorOutstandingRewards */
  async validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/outstanding_rewards`;
    return await this.request<QueryValidatorOutstandingRewardsResponse>(endpoint);
  }

  /* ValidatorCommission */
  async validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/commission`;
    return await this.request<QueryValidatorCommissionResponse>(endpoint);
  }

  /* ValidatorSlashes */
  async validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.starting_height !== "undefined") {
      options.params.starting_height = params.starting_height;
    }

    if (typeof params?.ending_height !== "undefined") {
      options.params.ending_height = params.ending_height;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/slashes`;
    return await this.request<QueryValidatorSlashesResponse>(endpoint, options);
  }

  /* DelegationRewards */
  async delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}rewards/${params.validatorAddress}`;
    return await this.request<QueryDelegationRewardsResponse>(endpoint);
  }

  /* DelegationTotalRewards */
  async delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards`;
    return await this.request<QueryDelegationTotalRewardsResponse>(endpoint);
  }

  /* DelegatorValidators */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/validators`;
    return await this.request<QueryDelegatorValidatorsResponse>(endpoint);
  }

  /* DelegatorWithdrawAddress */
  async delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/withdraw_address`;
    return await this.request<QueryDelegatorWithdrawAddressResponse>(endpoint);
  }

  /* CommunityPool */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return await this.request<QueryCommunityPoolResponse>(endpoint);
  }

}