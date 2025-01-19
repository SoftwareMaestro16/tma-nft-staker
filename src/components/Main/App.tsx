import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';
import InTg from '../InTelegram/InTelegram';
import NotInTg from '../NotInTelegram/NotInTg';

declare global {
  interface Window {
    Telegram?: any;
  }
}

function App() {
  const [isTelegram, setIsTelegram] = useState<boolean>(false);

  useEffect(() => {
    const isTgCheck = typeof window !== 'undefined' && window.Telegram?.WebApp?.initData;

    if (isTgCheck) {
      WebApp.ready();
      WebApp.enableClosingConfirmation();
      WebApp.expand();
      WebApp.setHeaderColor('#23344f'); 
      
      setIsTelegram(true);

      document.body.style.backgroundColor = '#152236';

      const { bottom } = WebApp.safeAreaInset || { bottom: 0 };
      document.body.style.paddingBottom = `${-bottom}px`; 

      WebApp.onEvent('safeAreaChanged', () => {
        const { bottom } = WebApp.safeAreaInset || { bottom: 0 };
        document.body.style.paddingBottom = `${-bottom}px`;
      });
    }
  }, []);

  return (
    <div className={styles.appContainer}>
      <TonConnectUIProvider 
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
        uiPreferences={{
          colorsSet: {
          [THEME.DARK]: {
            connectButton: {
              background: '#23344f',
            },
            accent: '#678ec9',
            telegramButton: '#23344f',
            background: {
              primary: '#101824',
              secondary: '#23344f',
              tint: '#23344f'
            }
          }
        },}}
      >
        {isTelegram ? <InTg /> : <NotInTg />}
      </TonConnectUIProvider>
    </div>
  );
};

export default App;