import React, { Component } from 'react';

import './Home.scss';
import { Message } from '../../components';

const Home = () => {
    return(
        <Message 
            avatar="https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/97285956_2723741934421626_3427870530592571392_n.jpg?_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_ohc=NQ2QCeCvlngAX9khJ-D&oh=0d65fa7f4a85438a55f4570714a8b307&oe=5F1E57E3"
            text="Hello, how are you" 
            date="Fri Jun 26 2020 14:51:06"
            isMe={false}
        />
    )
}

export default Home;
