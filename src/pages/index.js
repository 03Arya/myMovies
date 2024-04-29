import Footer from "@/components/footer";
import Header from "@/components/header";
import Movies from "@/components/movies";
import Popular from "@/components/popular";
import Image from "next/image";
import Axios from "axios";
import { useState } from "react";

export default function Home() {
  const [searchResults, setSearchResults] = useState([])

  async function searchHandler(event) {
    const response = await Axios.get(`https://api.themoviedb.org/3/search/multi?query=${event.target.value}`,{
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN
      }
    })
  
    setSearchResults(response.data.results)
  }
  return (
    <main className="pl-6 mx-auto dark:bg-black transition duration-500">
      <Header />
      <input onChange={searchHandler} type="search" className="border border-gray-300" />

      <section>
        <div className="grid grid-cols-2 gap-20 pr-6 flex-row">
          <p className="dark:text-indigo-200 transition duration-500 basis-1/2 text-lg text-indigo-950 font-bold w-40">Now Showing</p>
          <button className="basis-1/4 max-w-40 w-20 px-2 border-2 text-sm border-gray-400 text-gray-400 rounded-full justify-self-end">See more</button>
        </div>
        <div className="flex py-6 gap-5 flex-row overflow-x-auto no-scrollbar">
          <Movies />
        </div>
      </section>

      <section>
      <div className="grid grid-cols-2 gap-20 pr-6 flex-row">
          <p className="dark:text-indigo-200 transition duration-500 basis-1/2 text-lg text-indigo-950 font-bold w-40">Popular</p>
          <button className="basis-1/4 max-w-40 w-20 px-2 border-2 text-sm border-gray-400 text-gray-400 rounded-full justify-self-end">See more</button>
        </div>
        <div className="flex py-6 gap-5 flex-col overflow-y-auto no-scrollbar max-h-96">
          <Popular />
        </div>
      </section>
      <Footer />
    </main>
  );
}
