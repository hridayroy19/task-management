import Add from "./Add";

const FilterBy = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex items-center">
          <h3 className="mr-4">Filter By:</h3>
          <div className="grid lg:grid-cols-3 grid-cols-2  gap-2 sm:gap-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
        </div>
        <div>
          {/* <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-green-600 px-6 py-2 rounded-full">Add new task</button> */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="bg-green-600 px-4 py-2 md:hidden lg:block sm:px-6 sm:py-3 rounded-full text-white text-sm sm:text-base"
          >
            Add new task
          </button>
          <Add></Add>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
