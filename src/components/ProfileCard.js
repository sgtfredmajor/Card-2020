import React from 'react';
import { Container } from "bloomer";
import 'bulma/css/bulma.css'; 

const ProfileCard = props => {
    const { user } = props;
    return (
        <Container>
            <figure class="image is-128x128">
            <img class="is-rounded" 
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`} 
                />
            </figure>

                {user.name.first} {user.name.last}
        
        </Container>
    
    
    );
};

export default ProfileCard;