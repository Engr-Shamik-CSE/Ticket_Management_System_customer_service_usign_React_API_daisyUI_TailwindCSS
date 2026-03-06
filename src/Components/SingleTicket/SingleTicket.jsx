import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { toast } from 'react-toastify';
const SingleTicket = ({ t, clickedTickets, setClickedTickets }) => {
    
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = (t) => {
        if (!isClicked) {
            setClickedTickets([...clickedTickets, t]); // Must add [] sybol as it's an array of objects
            setIsClicked(true);
            toast(
                <div>
                    🚩 "<span className="font-bold">{t.title}</span>" is added to Task Status
                </div>
            );
        }
    }

    return (
        <div key={t.id}
            className={`card bg-white shadow-lg rounded-2xl cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-101 active:scale-89 relative overflow-hidden 
            ${isClicked ? 'opacity-30 scale-95 bg-purple-600 pointer-events-none' : ''}`}
            onClick={() => handleCardClick(t)}
        >
            {/* Card Body */}
            <div className="card-body">
                {/* Title and Status */}
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{t.title}</h2>

                    {/* Status Badge */}
                    <div
                        className={`flex relative gap-2 items-center rounded-full text-xs badge p-5 ${t.status === "In-Progress"
                            ? "bg-[#febb0c]/30"
                            : "bg-[#02A53B]/30"
                            }`}
                    >
                        <span
                            className={`absolute inline-flex h-9/12 w-8/12 animate-ping rounded-full opacity-75 ${t.status === "In-Progress"
                                ? "bg-[#febb0c] shadow-[0_0_8px_1px_#febb0c]"
                                : "bg-[#02A53B] shadow-[0_0_8px_1px_#02A53B]"
                                }`}
                        ></span>
                        <span
                            className={`relative inline-flex h-3 w-3 rounded-full opacity-75 ${t.status === "In-Progress"
                                ? "bg-[#febb0c] shadow-[0_0_8px_1px_#febb0c]"
                                : "bg-[#02A53B] shadow-[0_0_8px_1px_#02A53B]"
                                }`}
                        ></span>
                        <span
                            className={`font-semibold ${t.status === "In-Progress" ? "text-[#9C7700]" : "text-[#0b5e06]"
                                }`}
                        >
                            {t.status}
                        </span>
                    </div>
                </div>

                {/* Ticket Description */}
                <p>{t.description}</p>

                {/* Card Footer */}
                <div className="card-actions justify-between">
                    <span>#{t.id}</span>
                    <span
                        className={`font-normal ${t.priority === "HIGH"
                            ? "text-[#f83044]"
                            : t.priority === "MEDIUM"
                                ? "text-[#febb0c]"
                                : "text-[#02a53b]"
                            }`}
                    >
                        {t.priority} PRIORITY
                    </span>
                    <span>{t.customer}</span>
                    <div className="flex gap-2 justify-center items-center">
                        <CalendarDays size={15} color="#7d7F7C" />
                        {t.createdAt}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleTicket;