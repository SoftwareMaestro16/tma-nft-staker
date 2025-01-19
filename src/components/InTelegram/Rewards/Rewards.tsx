import styles from "./Rewards.module.scss";
// import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import { useWalletAddress } from "../../../utils/WalletContext"; 

function Rewards() {
    const navigate = useNavigate();
    const { connectedWallet } = useWalletAddress(); 

    const handleNavigation = (path: string) => {
        const fullPath = path === '/nft' && connectedWallet ? `/nft/${connectedWallet}` : path;
        navigate(fullPath);
    };

    return (
        <>
            <div className={styles.rewardContainer}>
                <div className={styles.positionsText}>
                    <h2>Your Positions:</h2>
                </div>
                <div className={styles.positionsListContainer}>
                    <div className={styles.noPositions}>
                        <img onClick={() => handleNavigation('/nft')} src="/rewards.png" alt="" />
                        <h1 onClick={() => handleNavigation('/nft')}>Stake NFT</h1>
                        <h2>You don't have Staked NFT.</h2>
                    </div>
                </div>
            </div>
            {/* <Menu /> */}
        </>
    );
}

export default Rewards;