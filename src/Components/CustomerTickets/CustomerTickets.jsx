import React from 'react';
import SingleTicket from '../SingleTicket/SingleTicket';

const CustomerTickets = ({ allTickets, clickedTickets, setClickedTickets }) => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6'>
            {
                allTickets.length === 0 ? (
                    <div className='min-h-200 w-full bg-cyan-300/30 rounded-4xl p-5 col-span-2 text-center flext items-center pt-95 '>
                        <h2 className='text-2xl font-bold text-purple-600'>There is no ticket card to execute. 🎟️🎫</h2>
                    </div> 
                    
                ) : (
                    allTickets.map((t) => <SingleTicket
                        key={t.id}
                        t={t}
                        clickedTickets={clickedTickets}
                        setClickedTickets={setClickedTickets}
                    ></SingleTicket>)
                )
            }
        </div>
    );
};

export default CustomerTickets;