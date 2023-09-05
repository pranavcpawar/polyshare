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
          <body className={inter.className} style={{background: "#121212"}}>
            <div className="z-10 flex items-center justify-center h-[88px] w-full font-mono text-sm p-4">
              <Navbar />
            </div>
            <main>{children}</main>
          </body>
        </ConnectKitProvider>
      </WagmiConfig> 
    </html>
  );
};
