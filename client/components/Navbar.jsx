"use client";
import { Fragment, useState } from "react";
import { HiMiniHome, HiMiniUsers } from "react-icons/hi2";
import { HiUpload } from "react-icons/hi";
import ConnectButton from "./ConnectButton";
import Link from "next/link";
import { usePathname } from "next/navigation"

const NavigationTabs = [
  {
    tab: "home",
    icon: HiMiniHome,
    link: "/",
  },
  {
    tab: "upload", 
    icon: HiUpload,
    link: "upload",
  },
  {
    tab: "users",
    icon: HiMiniUsers,
    link: "users",
  },
];

const Navbar = () => {
  const path = usePathname();
  const tab = path?.split("/").pop() === ""? "home": path?.split("/").pop();
  console.log("current tab:", tab);

  const [activeTab, setActiveTab] = useState(tab);

  return (
    <section className="z-10 pb-5 pt-2.5 px-5">
      <div className="bg-[#12130f] hidden sm:flex flex-row gap-8 items-center justify-center h-[56px] rounded-[15px] px-12 py-5 outline outline-2 outline-offset-0 outline-border">
        <Link href="/" onClick={() => setActiveTab("home")}>
            <h1 className="font-poppins font-semibold text-xl">
              <span className="text-[#EAE6E5]">poly</span>
              <span className="text-[#5b9279]">share.</span>
            </h1>
        </Link>
        <div className="flex flex-wrap gap-5">
          {NavigationTabs.map((m) => (
            <Fragment key={m.tab}>
              <Link href={m.link}>
                <div 
                  className={`group cursor-pointer rounded-[10px] h-[40px] w-[40px] place-items-center hover:scale-110 transition-transform duration-200 ease-out grid ${activeTab === m.tab && "bg-[#8fcb9b48]"}`}
                  onClick={() => setActiveTab(m.tab)}
                >
                  {<m.icon size="32" className={`group-hover:text-[#5b9279] ${activeTab === m.tab ? "text-[#5b9279]" : "text-[#656565]"}`} />}
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
        <ConnectButton />
      </div>

      {/* small screen navigation */}
      <div className="grid sm:hidden bg-[#ffff] w-[40px] h-[40px]">

      </div>
    </section>  
  );
};

export default Navbar;