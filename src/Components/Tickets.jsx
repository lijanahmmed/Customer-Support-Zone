import React from 'react';
import Ticket from './Ticket';

const Tickets = ({ ticketCard, progressTicket, setProgressTicket }) => {

    return (
        <div>
            <h1 className='text-xl font-bold mb-3'>Customer Tickets</h1>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    ticketCard.map(ticket => <Ticket progressTicket={progressTicket} setProgressTicket={setProgressTicket} key={ticket.ticketId} ticket={ticket}></Ticket>)
                }
            </div>
        </div>
    );
};

export default Tickets;