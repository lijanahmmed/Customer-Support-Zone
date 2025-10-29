import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { toast } from 'react-toastify';

const Ticket = ({ ticket, progressTicket, setProgressTicket }) => {

    const handleProgress = (ticket) => {
        let updateTicket;
        if(ticket.status == "Open"){
            updateTicket = ticket
            updateTicket.status = "In-Progress"
        }
        setProgressTicket([...progressTicket, ticket])
        
        toast.info("In- Progress")
    }

    return (
        <div onClick={() => handleProgress(ticket)} className='p-3 shadow-2xl bg-white space-y-2 rounded-xl cursor-pointer'>
            <div className='flex justify-between items-center'>
                <p className='font-bold'>{ticket.title}</p>
                {ticket.status == "Open" ? <p className='px-3 py-2 bg-green-200 text-green-900 rounded-4xl'>🟢Open</p> : ticket.status == "In-Progress" ? <p className='px-3 py-2 bg-yellow-100 text-yellow-800 rounded-4xl'>🟡In-Progress</p> : ""}
            </div>
            <p className='text-gray-500'>{ticket.description}</p>
            <div className='flex justify-between items-center text-gray-500 text-sm'>
                <div className='flex gap-3 items-center'>
                    <p>#{ticket.ticketId}</p>
                    <p className={ticket.priority == "HIGH PRIORITY" ? "text-red-600" : ticket.priority == "MEDIUM PRIORITY" ? "text-yellow-500" : "text-green-600"}>{ticket.priority}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <p>{ticket.customer_name}</p>
                    <p className='flex gap-1 items-center'><span><MdOutlineDateRange className='inline text-lg' /></span> <span> {ticket.date}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;