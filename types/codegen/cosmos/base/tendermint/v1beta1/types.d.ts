import { Data, Commit, BlockID } from "../../../../tendermint/types/types";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { Consensus } from "../../../../tendermint/version/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    last_commit: Commit;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
    /** basic block info */
    version: Consensus;
    chain_id: string;
    height: Long;
    time: Date;
    /** prev block info */
    last_block_id: BlockID;
    /** hashes of block data */
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    /** hashes from the app output from the prev block */
    validators_hash: Uint8Array;
    /** validators for the next block */
    next_validators_hash: Uint8Array;
    /** consensus params for current block */
    consensus_hash: Uint8Array;
    /** state after txs from the previous block */
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    /** consensus info */
    evidence_hash: Uint8Array;
    /**
     * proposer_address is the original block proposer address, formatted as a Bech32 string.
     * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
     * for better UX.
     */
    proposer_address: string;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial(object: DeepPartial<Block>): Block;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial(object: DeepPartial<Header>): Header;
};
