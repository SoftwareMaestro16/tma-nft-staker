import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
    connectedWallet: string | null; // Allow `null` as a valid type
    setConnectedWallet: (wallet: string | null) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

    return (
        <WalletContext.Provider value={{ connectedWallet, setConnectedWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletAddress = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
};