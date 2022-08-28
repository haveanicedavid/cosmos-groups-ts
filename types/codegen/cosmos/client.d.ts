import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
export declare const getSigningCosmosClientOptions: () => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmosClient: ({ rpcEndpoint, signer }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
}) => Promise<any>;
