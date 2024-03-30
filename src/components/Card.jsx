import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./hooks/axiosPublic/AxiosPublic";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Authcontext } from "./provider/Authprovider";
import toast from "react-hot-toast";
import Update from "./Update";

const Card = () => {
  const { user } = useContext(Authcontext);
  const axiosPublic = useAxiosPublic();
  const [taskData, setTaskData] = useState(null);
  // console.log(taskData);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        if (!user || !user.email) {
          return;
        }
        const response = await axiosPublic.get(
          `/alltasks?email=${user?.email}`
        );
        setTaskData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTaskData();
  }, [axiosPublic, user]);
  //   delet card

  const handelDelete = (id) => {
    // console.log("Deleting task with ID:", id);
    axiosPublic
      .delete(`/alltasks/${id}`)
      .then((response) => {
        toast.success("Task deletion successful");
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const taskStatus = (status) => {
    if (!taskData) return null;
    const filteredTasks = taskData.filter((task) => task.status === status);
    // console.log(filteredTasks);
    return (
      <div key={status}>
        <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl">
          {status}
        </h3>
        {filteredTasks?.map((task) => (
          <div
            key={task._id}
            className="border-2 px-3 rounded-2xl h-auto w-[220px] py-2"
          >
            <div className="bg-gray-300 px-4 py-3 rounded-lg">
              <h4 className="font-semibold flex justify-between items-center">
                {task.title} <span>{task.priority}</span>
              </h4>
              <hr className="w-full mx-auto my-2 border-black" />
              <p className="mt-2 mb-4">{task.description}</p>
              <div className="text-sm flex items-center justify-between font-medium">
                <span>{task.assignee}</span>
                <div className="dropdown ">
                  <div tabIndex={0}>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-1 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-28"
                  >   
                    <li>
                      {/* <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-green-600 px-6 py-2 rounded-full">Add new task</button> */}
                      <a
                        onClick={() =>
                          document.getElementById("my_modal_7").showModal()
                        }>
                        Edit
                      </a>
                      <Update></Update>
                    </li>
                    <li>
                      <a onClick={() => handelDelete(task._id)}>Delet</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">
                {task.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const dataListing = [
    "Pending",
    "InProgress",
    "Completed",
    "Deployed",
    "Deferred",
  ];

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full mx-auto justify-between gap-5">
        {dataListing.map((status) => taskStatus(status))}
      </div>
    </div>
  );
};

export default Card;
