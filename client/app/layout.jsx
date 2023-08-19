"use client";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const config = createConfig(
	getDefaultConfig({
		// Required API Keys
		alchemyId: process.env.ALCHEMY_API_KEY,
		walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID,

		// Required
		appName: "polyshare",
	})
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <ConnectKitProvider mode="dark">
          <body className={inter.className}>{children}</body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
};
