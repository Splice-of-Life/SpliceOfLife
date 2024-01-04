import axios from "axios";
import { useEffect, useState } from "react";
import PopUpForm from "../components/PopUpForm";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [creatures, setCreatures] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const openPopupForUser = (id) => {
    console.log("User ID:", id);
    setSelectedUserId(id);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedUserId(null);

    setShowPopup(false);
  };

  // get all users from the database
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("api/users");
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  // get all creatures from the database
  useEffect(() => {
    const getAllCreatures = async () => {
      try {
        const response = await axios.get("api/creatures");
        const data = response.data;
        setCreatures(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCreatures();
  }, []);

  // handle back button
  const handlebackbtn = () => {
    window.history.back();
  };

  // handle update and delete buttons
  const handleCustomerUpdate = async (id) => {
    console.log("Customer ID:", id);
  };

  const handleCustomerDelete = async (id) => {
    const deleteCustomer = async () => {
      try {
        const response = await axios.delete(`api/users/` + id);
        const data = response.data;
        console.log(data.username, "has been deleted");
      } catch (error) {
        console.log(error);
      }
    };
    deleteCustomer();
  };

  const handleCreatureUpdate = async (id) => {
    console.log("Creature ID:", id);
  };

  const handleCreatureDelete = async (id) => {
    console.log("Creature ID:", id);
  };

  return (
    <>
      <section className="w-screen h-fit py-40 px-80 text-black">
        <h1 className="text-6xl text-white text-center mb-40">ADMIN</h1>
        <div className="flex justify-between px-24 bg-slate-200 rounded-t-md py-10">
          <h1 className="text-4xl font-semibold">Customers</h1>
          <button className="btn5">Create New</button>
        </div>
        <div className="bg-white px-20 py-10 rounded-b-md h-[500px] overflow-y-scroll ">
          {users.map((user) => {
            return (
              <table className="mb-6 bg-slate-50 mx-auto" key={user.id}>
                <tbody>
                  <tr>
                    <td className="w-[15rem] py-4 pl-6">{user.username}</td>
                    <td className="w-[20rem]">{user.email}</td>
                    <td>
                      <button
                        className="btn5 mx-6"
                        onClick={() => openPopupForUser(user.id)}
                      >
                        Update
                      </button>
                      {showPopup && selectedUserId === user.id && (
                        <PopUpForm
                          selectedUserId={selectedUserId}
                          onClose={closePopup}
                        />
                      )}
                      <button
                        onClick={() => handleCustomerDelete(user.id)}
                        className="btn3 mr-6"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
        <div className="w-full flex justify-end pr-20">
          <button className=" mb-40 bg-white w-fit px-12 py-2 rounded-b-md font-semibold">
            See All
          </button>
        </div>
        <div className="flex justify-between px-24 bg-slate-200 rounded-t-md py-10">
          <h1 className="text-4xl font-semibold">Creatures</h1>
          <button className="btn5">Create New</button>
        </div>
        <div className="bg-white px-20 py-10 rounded-b-md h-[500px] overflow-y-scroll">
          {creatures.map((creature) => {
            return (
              <table className="mb-6 bg-slate-50 mx-auto" key={creature.id}>
                <tbody>
                  <tr>
                    <td className="w-[15rem] py-4 pl-6">{creature.breed}</td>
                    <td className="w-[20rem]">
                      In Stock: {creature.inStock ? "Yes" : "No"}
                    </td>
                    <td>
                      <button
                        onClick={() => handleCreatureUpdate(creature.id)}
                        className="btn3 mr-6 my-4"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleCreatureDelete(creature.id)}
                        className="btn3 mr-6"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
        <div className="w-full flex justify-end pr-20">
          <button className=" mb-40 bg-white w-fit px-12 py-2 rounded-b-md font-semibold">
            See All
          </button>
        </div>
        <button onClick={handlebackbtn} className="btn4 mt-8 ">
          Back
        </button>
      </section>
    </>
  );
};

export default Admin;
