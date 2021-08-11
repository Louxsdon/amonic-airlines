import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { IoCarSport, IoFootballOutline } from "react-icons/io5";
import { MdHome, MdPeople } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import UTopbar from "../../components/UTopbar";
import USidebar from "../../components/USidebar";
import { FaGlobe } from "react-icons/fa";

export default function Dashboard() {
  // Create a time state
  const [timer, settimer] = useState("12:00");
  function setTimer() {
    setInterval(() => {
      const date = new Date();
      const day = date.getDay();
      const month = date.getMonth();
      const year = date.getFullYear();

      const dates = `${day}-${month}-${year}`;

      const min = date.getMinutes();
      const hr = date.getHours();
      const sc = date.getSeconds();
      const session = hr >= 12 ? "PM" : "AM";
      const time = `${hr <= 9 ? "0" + hr : hr}:${min <= 9 ? "0" + min : min}:${
        sc <= 9 ? "0" + sc : sc
      } ${session}`;
      settimer(time);
    }, 1000);
  }

  useEffect(() => {
    setTimer();
    // settimer(time);
  }, [setTimer]);
  return (
    <div>
      <div className="flex w-full">
        <USidebar />
        <main className="w-full h-screen overflow-y-auto sticky top-0 right-0 ">
          <UTopbar />

          <div className="">{timer}</div>

          {/* Main Dashborad Section */}
          <div className="mt-16 font-serif text-gray-500 flex items-center justify-center">
            {/* Box 1 */}
            <div className="bg-white px-4 h-full sm:w-1/3 sm:mx-2 border p-6 lg:w-1/5 mb-8 md:mx-4 border-b-4 shadow-md border-indigo-600 rounded-lg facility text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="flex items-center justify-center">
                <div className="inline-block mr-4 p-3 bg-indigo-50 rounded-full">
                  <MdPeople className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-gray-800 font-bold ">Users</h2>
              </div>
              <p className="text-gray-500b text-4xl font-bold">5</p>
            </div>
            {/* Box 2 */}
            <div className="bg-white px-4 h-full sm:w-1/3 sm:mx-2 border p-6 lg:w-1/5 mb-8 md:mx-4 border-b-4 shadow-md border-pink-600 rounded-lg facility text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="flex items-center justify-center">
                <div className="inline-block mr-4 p-3 bg-pink-50 rounded-full">
                  <FaGlobe className="text-2xl text-pink-600" />
                </div>
                <h2 className="text-gray-800 font-bold ">Countries</h2>
              </div>
              <p className="text-gray-500b text-4xl font-bold">32</p>
            </div>
            {/* Box 3 */}
            <div className="bg-white px-4 h-full sm:w-1/3 sm:mx-2 border p-6 lg:w-1/5 mb-8 md:mx-4 border-b-4 shadow-md border-green-600 rounded-lg facility text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="flex items-center justify-center">
                <div className="inline-block mr-4 p-3 bg-green-50 rounded-full">
                  <MdHome className="text-2xl text-green-600" />
                </div>
                <h2 className="text-gray-800 font-bold ">Offices</h2>
              </div>
              <p className="text-gray-500b text-4xl font-bold">12</p>
            </div>
          </div>
          {/* Main Dashborad Section */}
          <div className="px-8">
            <div className="table-section m-auto px-4 py-5 mt-20 w-10/12 border rounded-md">
              <div className="flex justify-between">
                <h3 className="font-bold">User Activities</h3>
                <Link href="/dashboard/traffics">
                  <a className="link-btn px-3 py-1 bg-green-600 text-green-100 rounded">
                    View All <BsArrowRightShort className="inline-block" />
                  </a>
                </Link>
              </div>
              <table className="w-full mt-4 text-sm border">
                <thead>
                  <tr className="border">
                    <th>Date</th>
                    <th>Login Time</th>
                    <th>Logout Time</th>
                    <th>Time spent on system</th>
                    <th>Unsuccessful logout reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12/13/2019</td>
                    <td>12:30</td>
                    <td>1:30</td>
                    <td>2:00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>12/13/2019</td>
                    <td>12:30</td>
                    <td>1:30</td>
                    <td>2:00</td>
                    <td>Power outage</td>
                  </tr>
                  <tr>
                    <td>12/13/2019</td>
                    <td>12:30</td>
                    <td>1:30</td>
                    <td>2:00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
