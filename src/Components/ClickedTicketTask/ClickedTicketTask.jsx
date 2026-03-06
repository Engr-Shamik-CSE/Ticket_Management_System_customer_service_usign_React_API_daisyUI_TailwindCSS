import React from 'react';

const ClickedTicketTask = ({clickedTicket , removeCompleteTask}) => {
    
    const handleRemoveComplete = () =>{
        removeCompleteTask(clickedTicket);
    }

    return (
        <div className='card-body w-11/12 lg:w-10/12 mx-auto bg-white shadow-2xs rounded-2xl text-center my-2 transform transition-transform duration-200 ease-in-out hover:scale-101'>
            <h2 className='card-title'>{clickedTicket.title}</h2>
            <button onClick={handleRemoveComplete} className='w-full btn btn-success text-white transform transition-transform duration-200 ease-in-out hover:scale-101 active:scale-93 relative overflow-hidden'>Complete</button>
        </div>
    );
};

export default ClickedTicketTask;