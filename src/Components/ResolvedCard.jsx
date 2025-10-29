import React from 'react';

const ResolvedCard = ({ resolvedTicketData }) => {
    
    return (
        <div className='p-3 shadow-2xl bg-green-50 space-y-2 rounded-xl'>
            <h1 className='font-bold'>{resolvedTicketData.title}</h1>
            <p className='text-green-400'>✅ Completed</p>
        </div>
    );
};

export default ResolvedCard;