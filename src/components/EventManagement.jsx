import React from 'react';
import Carousel from './Carousel';
import EventType from './EventType';
import DummyMovies from './DummyMovies'

const EventManagement =  () => {
    return (
    <div className="event-management">
       <div className='p-2'> <Carousel /> </div>
       <h1 className='p-2 text-[20px]'> Movies</h1>
       <DummyMovies />
    </div>
    )
}

export default EventManagement;