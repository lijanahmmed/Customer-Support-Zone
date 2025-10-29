import React, { use, useState } from 'react';
import Banner from './Banner';
import Tickets from './Tickets';
import TaskStatus from './TaskStatus';
import Resolved from './Resolved';

const MainSection = ({ promiseData }) => {
    let ticketsData = use(promiseData);
    const [progressTicket, setProgressTicket] = useState([]);
    const [resolvedTicket, setResolvedTicket] = useState([]);
    const [ticketCard, setTicketCard] = useState(ticketsData)


    return (
        <div>
            <Banner resolvedTicket={resolvedTicket} progressTicket={progressTicket}></Banner>
            <div className='w-11/12 md:max-w-10/12 mx-auto mt-15 lg:grid grid-cols-12 gap-5'>
                <div className='col-span-9'>
                    <Tickets progressTicket={progressTicket} setProgressTicket={setProgressTicket} ticketCard={ticketCard}></Tickets>
                </div>
                <div className='mt-15 lg:mt-0 col-span-3 space-y-15'>
                    <TaskStatus setTicketCard={setTicketCard} ticketCard={ticketCard} ticketsData={ticketsData} setProgressTicket={setProgressTicket} setResolvedTicket={setResolvedTicket} resolvedTicket={resolvedTicket} progressTicket={progressTicket}></TaskStatus>
                    <Resolved resolvedTicket={resolvedTicket}></Resolved>
                </div>
            </div>
        </div>
    );
};

export default MainSection;