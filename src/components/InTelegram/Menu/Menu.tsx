import styles from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
import { useWalletAddress } from "../../../utils/WalletContext";

function Menu() {
    const navigate = useNavigate();
    const { connectedWallet } = useWalletAddress();

    const handleNavigation = (path: string) => {
        const fullPath = connectedWallet && path === '/nft' ? `/nft/${connectedWallet}` : path;
        navigate(fullPath);
    };

    return (
        <div className={styles.menuContainer}>
            <div className={styles.item} onClick={() => handleNavigation('/')}>
                <img src="/rewards.png" alt="" />
                <h3>Rewards</h3>
            </div>
            <div className={styles.item} onClick={() => handleNavigation('/nft')}>
                <img src="/nft.png" alt="" />
                <h3>NFT</h3>
            </div>
            <div className={styles.item}>
                <img src="/mint.png" alt="" />
                <h3>Mint</h3>
            </div>
            <div className={styles.item}>
                <img src="/profile.png" alt="" />
                <h3>Profile</h3>
            </div>
        </div>
    );
}

export default Menu;