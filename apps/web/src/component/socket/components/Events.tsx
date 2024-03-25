import React from 'react';
import { Event } from '@repo/types';

export function Events({ events }: { events: Event[] }) {
    console.log('events component', events);
    return (
        <ul>
            {
                events.map((event, index) =>
                    <li key={ index }>{ event.content }</li>
                )
            }
        </ul>
    );
}