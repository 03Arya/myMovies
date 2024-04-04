import Footer from "@/components/footer";
import Header from "@/components/header";
import Movies from "@/components/movies";
import Popular from "@/components/popular";
import Image from "next/image";


export default function Home() {
  return (
    <main className="px-6 max-w-md mx-auto">
      <Header />

      <section>
        <div className="flex gap-20  flex-row">
          <p className="basis-1/2 text-lg text-slate-950  font-bold">Now Showing</p>
          <button className="basis-1/4 max-w-40 px-2 border-2 text-sm border-gray-400 text-gray-400 rounded-full">See more</button>
        </div>
        <div className="flex py-6 gap-5 flex-row overflow-x-auto hide-scrollbar">
          <Movies />
        </div>
      </section>

      <section className="pt-10">
        <div className="flex gap-20  flex-row">
          <p className="basis-1/2 text-lg text-slate-950  font-bold">Popular</p>
          <button className="basis-1/4 max-w-40 px-2 border-2 text-sm border-gray-400 text-gray-400 rounded-full">See more</button>
        </div>
        <div className="flex py-6 gap-5 flex-col overflow-y-auto max-h-96">
          <Popular />
        </div>
      </section>
      <Footer />
    </main>
  );
}
