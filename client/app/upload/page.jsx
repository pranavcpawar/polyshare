import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { HiUpload } from "react-icons/hi";

export const metadata = {
  title: 'polyshare - upload data',
};

export default function Upload() {
  return (
    <main className="grid place-items-center w-full fixed p-5 space-y-5">
      <div className="flex flex-col place-items-center space-y-5 bg-[#0a0a0a] rounded-[20px] px-5 py-2.5 outline outline-2 outline-offset-0 outline-border">
        <div className="w-[550px] h-[280px] bg-[rgb(25,25,25,0.5)] outline-dashed rounded-[20px] outline-2 outline-offset-0 outline-border p-5">
          add drag and drop feature
        </div>
        <div>
          <Button className="group bg-[#0A0A0A] rounded-[15px] hover:bg-[#101010] text-white w-[132px] h-[48px] outline outline-2 outline-offset-0 outline-[#212121]">
              <HiUpload className="h-6 w-6 mr-2 group-hover:text-[rgba(60,100,159)]" /> 
              <h3 className="font-poppins text-lg group-hover:text-[rgba(60,100,159)]">Upload</h3>
          </Button>
        </div>
      </div>
      <div className="bg-[#181818] rounded-[20px] outline outline-2 outline-offset-0 outline-black p-2.5">
        <div className="w-[80vw] h-[240px] bg-[#0a0a0a] rounded-[20px] outline outline-2 outline-offset-0 outline-border p-5">
          display progress
        </div>
      </div>
    </main>
  );
};