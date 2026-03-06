import React from 'react';
import { toast } from 'react-toastify';
import { AlarmClockCheck } from 'lucide-react';

const ClickedTicketTask = ({ clickedTicket, removeCompleteTask }) => {

    const handleRemoveComplete = () => {
        removeCompleteTask(clickedTicket);
        toast(
            <div className='flex items-center gap-3'>
                <AlarmClockCheck size={55} color="#1fd655" /> 
                 <span className="text-black"><span className="font-bold">{clickedTicket.title}</span>" task is completed successfully!!</span>
            </div>
        );
    }

    return (
        <div className='card-body w-11/12 lg:w-10/12 mx-auto bg-white shadow-2xs rounded-2xl text-center my-2 transform transition-transform duration-200 ease-in-out hover:scale-101'>
            <h2 className='card-title'>{clickedTicket.title}</h2>
            <button onClick={handleRemoveComplete} className='w-full btn btn-success text-white transform transition-transform duration-200 ease-in-out hover:scale-101 active:scale-93 relative overflow-hidden'>Complete</button>
        </div>
    );
};

export default ClickedTicketTask;