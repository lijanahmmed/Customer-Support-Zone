import React from 'react';
import { toast } from 'react-toastify';

const StatusCard = ({ progressTicketData, resolvedTicket, setResolvedTicket, setProgressTicket, ticketCard, setTicketCard }) => {
    const handleResolved = (progressTicketData) => {
        setResolvedTicket([...resolvedTicket, progressTicketData]);
        setProgressTicket(prev => prev.filter(progressData => progressData.ticketId != `${progressTicketData.ticketId}`))
        const remainingCard = ticketCard.filter(card => card.ticketId !== progressTicketData.ticketId);
        setTicketCard(remainingCard)
        toast.success("Completed")
    }

    return (
        <div className='p-3 shadow-2xl bg-white space-y-2 rounded-xl'>
            <h1 className='font-bold'>{progressTicketData.title}</h1>
            <button onClick={() => handleResolved(progressTicketData)} className='w-full text-white bg-green-500 rounded-lg p-2 cursor-pointer'>Complete</button>
        </div>
    );
};

export default StatusCard;