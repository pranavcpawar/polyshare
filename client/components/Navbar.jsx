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
  const currentTab = NavigationTabs.find((m) => m.tab === activeTab);

  return (
    <section className="fixed">
      <div className="bg-[#0a0a0a] hidden sm:flex flex-row gap-10 place-items-center w-[640px] h-[64px] rounded-[15px] px-12 py-4 shadow-[1px_2px_20px_rgba(60,100,159)]">
        <Link href="/" onClick={() => setActiveTab("home")}>
          <div className="p-2">
            <h1 className="font-poppins font-semibold text-xl">
              <span className="text-[#656565]">poly</span>
              <span className="text-[rgba(60,100,159)]">share.</span>
            </h1>
          </div>
        </Link>
        <div className="flex flex-wrap gap-10">
          {NavigationTabs.map((m) => (
            <Fragment key={m.tab}>
              <Link href={m.link}>
                <div 
                  className={`group cursor-pointer rounded-[10px] h-[40px] w-[40px] place-items-center hover:scale-110 transition-transform duration-200 ease-out grid hover:bg-[rgba(60,100,159,0.25)] ${activeTab === m.tab && "bg-[rgba(60,100,159,0.25)]"}`}
                  onClick={() => setActiveTab(m.tab)}
                >
                  {<m.icon size="32" className={`group-hover:text-[rgb(60,100,159)] ${activeTab === m.tab ? "text-[rgb(60,100,159)]" : "text-[#656565]"}`} />}
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