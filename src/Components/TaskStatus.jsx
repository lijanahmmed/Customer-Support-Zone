import React from 'react';
import StatusCard from './statusCard';

const TaskStatus = ({ progressTicket, resolvedTicket, setResolvedTicket, setProgressTicket, ticketsData, ticketCard, setTicketCard }) => {
    return (
        <div>

            <h1 className='text-xl font-bold mb-8'>Task Status</h1>

            {progressTicket.length > 0 ?
                <div className='p-3 shadow-2xl bg-white rounded-xl space-y-3'>
                    {
                        progressTicket.map(progressTicketData => <StatusCard setTicketCard={setTicketCard} ticketCard={ticketCard} ticketsData={ticketsData} setProgressTicket={setProgressTicket} setResolvedTicket={setResolvedTicket} resolvedTicket={resolvedTicket} key={progressTicketData.ticketId} progressTicketData={progressTicketData}></StatusCard>)
                    }
                </div> : <p className='text-gray-500'>Select a ticket to add to Task Status</p>}
        </div>
    );
};

export default TaskStatus;