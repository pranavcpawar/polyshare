import { ConnectKitButton } from "connectkit";

const ConnectButton = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, truncatedAddress, show }) => {
          return (
            <button onClick={show} className="bg-[#090909] text-lg font-poppins w-[132px] h-[48px] outline outline-2 outline-offset-0 hover:text-[rgba(60,100,159)] hover:bg-[#101010] outline-[#212121] active:scale-95 transition-transform ease-in-out duration-200 rounded-[15px]">
              {isConnected ? truncatedAddress : "Connect"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectButton;