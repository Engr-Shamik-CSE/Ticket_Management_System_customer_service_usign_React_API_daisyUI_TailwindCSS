import React from 'react';
import SingleTicket from '../SingleTicket/SingleTicket';

const CustomerTickets = ({allTickets, clickedTickets , setClickedTickets}) => {
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6'>
            {
                allTickets.map((t)=><SingleTicket 
                key={t.id} 
                t={t} 
                clickedTickets={clickedTickets}
                setClickedTickets={setClickedTickets}
                ></SingleTicket>)
            }
        </div>
    );
};

export default CustomerTickets;