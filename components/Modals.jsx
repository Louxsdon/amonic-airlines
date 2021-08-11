import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaArrowCircleUp,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function AddModal({ visible, handleVisibility, offices }) {
  const [showPassword, setshowPassword] = useState(false);
  function togglePassword() {
    setshowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={`modal-overlay ${visible ? "block" : "hidden"}`}>
      <div className="modal">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Add User</p>
          <button
            onClick={() => handleVisibility(false)}
            className="bg-red-100 text-red-400 cursor-pointer px-2"
          >
            X
          </button>
        </div>
        <hr className=" my-5" />
        <div className="">
          <form onSubmit={handleSubmit} action="">
            <div className="input-group">
              <label htmlFor="">Email Address</label>
              <input type="email" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">Last Name</label>
              <input type="text" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">Office</label>
              <select className="input-control" name="office" id="">
                <option value="all">All Offices</option>
                {typeof offices !== "undefined"
                  ? offices.map((office) => (
                      <option value="all_office" value={office.id}>
                        {office.title}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="">Office</label>
              <input type="date" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="input-control pr-10"
                />
                {!showPassword ? (
                  <FaEye
                    onClick={() => setshowPassword(true)}
                    className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setshowPassword(false)}
                    className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn bg-success-200 text-green-600">
                Save
              </button>
              <button className="btn bg-red-200 text-red-600">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function EditModal({ visible, handleVisibility, offices, user }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={`modal-overlay ${visible ? "block" : "hidden"}`}>
      <div className="modal">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Edit User</p>
          <button
            onClick={() => handleVisibility(false)}
            className="bg-red-100 text-red-400 cursor-pointer px-2"
          >
            X
          </button>
        </div>
        <hr className=" my-5" />
        <div className="">
          <form onSubmit={handleSubmit} action="">
            <div className="input-group">
              <label htmlFor="">Email Address</label>
              <input type="email" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">Last Name</label>
              <input type="text" name="" id="" className="input-control" />
            </div>
            <div className="input-group">
              <label htmlFor="">Office</label>
              <select className="input-control" name="office" id="">
                <option value="all">All Offices</option>
                {typeof offices !== "undefined"
                  ? offices.map((office) => (
                      <option value="all_office" value={office.id}>
                        {office.title}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="">Role</label>
              <div className="">
                <input type="radio" name="role" id="" /> User
              </div>
              <div className="">
                <input type="radio" name="role" id="" /> Administrator
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="btn bg-success-200 text-green-600">
                Apply
              </button>
              <button className="btn bg-red-200 text-red-600">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Edit Flights Modal
export function EditFlightModal({ visible, handleVisibility }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={`modal-overlay ${visible ? "block" : "hidden"}`}>
      <div className="modal">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Edit Flight Schedule</p>
          <button
            onClick={() => handleVisibility(false)}
            className="bg-red-100 text-red-400 cursor-pointer px-2"
          >
            X
          </button>
        </div>
        <hr className=" my-5" />
        <div className="">
          <fieldset className="border p-5">
            <legend>Flight Route</legend>
            <div className="flex space-x-10">
              <h3>
                From: <span className="font-semibold">AUH</span>
              </h3>
              <h3>
                TO: <span className="font-semibold">ADE</span>
              </h3>
              <h3>
                Aircraft: <span className="font-semibold">Boeing 739</span>
              </h3>
            </div>
          </fieldset>

          {/* Form section */}
          <form onSubmit={handleSubmit} action="" className="mt-8">
            <div className="flex space-x-6">
              <div className="input-group">
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" className="input-control" />
              </div>
              <div className="input-group">
                <label htmlFor="">Time</label>
                <input type="time" name="" id="" className="input-control" />
              </div>
              <div className="input-group">
                <label htmlFor="">Economy Price: $</label>
                <input type="number" name="" id="" className="input-control" />
              </div>
            </div>
            <div className="flex justify-end items-center space-x-5 mt-5">
              <button className="btn bg-blue-200 text-blue-600">Update</button>
              <button className="btn bg-red-200 text-red-600">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
// Edit Flights Modal
export function EditFlightScheduleModal({ visible, handleVisibility }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={`modal-overlay ${visible ? "block" : "hidden"}`}>
      <div className="modal">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Apply Schedule Changes</p>
          <button
            onClick={() => handleVisibility(false)}
            className="bg-red-100 text-red-400 cursor-pointer px-2"
          >
            X
          </button>
        </div>
        <hr className=" my-5" />

        {/* Form section */}
        <form onSubmit={handleSubmit} action="" className="mt-8">
          <div className="flex space-x-6">
            <div className="input-group">
              <label htmlFor="">
                Please select the text file with the changes
              </label>
              <div className="flex justify-end items-center space-x-5 mt-5">
                <input type="file" name="" id="" className="input-control" />
                <button className="btn flex items-center justify-center bg-blue-200 text-blue-600 ">
                  <FaArrowCircleUp className="mr-3" />
                  Import
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="">
          <fieldset className="border p-5">
            <legend>Result</legend>
            <div className="flex space-x-10">
              <table className="table">
                <tr>
                  <td>Successful Changes Applied</td>
                  <td>[ xxxx ]</td>
                </tr>
                <tr>
                  <td>Duplicate Records Discarded</td>
                  <td>[ xxxx ]</td>
                </tr>
                <tr>
                  <td>Record with missing flieds discarded</td>
                  <td>[ xxxx ]</td>
                </tr>
              </table>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
