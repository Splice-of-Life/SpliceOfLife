import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [creatures, setCreatures] = useState([]);

  // get all users from the database
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("api/users");
        const data = response.data;
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  // get all creatures from the database
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("api/creatures");
        const data = response.data;
        console.log(data);
        setCreatures(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
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
    console.log("Customer ID:", id);
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
          <button className="btn4">Create New</button>
        </div>
        <div className="bg-white px-20 py-10 rounded-b-md h-[500px] overflow-y-scroll ">
          {users.map((user) => {
            return (
              <table className="mb-6 bg-slate-50 mx-auto" key={user.id}>
                <tbody>
                  <tr>
                    <td className="w-[15rem] ">{user.username}</td>
                    <td className="w-[20rem]">{user.email}</td>
                    <td>
                      <button
                        onClick={() => handleCustomerUpdate(user.id)}
                        className="btn3 mr-6 my-4"
                      >
                        Update
                      </button>
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
          <button className="btn4">Create New</button>
        </div>
        <div className="bg-white px-20 py-10 rounded-b-md h-[500px] overflow-y-scroll">
          {creatures.map((creature) => {
            return (
              <table className="mb-6 bg-slate-50 mx-auto" key={creature.id}>
                <tbody>
                  <tr>
                    <td className="w-[15rem] ">{creature.breed}</td>
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
