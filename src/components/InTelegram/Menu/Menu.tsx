import styles from "./Menu.module.scss";

function Menu() {

    return (
        <>
            <div className={styles.menuContainer}>
                <div className={styles.item}>
                    <img src="/rewards.png" alt="" />
                    <h3>Rewards</h3>
                </div>
                <div className={styles.item}>
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
        </>
    );
}

export default Menu;