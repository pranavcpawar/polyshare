import { ConnectKitButton } from "connectkit";
import React from "react";

const ConnectButton = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, truncatedAddress, show }) => {
          return (
            <button onClick={show} className="bg-[#161618] text-[rgb(60,100,159)] font-bold w-[132px] h-[40px] outline outline-2 outline-offset-0 outline-[#212121] hover:bg-[#191919] rounded-[10px]">
              {isConnected ? truncatedAddress : "Connect Wallet"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectButton;