import Link from "next/link";
import React from "react";
import { MdDashboard, MdHistory, MdPeople } from "react-icons/md";
import { FaPlane, FaPlaneArrival, FaTrafficLight } from "react-icons/fa";

export default function USidebar(props) {
  return (
    <>
      <aside className="w-80 bg-gray-900 h-screen text-gray-200">
        <div className="text-center bg-gray-800 px-4 py-10">
          <img
            className="w-24 inline-block m-auto mb-5"
            src="/imgs/logo3.png"
            alt="Logo"
          />
          <h2>AMONIC Airlines</h2>
        </div>

        <div className="pl-8 space-y-1 mt-12 text-lg">
          <div className="side-link flex items-center">
            <MdDashboard className="inline-block mr-2" />
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </div>
          <div className="side-link flex items-center">
            <MdPeople className="inline-block mr-2" />
            <Link href="/dashboard/users">
              <a>Users</a>
            </Link>
          </div>
          <div className="side-link flex items-center">
            <FaPlane className="inline-block mr-2" />
            <Link href="/dashboard/flights">
              <a>Manage Flights</a>
            </Link>
          </div>
          <div className="side-link flex items-center">
            <FaPlaneArrival className="inline-block mr-2" />
            <Link href="/dashboard/search-flight">
              <a>Search Flights</a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
