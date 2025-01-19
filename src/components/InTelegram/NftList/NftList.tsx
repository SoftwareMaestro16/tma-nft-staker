import styles from "./NftList.module.scss";
import getNftByAddress from "../../../utils/getNftByAddress";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toUserFriendlyAddress } from "@tonconnect/ui-react";
import Menu from "../Menu/Menu";

export type NftListProps = {
    walletAddress: string;
    collectionAddress: string;
};

function NftList({ walletAddress, collectionAddress }: NftListProps) {
    const { address } = useParams<{ address: string }>();
    const [nfts, setNfts] = useState<any[]>([]);
    const resolvedWalletAddress = walletAddress || address || '';

    useEffect(() => {
        const fetchNFTs = async () => {
            if (resolvedWalletAddress) {
                const data = await getNftByAddress(resolvedWalletAddress, collectionAddress);
                setNfts(data);
            }
        };

        fetchNFTs();
    }, [resolvedWalletAddress, collectionAddress]);

    return (
        <div className={styles.fullContainer}>
            <div className={styles.chooseText}>
                <img src="/stake.png" alt="" />
                <h1>Choose NFT to Stake:</h1>
            </div>
            <div className={styles.nftContainer}>
                <div className={styles.nftText}>
                    <h2>Your NFT:</h2>
                </div>
                <div className={styles.nftListContainer}>
                    {nfts.length > 0 ? (
                        nfts.map((nft) => (
                            <div key={nft.address} className={styles.nftItem}>
                                <img src={nft.metadata.image} alt="NFT Item" />
                                <h2>
                                    {toUserFriendlyAddress(nft.address).substring(0, 4)}...
                                    {toUserFriendlyAddress(nft.address).substring(
                                        toUserFriendlyAddress(nft.address).length - 4
                                    )}
                                </h2>
                                <button>Stake</button>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noNft}>
                            <img src="/nft.png" alt="" />
                            <h1>Mint NFT</h1>
                            <h2>
                                You don't have NFT of this{" "}
                                <a href="https://t.me/NFTStakerBot/Stake">Collection</a>.
                            </h2>
                        </div>
                    )}
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default NftList;