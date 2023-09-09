import { ConnectKitButton } from "connectkit";

const ConnectButton = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, truncatedAddress, show }) => {
          return (
            <button onClick={show} className="bg-[rgba(60,100,159)] text-lg font-poppins font-semibold w-[132px] h-[48px] outline outline-2 outline-offset-0 hover:bg-[rgba(60,100,159,0.6)] text-background outline-black active:scale-95 transition-transform ease-in-out duration-200 rounded-[15px]">
              {isConnected ? truncatedAddress : "Connect"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectButton;