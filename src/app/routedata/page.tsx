"use client";

import { useEffect, useState } from "react";

export default function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/images", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const {data} = await response.json();
      setData(data)
    })();
  }, []);

  console.log('data',data);
  return (
    <>
      <div className="h-full w-full min-h-screen bg-[#212121] flex items-center justify-center">
        <section className="bg-[#383838] py-16  w-full h-full max-w-[860px]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-orange-500 tracking-tight mb-8 w-full">
              Data is getting loaded from NextJS Route API :
            </h1>
            <p className="text-lg text-orange-500 font-light mb-12">
              Check out some of our best shots!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.length > 0 ? data.map(({id,name,age}) => (
                <div
                  key={id}
                  className=" bg-black/40 text-orange-400 rounded-lg shadow-lg aspect-square flex flex-col items-center justify-center"
                >
                  <p className="text-left">Name: {name}</p>
                  <p className="text-left">Age:  {age}</p>
                </div>
              ))
              : <p>Sorry, No data.</p>
            }
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
