import React from 'react';
import ResolvedCard from './ResolvedCard';

const Resolved = ({resolvedTicket}) => {


    return (
        <div>
            <h1 className='text-xl font-bold mb-5'>Resolved Task</h1>

            {resolvedTicket.length > 0 ?
                <div className='p-3 shadow-2xl bg-white rounded-xl space-y-3'>
                    {
                        resolvedTicket.map(resolvedTicketData => <ResolvedCard key={resolvedTicketData.ticketId} resolvedTicketData={resolvedTicketData}></ResolvedCard>)
                    }
                </div> : <p className='text-gray-500'>No resolved tasks yet.</p>}

        </div>
    );
};

export default Resolved;