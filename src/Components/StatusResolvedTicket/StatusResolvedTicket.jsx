import React from 'react';
import ClickedTicketTask from '../ClickedTicketTask/ClickedTicketTask'
import ResolvedTicketCard from '../ResolvedTicketCard/ResolvedTicketCard';

const StatusResolvedTicket = ({ clickedTickets, removeCompleteTask, resolvedTickets }) => {
    return (
        <div className='h-auto flex flex-col space-y-5'>
            <div className='bg-[rgba(99,46,227,0.10)] min-h-50 lg:min-h-80 p-5 lg:p-10 rounded-3xl shadow'>
                <h2 className='text-xl font-semibold pb-4'>Task Status</h2>
                <div className="taskBody">
                    {clickedTickets.length === 0 ? (
                        <p>Select a ticket to add to Task Status</p>
                    ) : (
                        clickedTickets.map(clickedTicket => <ClickedTicketTask
                            key={clickedTicket.id}
                            clickedTicket={clickedTicket}
                            removeCompleteTask={removeCompleteTask}
                        ></ClickedTicketTask>)
                    )}
                </div>

            </div>
            <div className='bg-[rgba(0,130,122,0.10)] p-5 lg:p-10 rounded-3xl min-h-50 lg:min-h-80 shadow'>
                <h2 className='text-xl font-semibold pb-4'>Resolved Task</h2>
                <div className='resolvedTaskBody'>
                    {resolvedTickets.length === 0 ? (
                        <p>No resolved tasks yet.</p>
                    ) : (
                        resolvedTickets.map(resolvedTicket => (
                            <ResolvedTicketCard
                                key={resolvedTicket.id}
                                ticket={resolvedTicket}
                            ></ResolvedTicketCard>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatusResolvedTicket;