import styles from "./InTelegram.module.scss";
// import { MainButton } from "@twa-dev/sdk/react";
// import { SecondaryButton } from "@twa-dev/sdk/react";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { Address } from "@ton/core";
import NftList from "./NftList/NftList";
import { collectionAddress } from "../../utils/extra";
import Menu from "./Menu/Menu";

function InTg() {
    const wallet = useTonWallet();
    // const { open } = useTonConnectModal();

    const connectedWallet = wallet ? Address.parse(wallet.account.address) : null;

    return (
        <>
            <div className={styles.header}>
                <h2 className={styles.testnetText}>Testnet</h2>
                <TonConnectButton className={styles.tcBtn}/>
            </div>
            <div className={styles.tgContainer}>
                <div className={styles.desc}>
                    <h1>NFT Staker</h1>
                    <h2>Stake NFT for Rewards.</h2>
                </div>
                <div className={styles.nftContainer}>
                    <div className={styles.nftText}>
                        <h2>Your NFTs:</h2>
                    </div>
                    {connectedWallet ? 
                        <>
                        <NftList 
                            walletAddress={connectedWallet.toString()} 
                            collectionAddress={collectionAddress}
                        />
                        
                        <Menu />
                        </>
                        
                        :
                         <div className={styles.noWallet}>
                            <img src="/warning.png" alt="" />
                            <h2>Wallet Not Connected</h2>
                            <h3>Connect Wallet to View NFTs.</h3>  
                        </div> 
                    }

                </div>
                <br />
                
            </div>
        </>
    );
}

export default InTg;

{/* <MainButton
    disabled={false}
    progress={false}
    color="#23344f"
    onClick={() => console.log('test')}
    textColor="#ffffff"
    text="Text"
    hasShineEffect={true}
/>
<SecondaryButton 
    disabled={false}
    progress={false}
    // color="#1e324f"
    onClick={() => console.log('test')}
    textColor="#3a5b8c"
    text="Text"
    hasShineEffect={true}
/> */}