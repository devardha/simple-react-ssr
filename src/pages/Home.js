import React from 'react'
import { Helmet } from 'react-helmet'

function Home(){

    const head = () => {
        return (
            <Helmet>
                <title>React SSR</title>
                <meta name="description" content="Server-Side Rendering React using Express.js"/>
                <meta name="og:title" content="React SSR"/>
                <meta name="og:description" content="Server-Side Rendering React using Express.js"/>
                <meta name="og:image" content="https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png"/>
            </Helmet>
        )
    }

    return(
        <div>
            {head()}
            <h1>Hello from react server side rendering</h1>
        </div>
    )
}

export default Home;