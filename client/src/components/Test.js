import React, { useEffect } from 'react'
import socketIoClient from 'socket.io-client'

export default function Test() {
    useEffect(()=>{
        const socket = socketIoClient('http://localhost/3001')
        socket.on('FromAPI', data => {console.log(data);})
    })
    return (
        <div>
            
        </div>
    )
}
