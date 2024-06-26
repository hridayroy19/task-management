import React, { useContext, } from 'react';
import { Authcontext } from './provider/Authprovider';
import useAxiosPublic from './hooks/axiosPublic/AxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const { user}= useContext(Authcontext)
//   console.log(user?.email);
  const axiosPublic = useAxiosPublic()
 const navigate = useNavigate()

    const handelAdd = async (e) =>{
        e.preventDefault()
        const from = e.target
        const title = from.title.value
        const description = from.description.value
        const deadline = from.deadline.value
        const assign = from.assign.value
        const priority = from.priority.value
        const  status = from. status.value
        const addTask = {
            title,description,
            deadline,assign,
            priority, status ,           
            email:user?.email
        }
        console.log(addTask);
        try {
            // Send the task data 
            const response = await axiosPublic.post('/alltask', addTask);
            console.log(response.data);
            toast.success("succesfully data added")
           navigate("/")
             
          } catch (error) {
            console.error(error);
          }
    }



    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box bg-[#e4e6e3]">
                    <div className="flex justify-between px-3 ">
                        <p></p>
                        <form method="dialog">
                            <button className="btn btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </form>
                    </div>
                    <form onSubmit={handelAdd}>
                        <div className="flex flex-col mb-5">
                            <label className="mb-2">
                                Title
                            </label>
                            <input
                                className="w-full px-2 py-2 rounded-md"
                                type="text"
                                name="title"
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label className="mb-2">
                                Description
                            </label>
                            <textarea
                                className="w-full px-2 py-2 rounded-md"
                                type="text"
                                name="description"
                            />
                        </div>
                        <div className=" hidden flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Deadline
                            </label>
                            <input
                                className="w-full px-2  py-1 rounded-md"
                                type="date"
                                name="deadline"
                            />
                        </div>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="title" className="mb-2">
                                Assign
                            </label>
                            <input
                                className="w-full px-2 py-2 rounded-md"
                                type="text"
                                name="assign"
                            />
                        </div>
                        <div className='flex justify-between mt-3 mb-2'>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="title" className="mb-2">
                                    Priority
                                </label>
                                <select
                                    className="w-full px-1 rounded-md"
                                    name="priority"
                                >
                                    <option defaultValue value="P0">
                                        P0
                                    </option>
                                    <option value="P1">P1</option>
                                    <option value="P2" > P2</option>
                                </select>
                            </div>
                            <div className=" hidden flex-col mb-5">
                                <label htmlFor="title" className="mb-2">
                                    Status
                                </label>
                                <input type="text" name='status' value={"Pending"} />
                                {/* <select
                                    className="w-full px-1 rounded-md"
                                    name="status"
                                >
                                    <option value="Assign"> Panding </option>
                                    <option value="InProgress"> In Progress </option>
                                    <option value="Completed"> Completed </option>
                                    <option value="Deployed"> Deployed </option>
                                    <option value="Deferred"> Deferred </option>
                                </select> */}
                            </div>
                        </div>
                       <div className=' flex justify-end'>
                       <button type="submit" className="bg-green-600 px-4 py-1 sm:px-6 sm:py-3 rounded-lg text-white text-sm sm:text-base">
                            Submit
                        </button>
                       </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Add;
