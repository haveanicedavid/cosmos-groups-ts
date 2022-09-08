import { Params } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
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
    const endpoint = `cosmos/mint/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Inflation */
  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponse> {
    const endpoint = `cosmos/mint/v1beta1/inflation`;
    return await this.request<QueryInflationResponse>(endpoint);
  }

  /* AnnualProvisions */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.request<QueryAnnualProvisionsResponse>(endpoint);
  }

}