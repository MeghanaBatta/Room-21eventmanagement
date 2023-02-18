import React, { Component } from 'react'

const Navbar = () => {
    return (
        <div className="navbar-component">
            <nav class="navbar navbar-light bg-light justify-content-between">
                <h2 class="navbar-brand">It All Starts Here !!</h2>
                <div className='d-flex flex-row'>
                    <span className='px-3'>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Create Event</button>
                    </span>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Looking for an event .. ?" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
                
        </div>
    )
}
export default Navbar;