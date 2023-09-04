import { ConnectKitButton } from "connectkit";
import React from "react";

const ConnectButton = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, truncatedAddress, show }) => {
          return (
            <button onClick={show} className="bg-[#161618] font-bold w-[132px] h-[40px] outline outline-2 outline-offset-0 text-[#656565] hover:text-[rgba(60,100,159)] outline-[#212121] hover:scale-110 transition-transform duration-200 ease-out rounded-[12px]">
              {isConnected ? truncatedAddress : "Connect Wallet"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectButton;