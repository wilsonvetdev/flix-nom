import React from 'react'
import { Message } from 'semantic-ui-react'

const Banner = () => {
    
    return ( 
        <Message
        color='orange'
        header='You are limited to five nominations!'
        content='This notification will go away when your nominations are less than five.' 
        />
    )

}

export default Banner