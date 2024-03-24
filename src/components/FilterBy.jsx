import Add from "./Add";

const FilterBy = () => {
    return (
  <div>
          <div className=" flex justify-between items-center ">

<div className="flex gap-7 items-center">
    <div >
        <h3> filter By :</h3>
    </div>
    <div className="flex gap-5">
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
    </div>
</div>
<div>
<button onClick={()=>document.getElementById('my_modal_5').showModal()} className="bg-green-600 px-6 py-2 rounded-full">Add new task</button>
<Add></Add>
</div>    
</div>
<h1 className="mt-6"> short by : <span className="ml-3"> <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" /></span></h1>
  </div>
    );
};

export default FilterBy;