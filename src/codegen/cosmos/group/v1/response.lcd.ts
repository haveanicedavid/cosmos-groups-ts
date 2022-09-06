// NOTE: These are manualy copied over from `types.ts` in order to set camelCase values

import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import {
  toTimestamp,
  fromTimestamp,
  isSet,
  fromJsonTimestamp,
  DeepPartial,
  Long,
} from "@osmonauts/helpers";

/** VoteOption enumerates the valid vote options for a given proposal. */
export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
   * return an error.
   */
  VOTE_OPTION_UNSPECIFIED = 0,

  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,

  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,

  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,

  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;

    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;

    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;

    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;

    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";

    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";

    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";

    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";

    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";

    default:
      return "UNKNOWN";
  }
}

/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,

  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
  PROPOSAL_STATUS_SUBMITTED = 1,

  /**
   * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
   * passes the group policy's decision policy.
   */
  PROPOSAL_STATUS_ACCEPTED = 2,

  /**
   * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
   * is rejected by the group policy's decision policy.
   */
  PROPOSAL_STATUS_REJECTED = 3,

  /**
   * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
   * final tally.
   */
  PROPOSAL_STATUS_ABORTED = 4,

  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = 5,
  UNRECOGNIZED = -1,
}
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;

    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;

    case 2:
    case "PROPOSAL_STATUS_ACCEPTED":
      return ProposalStatus.PROPOSAL_STATUS_ACCEPTED;

    case 3:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;

    case 4:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;

    case 5:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";

    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";

    case ProposalStatus.PROPOSAL_STATUS_ACCEPTED:
      return "PROPOSAL_STATUS_ACCEPTED";

    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";

    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";

    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";

    default:
      return "UNKNOWN";
  }
}

/** ProposalExecutorResult defines types of proposal executor results. */
export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,

  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,

  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,

  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export function proposalExecutorResultFromJSON(
  object: any
): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;

    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;

    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;

    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
export function proposalExecutorResultToJSON(
  object: ProposalExecutorResult
): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";

    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";

    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";

    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";

    default:
      return "UNKNOWN";
  }
}

/**
 * MemberRes represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface MemberRes {
  /** address is the member's account address. */
  address: string;

  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;

  /** metadata is any arbitrary metadata attached to the member. */
  metadata: string;

  /** added_at is a timestamp specifying when a member was added. */
  added_at: Date;
}

/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voters' weights is greater or equal than the defined
 * `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 * given by `windows`.
 */
export interface ThresholdDecisionPolicyRes {
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   */
  threshold: string;

  /** windows defines the different windows for voting and execution. */
  windows: DecisionPolicyWindowsRes;
}

/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 * is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 * given by `windows`.
 */
export interface PercentageDecisionPolicy {
  /**
   * percentage is the minimum percentage the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   */
  percentage: string;

  /** windows defines the different windows for voting and execution. */
  windows: DecisionPolicyWindowsRes;
}

/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsRes {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  voting_period: Duration;

  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   *
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */
  min_execution_period: Duration;
}

/** GroupInfoRes represents the high-level on-chain information for a group. */
export interface GroupInfoRes {
  /** id is the unique ID of the group. */
  id: Long;

  /** admin is the account address of the group's admin. */
  admin: string;

  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;

  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */
  version: Long;

  /** total_weight is the sum of the group members' weights. */
  total_weight: string;

  /** created_at is a timestamp specifying when a group was created. */
  created_at: string;
}

/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberRes {
  /** group_id is the unique ID of the group. */
  group_id: Long;

  /** member is the member data. */
  member: MemberRes;
}

/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoRes {
  /** address is the account address of group policy. */
  address: string;

  /** group_id is the unique ID of the group. */
  group_id: Long;

  /** admin is the account address of the group admin. */
  admin: string;

  /** metadata is any arbitrary metadata to attached to the group policy. */
  metadata: string;

  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */
  version: Long;

  /** decision_policy specifies the group policy's decision policy. */
  decision_policy: Any;

  /** created_at is a timestamp specifying when a group policy was created. */
  created_at: string;
}

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalRes {
  /** id is the unique id of the proposal. */
  id: Long;

  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;

  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;

  /** proposers are the account addresses of the proposers. */
  proposers: string[];

  /** submit_time is a timestamp specifying when a proposal was submitted. */
  submit_time: string;

  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   */
  group_version: Long;

  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   */
  group_policy_version: Long;

  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
  status: ProposalStatus;

  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   */
  final_tally_result: TallyResultRes;

  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successfull MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   */
  voting_period_end: string;

  /** executor_result is the final result of the proposal execution. Initial value is NotRun. */
  executor_result: ProposalExecutorResult;

  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
}

/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultRes {
  /** yes_count is the weighted sum of yes votes. */
  yes_count: string;

  /** abstain_count is the weighted sum of abstainers. */
  abstain_count: string;

  /** no_count is the weighted sum of no votes. */
  no_count: string;

  /** no_with_veto_count is the weighted sum of veto. */
  no_with_veto_count: string;
}

/** VoteRes represents a vote for a proposal. */
export interface VoteRes {
  /** proposal is the unique ID of the proposal. */
  proposal_id: Long;

  /** voter is the account address of the voter. */
  voter: string;

  /** option is the voter's choice on the proposal. */
  option: VoteOption;

  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;

  /** submit_time is the timestamp when the vote was submitted. */
  submit_time: string;
}
