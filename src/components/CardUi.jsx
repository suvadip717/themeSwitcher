import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Card() {
  return (
    <div className="bg-white rounded-lg p-8 w-[452px] dark:bg-gray-800 dark:border-gray-700 shadow-xl shadow-green-300">
          <div className="">
            <img
              className="h-80 w-90"
              src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcset=""
            />
          </div>
          <div className="mt-8 db-5">
            <div className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </div>
          </div>
          <div className="mt-2 flex ">
            <FaStar color="yellow" className="m-1" />
            <FaStar color="yellow" className="m-1" />
            <FaStar color="yellow" className="m-1" />
            <FaStar color="yellow" className="m-1" />
            <FaStar color="grey" className="m-1" />
            <div className="bg-cyan-100 rounded-lg ml-3 pl-2 pr-2 text-indigo-900 text-sm font-bold">
              4.0
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="font-bold text-gray-900 dark:text-white text-3xl">$599</div>
            <button className="text-white bg-cyan-600 p-2 rounded-lg">Add to cart</button>
          </div>
        </div>
  );
}
