import { useEffect, useState } from 'react';
import './UseEffectHook.scss';
function UseEffectHook() {

    const [type, setType] = useState('character');
    const [data, setData] = useState([]);

    useEffect(() => {

        console.log('Init use Effect')
        fetch(`https://rickandmortyapi.com/api/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);


    return (
        <div className = 'object'>
            <h1>Type: {type}</h1>
            <button onClick={() => setType('character')}>Users</button>
            <button onClick={() => setType('location')}>Todos</button>
            <button onClick={() => setType('episode')}>Posts</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}

export default UseEffectHook;