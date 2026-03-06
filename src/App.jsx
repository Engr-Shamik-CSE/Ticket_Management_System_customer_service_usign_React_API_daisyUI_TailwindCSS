import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import ProgressResolved from './Components/ProgressResolved'
import StatusResolvedTicket from './Components/StatusResolvedTicket/StatusResolvedTicket'

function App() {

  const [clickedTickets, setClickedTickets] = useState([]);
  const [allTickets, setAllTickets] = useState([]); // NEW: State for all tickets

  useEffect(() => {  // NEW: Fetch inside App.jsx
    fetch('./ticketData.json')
      .then(res => res.json())
      .then(data => setAllTickets(data))
      .catch(err => console.error("Error fetching tickets:", err));
  }, []);

  const removeCompleteTask = (clickedTicket) => {
    // Remove from clickedTickets
    setClickedTickets(clickedTickets.filter((ticket) => ticket.id !== clickedTicket.id));

    // NEW: Also remove from allTickets (CustomerTickets view)
    setAllTickets(allTickets.filter((ticket) => ticket.id !== clickedTicket.id));
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='w-full bg-[#F5F5F5]'>
        <ProgressResolved
          clickedTickets={clickedTickets}
        ></ProgressResolved>

        <div className='flex flex-col lg:flex-row ticketStatus w-11/12 md:w-10/12 mx-auto '>
          <div className='lg:w-8/12  py-5 lg:py-20'>
            <h2 className='text-xl font-semibold pb-4'>Customer Tickets</h2>
            <CustomerTickets
              allTickets={allTickets}
              clickedTickets={clickedTickets}
              setClickedTickets={setClickedTickets}
            ></CustomerTickets>
          </div>
          <div className='rightContent lg:w-4/12 py-5 lg:py-20 lg:px-5'>
            <StatusResolvedTicket
              clickedTickets={clickedTickets}
              removeCompleteTask={removeCompleteTask}
            ></StatusResolvedTicket>
          </div>
        </div>
      </div>


      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />


    </>
  )
}

export default App
