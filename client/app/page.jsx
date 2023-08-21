import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: 'polyshare',
  description: 'A Decentralized approach to share amongst peer',
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full fixed flex-col bg-[#121212] items-center justify-between p-5">
      <div className="grid items-center justify-center font-mono text-sm lg:flex">
        <Navbar />
      </div>
    </main>
  );
};
