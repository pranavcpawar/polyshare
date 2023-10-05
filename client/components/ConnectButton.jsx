import { ConnectKitButton } from "connectkit";

const ConnectButton = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, truncatedAddress, show }) => {
          return (
            <button onClick={show} className="text-md font-poppins font-semibold w-[120px] sm:w-[104px] h-[40px] bg-[#1e2d21] hover:bg-[#5b92794d] text-[#8FCB9B] active:scale-95 transition-transform ease-in-out duration-200 rounded-[10px]">
              {isConnected ? truncatedAddress : "Connect"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectButton;