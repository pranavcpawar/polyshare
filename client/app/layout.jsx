"use client";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Navbar from "@/components/Navbar";

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
        <ConnectKitProvider theme="auto" mode="dark">
          <body className="bg-[#191919]">
            <div className="bg-gradient" />
            <div className="main">
              <div className="glow-gradient" />
            </div>
            <main className="z-10 flex flex-col place-items-center max-w-7xl relative mx-auto px-8 pt-2.5">
              <Navbar />
              {children}
            </main>
          </body>
        </ConnectKitProvider>
      </WagmiConfig> 
    </html>
  );
};
