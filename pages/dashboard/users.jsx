import { useState, useEffect } from "react";
import UTopbar from "../../components/UTopbar";
import USidebar from "../../components/USidebar";
import { AddModal, EditModal } from "../../components/Modals";
import { FaPen, FaTimes } from "react-icons/fa";
import axios from "axios";

export default function Users() {
  const [showModal, setshowModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const [users, setusers] = useState([]);
  const [user, setuser] = useState([]);
  const [offices, setoffices] = useState([]);

  function getUser(id) {
    axios
      .get(`/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => console.log(err));
  }
  function getUsers() {
    axios
      .get("/users/")
      .then((res) => {
        console.log(res.data);
        setusers(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getOffices() {
    axios
      .get("/offices/")
      .then((res) => {
        console.log(res.data);
        setoffices(res.data);
      })
      .catch((err) => console.log(err));
  }

  function filterOffices(e) {
    const officeID = e.target.value;
    axios
      .get(`/filter_by/offices/${officeID}`)
      .then((res) => {
        setusers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    const data = users.filter((user) => user.officeid.id != officeID);
    // setusers(...users, data);
    // console.log(data);
  }

  useEffect(() => {
    getUsers();
    getOffices();
  }, []);

  return (
    <div>
      <AddModal visible={showModal} handleVisibility={setshowModal} />
      <EditModal
        offices={offices}
        visible={showEditModal}
        handleVisibility={setshowEditModal}
      />
      <div className="flex w-full">
        <USidebar />
        <main className="w-full h-screen overflow-y-auto sticky top-0 right-0 ">
          <UTopbar />

          <div className="mt-16 container">
            <div className="">
              <div className="table-section m-auto px-4 py-5 mt-20 w-10/12 border rounded-md">
                <div className="flex justify-between">
                  <div className="flex">
                    <button
                      onClick={() => setshowModal(true)}
                      className="link-btn px-3 py-1 bg-green-600 text-green-100 rounded"
                    >
                      Add User
                    </button>
                    <button className="link-btn px-3 py-1 bg-red-200 text-red-500 ml-3 rounded">
                      Exit
                    </button>
                  </div>
                  <h3 className="font-bold">All Users</h3>
                </div>
                <form className="mt-6" action="">
                  <div className="input-group">
                    <label htmlFor="">Office</label>
                    <select
                      className="ml-2 border border-gray-200 text-sm rounded py-1 px-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-primary-500"
                      name="office"
                      id=""
                      onChange={filterOffices}
                    >
                      <option value="0">All Offices</option>
                      {offices.map((office) => (
                        <option
                          onClick={() => filterOffices(office.id)}
                          value={office.id}
                        >
                          {office.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
                <table className="w-full mt-4 text-sm border">
                  <thead>
                    <tr className="border">
                      <th>s/n</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>User Role</th>
                      <th>Email Address</th>
                      <th>Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, key) => (
                      <>
                        <tr
                          key={key}
                          onClick={() => {
                            getUser(user.id);
                            setshowEditModal(true);
                          }}
                          className={`${
                            user.roleid.title === "Administrator" && user.active
                              ? "bg-green-100"
                              : "bg-white"
                          } ${!user.active ? "bg-red-100" : ""}`}
                        >
                          <td>{key + 1}</td>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>
                            {new Date().getFullYear() -
                              new Date(user.birthdate).getFullYear()}
                          </td>
                          <td>{user.roleid.title}</td>
                          <td>{user.email}</td>
                          <td>{user.officeid.title}</td>
                        </tr>
                        <tr></tr>
                      </>
                    ))}
                  </tbody>
                </table>

                <div className="flex items-center mt-12 space-x-4">
                  <button
                    onClick={() => setshowEditModal(true)}
                    className="btn flex items-center  text-purple-100 bg-purple-500"
                  >
                    <FaPen className="mr-2 inline-block" />
                    Change Role
                  </button>

                  <button
                    onClick={() => setshowEditModal(true)}
                    className="btn flex items-center text-danger-100 bg-danger-500"
                  >
                    <FaTimes className="mr-2 inline-block" />
                    Disable/Enable Login
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
