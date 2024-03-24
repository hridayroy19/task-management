import React from 'react';

const Add = () => {
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">
                <div className="flex justify-between px-3 ">
                    <p></p>
                    <form method="dialog">
                        <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </form>
                </div>

                <form className="card-body " method="dialog">
                    <h3 className="font-bold text-2xl">Please Login </h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-green text-white">Login</button>
                    </div>
                </form>                                 
            </div>
          
        </dialog>
        </div>
    );
};

export default Add;