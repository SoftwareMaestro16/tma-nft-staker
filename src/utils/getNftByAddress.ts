import axios from "axios";

export default function getNftByAddress(walletAddress: string, collectionAddress: string): Promise<any[]> {
    const api: string = `https://testnet.tonapi.io/v2/accounts/${walletAddress}/nfts?collection=${collectionAddress}&limit=1000&offset=0&indirect_ownership=false`;

    return axios
        .get(api)
        .then(response => response.data.nft_items || []) 
        .catch(error => {
            console.error("Error fetching NFTs:", error);
            return []; 
    });
}