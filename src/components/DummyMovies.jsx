import React from 'react'
import './style.css'
import EventType from './EventType'

const DummyMovies = () => {
    return(
        <div className='d-flex flex-row'>
            <div className='p-2'> <EventType imageLink="avenger.jpg" eventName="Avengers" description="With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.After the devastating events of Avengers: Infinity War (2018), the universe is in ruins." /> </div>
            <div className='p-2'> <EventType imageLink="avenger.jpg" eventName="Avengers" description="With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.After the devastating events of Avengers: Infinity War (2018), the universe is in ruins." /> </div>
            <div className='p-2'> <EventType imageLink="avenger.jpg" eventName="Avengers" description="With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.After the devastating events of Avengers: Infinity War (2018), the universe is in ruins." /> </div>
            <div className='p-2'> <EventType imageLink="avenger.jpg" eventName="Avengers" description="With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.After the devastating events of Avengers: Infinity War (2018), the universe is in ruins." /> </div>
            <div className='p-2'> <EventType imageLink="avenger.jpg" eventName="Avengers" description="With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.After the devastating events of Avengers: Infinity War (2018), the universe is in ruins." /> </div>
           
       </div>
    )
}

export default DummyMovies;