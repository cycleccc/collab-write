import React from 'react';
import { Event } from '@repo/types';

export function Events({ events }: { events: Event[] }) {
    return (
        <ul>
            {
                events.map((event, index) =>
                    <li key={ index }>{ event.name }</li>
                )
            }
        </ul>
    );
}