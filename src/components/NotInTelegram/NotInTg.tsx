import styles from "./NotInTg.module.scss";
import QRCode from 'react-qr-code';

function NotInTg() {

    return (
        <>
            <div className={styles.notContainer}>
                <h1>Please, open in Telegram.</h1>
                <QRCode className={styles.QR} value="https://t.me/NFTStakerBot/Stake" bgColor="#152236" fgColor="#ffffff" size={185} />
            </div>
        </>
    );
}

export default NotInTg;