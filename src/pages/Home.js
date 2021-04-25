import React, { useState, useEffect } from "react"

const Home = () => {  
    const [text, setText] = useState('')
    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(response => setText(response.info))
      }, []);
    
    return (
     <h1>{text}</h1>
    )
}

export default Home



