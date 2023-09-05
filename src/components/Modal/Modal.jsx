import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const { image_link, description, pricing, integrations, features } = props.singleData;
    console.log(pricing);

    return (
        <div>

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                    {/* card */}
                    <div className="card card-compact w-full  bg-base-100">
                        <figure><img className='w-118 h-64' src={image_link && image_link[0]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='lg:flex justify-between mb-6 sm:grid grid-cols-1 '>


                                <div>
                                    <h1 className='text-xl font-bold'>Integrations:</h1>
                                    {integrations &&
                                        integrations.map((int) => <p>{int ? int : "not found"}</p>)}

                                </div>
                                <div>

                                    {pricing?.map((item, index) => <p>{index + 1}.{item.price}</p>
                                    )}
                                </div>
                                <div>
                                    {/* features */}
                                    <h1 className='text-xl font-bold'>Features:</h1>
                                    {
                                        Object.values(features || {}).map((value) => (
                                            <p>{value.feature_name}</p>
                                        ))
                                    }
                                </div>

                            </div>
                            <p className='text-xl'>{description ? description : 'not found'}</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                    {/* if there is a button, it will close the modal */}
                    <div className='text-right'>
                        <button className="btn-primary p-2 my-1">Close</button>
                    </div>

                </form>
            </dialog>
        </div >
    );
};

export default Modal;