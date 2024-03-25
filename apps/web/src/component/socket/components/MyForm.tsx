import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event: { preventDefault: () => void; }) {
        console.log('submit');
        event.preventDefault();
        setIsLoading(true);

        socket.timeout(5000).emit('newMessage', value, () => {
            setIsLoading(false);
            console.log('timeout');

        });
    }

    return (
        <form onSubmit={ onSubmit }>
            <input onChange={ e => setValue(e.target.value) } />

            <button type="submit" disabled={ isLoading }>Submit</button>
        </form>
    );
}