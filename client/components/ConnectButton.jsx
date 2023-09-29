import { ConnectKitButton } from "connectkit";

const ConnectButton = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, truncatedAddress, show }) => {
          return (
            <button onClick={show} className="bg-[#8FCB9B] text-md font-poppins font-semibold w-[104px] h-[40px] outline outline-2 outline-offset-0 hover:bg-[#5B9279] text-background outline-black active:scale-95 transition-transform ease-in-out duration-200 rounded-[10px]">
              {isConnected ? truncatedAddress : "Connect"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectButton;