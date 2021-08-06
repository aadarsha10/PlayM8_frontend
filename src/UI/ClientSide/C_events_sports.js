import React from 'react'
import './C_NavBar.css'

export default function C_events_sports() {
    return (
        <div className = "container events-category">
                
        <a href="#" className="event-all mod-first mod-active">
            <div class="event-item-title">
                <span class="normal">All</span>
            </div>
        </a>
        <a href="/all/events" className="event-table-tennis mod-active">
            <div class="event-item-title">
                <span className="normal">Table Tennis</span>
            </div>
        </a>
        <a href="/all/events" className="event-table-tennis mod-active">
            <div class="event-item-title">
                <span className="normal">Lawn Tennis</span>
            </div>
        </a>
        <a href="/all/events" className="event-table-tennis mod-active">
            <div class="event-item-title">
                <span className="normal">Badminton</span>
            </div>
        </a>
        <a href="/all/events" className="event-table-tennis mod-active">
            <div class="event-item-title">
                <span className="normal">Basketball</span>
            </div>
        </a>

        </div>
    )
}
