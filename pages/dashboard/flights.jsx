import { useState } from "react";
import UTopbar from "../../components/UTopbar";
import USidebar from "../../components/USidebar";
import {
  AddModal,
  EditFlightModal,
  EditFlightScheduleModal,
} from "../../components/Modals";
import {
  FaArrowCircleUp,
  FaCross,
  FaPencilAlt,
  FaTimes,
  FaTrash,
} from "react-icons/fa";

export default function Flights() {
  const [showModal, setshowModal] = useState(false);
  const [showEditFlightModal, setshowEditFlightModal] = useState(false);
  return (
    <div>
      <EditFlightScheduleModal
        visible={showModal}
        handleVisibility={setshowModal}
      />
      <EditFlightModal
        visible={showEditFlightModal}
        handleVisibility={setshowEditFlightModal}
      />
      <div className="flex w-full">
        <USidebar />
        <main className="w-full h-screen overflow-y-auto sticky top-0 right-0 ">
          <UTopbar />

          <div className="mt-16 container">
            <div className="">
              <div className="table-section m-auto px-4 py-5 mt-20 w-10/12 border rounded-md">
                <div className="flx justify-between">
                  <h3 className="font-bold">Manage Flights Scheduled</h3>
                </div>
                <form className="mt-6" action="">
                  <fieldset className="border p-4">
                    <legend>Filter By</legend>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="">
                        <div className="input-group">
                          <label htmlFor="">From</label>
                          <select className="input-control" name="office" id="">
                            <option value="all_office">All Office</option>
                            <option value="all_office">Ghana Office</option>
                            <option value="all_office">
                              United State Office
                            </option>
                            <option value="all_office">Uk Office</option>
                          </select>
                        </div>
                        <div className="input-group">
                          <label htmlFor="">Outbound</label>
                          <input
                            className="input-control"
                            type="date"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="input-group">
                          <label htmlFor="">To</label>
                          <select className="input-control" name="office" id="">
                            <option value="all_office">All Office</option>
                            <option value="all_office">Ghana Office</option>
                            <option value="all_office">
                              United State Office
                            </option>
                            <option value="all_office">Uk Office</option>
                          </select>
                        </div>
                        <div className="input-group">
                          <label htmlFor="">Flight Number</label>
                          <input
                            className="input-control"
                            type="date"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="input-group">
                          <label htmlFor="">Sort by</label>
                          <select className="input-control" name="office" id="">
                            <option value="all_office">All Office</option>
                            <option value="all_office">Ghana Office</option>
                            <option value="all_office">
                              United State Office
                            </option>
                            <option value="all_office">Uk Office</option>
                          </select>
                        </div>
                        <div className="input-group">
                          <div>&nbsp;</div>
                          <button className="btn bg-blue-200 text-blue-500 fluid">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
                {/* Flight Table */}
                <table className="w-full mt-8 text-sm border">
                  <thead>
                    <tr className="border">
                      <th>s/n</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Floight Number</th>
                      <th>Aircraft</th>
                      <th>Economy Price</th>
                      <th>Business Price</th>
                      <th>First Class Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => setshowEditFlightModal(true)}
                      className=""
                    >
                      <td>1</td>
                      <td>11/10/2017</td>
                      <td>08:45</td>
                      <td>IKA</td>
                      <td>AUH</td>
                      <td>1908</td>
                      <td>320</td>
                      <td>$370</td>
                      <td>$499</td>
                      <td>$573</td>
                    </tr>
                    <tr
                      onClick={() => setshowEditFlightModal(true)}
                      className="bg-red-50"
                    >
                      <td>2</td>
                      <td>11/10/2017</td>
                      <td>08:45</td>
                      <td>IKA</td>
                      <td>AUH</td>
                      <td>1908</td>
                      <td>320</td>
                      <td>$370</td>
                      <td>$499</td>
                      <td>$573</td>
                    </tr>
                    <tr
                      onClick={() => setshowEditFlightModal(true)}
                      className=""
                    >
                      <td>3</td>
                      <td>11/10/2017</td>
                      <td>08:45</td>
                      <td>IKA</td>
                      <td>AUH</td>
                      <td>1908</td>
                      <td>320</td>
                      <td>$370</td>
                      <td>$499</td>
                      <td>$573</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center space-x-4 w-2/3">
                    <button className="btn flex items-center text-danger-100 bg-danger-500">
                      <FaTimes className="mr-2 inline-block" />
                      Cancel Flight
                    </button>
                    <button
                      onClick={() => setshowEditFlightModal(true)}
                      className="btn flex items-center  text-purple-100 bg-purple-500"
                    >
                      <FaPencilAlt className="mr-2 inline-block" />
                      Edit Flight
                    </button>
                  </div>
                  <button
                    onClick={() => setshowModal(true)}
                    className="btn flex items-center  text-green-100 bg-green-500"
                  >
                    <FaArrowCircleUp className="mr-2 inline-block" />
                    Import Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
