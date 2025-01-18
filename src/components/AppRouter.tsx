import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Main/App';
import NftList from './InTelegram/NftList/NftList';
import { collectionAddress } from '../utils/extra';
import { useWalletAddress } from '../utils/WalletContext';

function AppRouter() {
    const { connectedWallet } = useWalletAddress();
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} /> 
                <Route path="/nft" element={<NftList walletAddress={connectedWallet || ''} collectionAddress={collectionAddress} />} /> 
            </Routes>
        </Router>
    );
};

export default AppRouter;