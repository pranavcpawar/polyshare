import Image from "next/image";

export const metadata = {
  title: 'polyshare',
  description: 'A Decentralized approach to share amongst peer',
};

export default function Home() {
  return (
    <main className="fixed w-full grid place-items-center p-5">
      <div className="">
        <h1>Home Page</h1>
      </div>
    </main>
  );
};
