import { Plan, ModuleVersion } from "./upgrade";
import { LCDClient } from "@osmonauts/lcd";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
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

  /* CurrentPlan */
  async currentPlan(_params: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponse> {
    const endpoint = `cosmos/upgrade/v1beta1/current_plan`;
    return await this.request<QueryCurrentPlanResponse>(endpoint);
  }

  /* AppliedPlan */
  async appliedPlan(params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
    const endpoint = `cosmos/upgrade/v1beta1/applied_plan/${params.name}`;
    return await this.request<QueryAppliedPlanResponse>(endpoint);
  }

  /* UpgradedConsensusState */
  async upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
    const endpoint = `cosmos/upgrade/v1beta1/upgraded_consensus_state/${params.lastHeight}`;
    return await this.request<QueryUpgradedConsensusStateResponse>(endpoint);
  }

  /* ModuleVersions */
  async moduleVersions(params: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.module_name !== "undefined") {
      options.params.module_name = params.module_name;
    }

    const endpoint = `cosmos/upgrade/v1beta1/module_versions`;
    return await this.request<QueryModuleVersionsResponse>(endpoint, options);
  }

  /* Authority */
  async authority(_params: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponse> {
    const endpoint = `cosmos/upgrade/v1beta1/authority`;
    return await this.request<QueryAuthorityResponse>(endpoint);
  }

}