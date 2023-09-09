import { Button } from "./ui/button";
import { FiShare2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const AccessCard = () => {
  return (
    <div className="bg-[#191919] grid outline outline-2 outline-offset-0 outline-[#212121] rounded-[20px] p-5 m-5 place-content-center hover:shadow-[1px_2px_20px_rgba(60,100,159)]">
      <div className="flex flex-row space-x-5 place-content-center p-2.5">
        <div className="w-[160px] h-[160px] bg-[#0A0A0A] rounded-[20px] cursor-pointer">
          {/* preview of the document */}
        </div> 
        <div className="flex flex-col place-content-center space-y-5 p-2.5">
          <Button className="group bg-[#0A0A0A] rounded-[15px] hover:bg-[#101010] text-white w-[132px] h-[48px] outline outline-2 outline-offset-0 outline-[#212121]">
            <FiShare2 className="h-6 w-6 mr-2 group-hover:text-[rgba(60,100,159)]" /> 
            <h3 className="font-poppins text-lg group-hover:text-[rgba(60,100,159)]">share</h3>
          </Button>
          <Button className="group bg-[#0A0A0A] rounded-[15px] hover:bg-[#101010] text-white w-[132px] h-[48px] outline outline-2 outline-offset-0 outline-[#212121]">
            <MdDeleteOutline className="h-6 w-6 mr-2 group-hover:text-red-900" /> 
            <h3 className="font-poppins text-lg group-hover:text-red-900">revoke</h3>
          </Button>        
        </div>
      </div>

    </div>
  );
};

export default AccessCard;