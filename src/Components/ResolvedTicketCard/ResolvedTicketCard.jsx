import React from 'react';
import { CheckCircle } from 'lucide-react';

const ResolvedTicketCard = ({ ticket }) => {
    return (
        <div className='card-body w-11/12 lg:w-10/12 mx-auto bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl text-center my-2 transform transition-transform duration-200 ease-in-out hover:scale-101 shadow-sm'>
            <div className='flex items-center justify-between p-2'>
                <div className='flex items-center gap-2'>
                    <CheckCircle className='text-green-600' size={20} />
                    <h2 className='font-semibold text-gray-700'>{ticket.title}</h2>
                </div>
                <span className='text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full'>Resolved ✓</span>
            </div>
        </div>
    );
};

export default ResolvedTicketCard;