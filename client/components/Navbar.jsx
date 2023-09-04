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

  const [activeTab, setActiveTab] = useState(tab);
  const currentTab = NavigationTabs.find((m) => m.tab === activeTab);

  return (
    <section className="fixed">
      <div className="bg-[#0a0a0a] hidden sm:flex flex-row gap-16 place-items-center w-[500px] h-[64px] outline outline-2 outline-offset-0 outline-[#212121] rounded-[12px] px-12 py-4">
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
      <div className="flex sm:hidden bg-[#ffff] w-[40px] h-[40px]">

      </div>
    </section>  
  );
};

export default Navbar;