import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import {
  QueryEvidenceRequest,
  QueryEvidenceResponse,
  QueryAllEvidenceRequest,
  QueryAllEvidenceResponse,
} from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({ restEndpoint }: { restEndpoint: string }) {
    super({
      restEndpoint,
    });
  }

  /* Evidence */
  async evidence(params: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.evidenceHash}`;
    return await this.request<QueryEvidenceResponse>(endpoint);
  }

  /* AllEvidence */
  async allEvidence(
    params: QueryAllEvidenceRequest = {
      Pagination: undefined,
    }
  ): Promise<QueryAllEvidenceResponse> {
    const options: any = {
      params: {},
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.request<QueryAllEvidenceResponse>(endpoint, options);
  }
}
