// import { BsThreeDotsVertical } from "react-icons/bs";
// import useAxiosPublic from "./hooks/axiosPublic/AxiosPublic";
// import { useEffect, useState } from "react";

// const Card = () => {
//     const axiosPublic = useAxiosPublic()
//     const [taskData, setTaskUserData] = useState(null); 
//        console.log(taskData);

//     useEffect(() => {
//         const fetchUserData = async () => {
//           try {
//             const response = await axiosPublic.get("/alltasks");
//             const data = response.data; 
//             setTaskUserData(filteredTasks); 
//           } catch (error) {
//             console.error('Error fetching user data:', error);
//           }
//         };
//           fetchUserData();
//       }, [axiosPublic]);
// // 


// const renderTasksByStatus = (status) => {
//     if (!taskData) return null;

//     return taskData
//       .filter(task => task.status === status)
//       .map(task => (
//         <div key={task._id} className="border-2 px-3 rounded-2xl h-auto w-[220px] py-2">
//           <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl">{status}</h3>
//           <div className="bg-gray-300 px-4 py-3 rounded-lg">
//             <h4 className="font-semibold flex justify-between items-center">{task.title} <span>{task.priority}</span></h4>
//             <hr className="w-full mx-auto my-2 border-black" />
//             <p className="mt-2 mb-4">{task.description}</p>
//             <h3 className="text-sm flex items-center justify-between font-medium">
//               <span>{task.assignee}</span>
//               <span className="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
//             </h3>
//             <button className="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">{task.status}</button>
//           </div>
//         </div>
//       ));
//   };

//   const statusList = ['PANDING', 'IN PROGRESS', 'COMPLETED', 'DEPLOYED', 'DEFERENT'];













//     return (
//         <div className=" mt-12">

//             {/* <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 grid-cols-1 w-fullmx-auto justify-between gap-5"> */}
//                 {/* <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
//                     <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

//                     <div class="bg-gray-300 px-4 py-3 rounded-lg">
//                         <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
//                         <hr class="w-full mx-auto my-2 border-black" />
//                         <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <h3 class="text-sm flex items-center justify-between font-medium">
//                             <span>@hridoy roy</span>
//                             <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
//                         </h3>
//                         <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
//                     </div>
//                 </div> */}
//                 {/* in progress */}
//                 {/* <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
//                     <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> In Progrose </h3>

//                     <div class="bg-gray-300 px-4 py-3 rounded-lg">
//                         <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
//                         <hr class="w-full mx-auto my-2 border-black" />
//                         <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <h3 class="text-sm flex items-center justify-between font-medium">
//                             <span>@hridoy roy</span>
//                             <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
//                         </h3>
//                         <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
//                     </div>
//                 </div> */}

//                 {/*  completed */}
//                 {/* <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
//                     <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

//                     <div class="bg-gray-300 px-4 py-3 rounded-lg">
//                         <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
//                         <hr class="w-full mx-auto my-2 border-black" />
//                         <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <h3 class="text-sm flex items-center justify-between font-medium">
//                             <span>@hridoy roy</span>
//                             <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
//                         </h3>
//                         <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
//                     </div>
//                 </div> */}
//                 {/*  Deployed */}
//                 {/* <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
//                     <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

//                     <div class="bg-gray-300 px-4 py-3 rounded-lg">
//                         <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
//                         <hr class="w-full mx-auto my-2 border-black" />
//                         <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <h3 class="text-sm flex items-center justify-between font-medium">
//                             <span>@hridoy roy</span>
//                             <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
//                         </h3>
//                         <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
//                     </div>
//                 </div> */}
//                 {/*  Defarent  */}
//                 {/* <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
//                     <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

//                     <div class="bg-gray-300 px-4 py-3 rounded-lg">
//                         <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
//                         <hr class="w-full mx-auto my-2 border-black" />
//                         <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                         <h3 class="text-sm flex items-center justify-between font-medium">
//                             <span>@hridoy roy</span>
//                             <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
//                         </h3>
//                         <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
//                     </div>
//                 </div> */}

                

//             {/* </div> */}


//             <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full mx-auto justify-between gap-5">
//         {statusList.map(status => (
//           <div key={status}>
//             {renderTasksByStatus(status)}
//           </div>
//         ))}
//       </div>
   




//         </div>
//     );
// };

// export default Card;






import { useEffect, useState } from "react";
import useAxiosPublic from "./hooks/axiosPublic/AxiosPublic";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
    const axiosPublic = useAxiosPublic();
    const [taskData, setTaskData] = useState(null);
    console.log(taskData);

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const response = await axiosPublic.get("/alltasks");
                setTaskData(response.data);
            } catch (error) {
                console.error('Error fetching task data:', error);
            }
        };
        fetchTaskData();
    }, [axiosPublic]);

    const taskStatus = (status) => {
        if (!taskData) return null;
        const filteredTasks = taskData.filter(task => task.status === status);
        console.log(filteredTasks);
        return (
            <div key={status}>
                <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl">{status}</h3>
                {filteredTasks.map(task => (
                    <div key={task._id} className="border-2 px-3 rounded-2xl h-auto w-[220px] py-2">
                        <div className="bg-gray-300 px-4 py-3 rounded-lg">
                            <h4 className="font-semibold flex justify-between items-center">{task.title} <span>{task.priority}</span></h4>
                            <hr className="w-full mx-auto my-2 border-black" />
                            <p className="mt-2 mb-4">{task.description}</p>
                            <h3 className="text-sm flex items-center justify-between font-medium">
                                <span>{task.assignee}</span>
                                <span className="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
                            </h3>
                            <button className="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">{task.status}</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const dataListing = ['Assign', 'InProgress', 'Completed', 'Deployed', 'Deferred'];

    return (
        <div className="mt-12">
            <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full mx-auto justify-between gap-5">
                {dataListing.map(status => (
                    taskStatus(status)
                ))}
            </div>
        </div>
    );
};

export default Card;
