'use client'
import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { MyForm } from './components/MyForm';
import { Event } from '@repo/types';

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState<Event[]>([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onFooEvent(value: Event) {
            console.log('onFooEvent', value)
            setFooEvents(previous => [...previous, value]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('onMessage', onFooEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('onMessage', onFooEvent);
        };
    }, []);

    return (
        <div className="App" >
            <ConnectionState isConnected={ isConnected } />
            < Events events={ fooEvents } />
            <ConnectionManager />
            < MyForm />
        </div>
    );
}

export default App;