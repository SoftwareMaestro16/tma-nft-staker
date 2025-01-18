import styles from "./NftList.module.scss";
import getNftByAddress from "../../../utils/getNftByAddress";
import { useEffect, useState } from "react";
import { toUserFriendlyAddress } from "@tonconnect/ui-react";

type Props = {
    walletAddress: string;
    collectionAddress: string
  };
  
function NftList({ walletAddress, collectionAddress }: Props) {
    const [nfts, setNfts] = useState<any[]>([]);

    useEffect(() => {
        const fetchNFTs = async () => {
            const data = await getNftByAddress(walletAddress, collectionAddress);
            setNfts(data);
          };
      
        fetchNFTs();
        console.log(nfts);
        
    }, [walletAddress, collectionAddress]);

    return (
        <>
            <div className={styles.nftListContainer}>
                {nfts.length > 0 ?
                    <>
                        {nfts.map((nft) => (
                            <div key={nft.address} className={styles.nftItem}>
                                <img src={nft.metadata.image} alt="NFT Item" />
                                <h2>{toUserFriendlyAddress(nft.address).substring(0, 4)}...
                                    {toUserFriendlyAddress(nft.address).substring(toUserFriendlyAddress(nft.address).length - 4)}
                                </h2>
                                <button>Stake</button>
                            </div>
                        ))}
                    </>
                : <div className={styles.noNft}>
                    <img src="/nft.png" alt="" />
                    <h1>Mint NFT</h1>
                    <h2>You don't have NFT of this <a href="https://t.me/NFTStakerBot/Stake">Collection</a>.</h2>
                  </div>
                }
            </div>
            
        </>
    );
}

export default NftList;