import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
    return (
        <div className=" mt-12">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 w-fullmx-auto justify-between gap-5">
                <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
                    <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

                    <div class="bg-gray-300 px-4 py-3 rounded-lg">
                        <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
                        <hr class="w-full mx-auto my-2 border-black" />
                        <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 class="text-sm flex items-center justify-between font-medium">
                            <span>@hridoy roy</span>
                            <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
                        </h3>
                        <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
                    </div>
                </div>
                {/* in progress */}
                <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
                    <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> In Progrose </h3>

                    <div class="bg-gray-300 px-4 py-3 rounded-lg">
                        <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
                        <hr class="w-full mx-auto my-2 border-black" />
                        <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 class="text-sm flex items-center justify-between font-medium">
                            <span>@hridoy roy</span>
                            <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
                        </h3>
                        <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
                    </div>
                </div>

                {/*  completed */}
                <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
                    <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

                    <div class="bg-gray-300 px-4 py-3 rounded-lg">
                        <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
                        <hr class="w-full mx-auto my-2 border-black" />
                        <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 class="text-sm flex items-center justify-between font-medium">
                            <span>@hridoy roy</span>
                            <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
                        </h3>
                        <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
                    </div>
                </div>
                {/*  Deployed */}
                <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
                    <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

                    <div class="bg-gray-300 px-4 py-3 rounded-lg">
                        <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
                        <hr class="w-full mx-auto my-2 border-black" />
                        <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 class="text-sm flex items-center justify-between font-medium">
                            <span>@hridoy roy</span>
                            <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
                        </h3>
                        <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
                    </div>
                </div>
                {/*  Defarent  */}
                <div className="border-2 px-3  rounded-2xl h-auto  w-[220px] py-2">
                    <h3 className="text-center p-1 mb-4 bg-green-400 rounded-xl"> Panding </h3>

                    <div class="bg-gray-300 px-4 py-3 rounded-lg">
                        <h4 class="font-semibold flex justify-between items-center">Task 1 <span>pro</span></h4>
                        <hr class="w-full mx-auto my-2 border-black" />
                        <p class="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 class="text-sm flex items-center justify-between font-medium">
                            <span>@hridoy roy</span>
                            <span class="text-xl bg-gray-400 rounded-full p-1"> <BsThreeDotsVertical /> </span>
                        </h3>
                        <button class="bg-green-600 px-3 py-1 rounded-lg mt-3 text-white">Completed</button>
                    </div>
                </div>

                

            </div>
        </div>
    );
};

export default Card;