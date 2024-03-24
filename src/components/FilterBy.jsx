// import Add from "./Add";

// const FilterBy = () => {
//     return (
//   <div>
//           <div className=" flex justify-between items-center ">

// <div className="flex gap-7 items-center">
//     <div >
//         <h3> filter By :</h3>
//     </div>
//     <div className="flex gap-5">
//     <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
//     <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
//     <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
//     </div>
// </div>
// <div>
// <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="bg-green-600 px-6 py-2 rounded-full">Add new task</button>
// <Add></Add>
// </div>    
// </div>
// <h1 className="mt-6"> short by : <span className="ml-3"> <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" /></span></h1>
//   </div>
//     );
// };

// export default FilterBy;

import Add from "./Add";

const FilterBy = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                <div className="flex items-center">
                    <h3 className="mr-4">Filter By:</h3>
                    <div className="flex gap-2 sm:gap-5">
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                </div>
                <div>
                    {/* <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-green-600 px-6 py-2 rounded-full">Add new task</button> */}
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white text-sm sm:text-base">
    Add new task
</button>
                    <Add></Add>
                </div>
            </div>
            <div className="mt-4 sm:mt-6">
                <h1 className="text-lg">Sort by: <span className="ml-3"><input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" /></span></h1>
            </div>
        </div>
    );
};

export default FilterBy;
