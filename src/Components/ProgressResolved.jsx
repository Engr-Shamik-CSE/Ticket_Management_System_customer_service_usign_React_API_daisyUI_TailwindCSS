
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'

const ProgressResolved = ({clickedTickets,resolvedTickets}) => {


    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto pt-2 lg:pt-15'>
            {/* Status Cards Container */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between items-center text-white w-full px-2 sm:px-0">

                {/* In Progress Card */}
                <div
                    className="w-full lg:w-6/12 h-35 sm:h-40 md:h-45 lg:h-80 flex justify-between items-center rounded-xl px-4 overflow-hidden relative"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(99,46,227,0.90), rgba(144,85,238,0.90))",
                    }}
                >
                    {/* Left Shape */}
                    <img
                        src={vector1}
                        alt="shape"
                        className="h-full object-contain opacity-40 animate-float-left"
                    />

                    {/* Center Content */}
                    <div className="text-center absolute left-1/2 -translate-x-1/2 ">
                        <p className="text-base sm:text-lg md:text-xl font-medium">In-Progress</p>
                        <p className="text-2xl lg:text-5xl font-bold pt-2">{clickedTickets.length}</p>
                    </div>

                    {/* Right Shape */}
                    <img
                        src={vector2}
                        alt="shape"
                        className="h-full object-contain opacity-40 scale-x-[-1] animate-float-right"
                    />
                </div>

                {/* Resolved Card */}
                <div
                    className="w-full lg:w-6/12 h-35 sm:h-40 md:h-45 lg:h-80 flex justify-between items-center rounded-xl px-4 overflow-hidden relative"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(84,207,103,0.85), rgba(0,130,122,0.85))",
                    }}
                >
                    {/* Left Shape */}
                    <img
                        src={vector1}
                        alt="shape"
                        className="h-full object-contain opacity-40 animate-float-left"
                    />

                    {/* Center Content */}
                    <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <p className="text-base sm:text-lg md:text-xl font-medium">Resolved</p>
                        <p className="text-2xl lg:text-5xl font-bold pt-2">{resolvedTickets.length}</p>
                    </div>

                    {/* Right Shape */}
                    <img
                        src={vector2}
                        alt="shape"
                        className="h-full object-contain opacity-40 scale-x-[-1] animate-float-left"
                    />
                </div>

            </div>
        </div>
        </div>
    );
};

export default ProgressResolved;