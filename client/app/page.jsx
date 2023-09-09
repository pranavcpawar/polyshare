import AccessCard from "@/components/AccessCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

export const metadata = {
  title: 'polyshare',
  description: 'A Decentralized approach to share amongst peer',
};

export default function Home() {
  return (
    <main className="fixed w-full grid place-items-center p-5">
      <div className="bg-[#090909] w-[90vw] h-[80vh] p-5 m-2 rounded-[20px] outline outline-2 outline-offset-0 outline-[#212121] shadow-[1px_2px_20px] shadow-border">
        <ScrollArea className="h-[75vh]">
          <div className="flex flex-wrap lg:place-content-start place-content-center">
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
            <AccessCard />
          </div>
          <ScrollBar className="scrollbar" />
        </ScrollArea>
      </div>
    </main>
  );
};
