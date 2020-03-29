import React from 'react';
import 'bulma/css/bulma.css'

// import * as ReactDOM from 'react-dom';
import {} from 'bloomer';


// import { Card, CardImage, CardContent } from "bloomer";
import ProfileCard from './ProfileCard';
import './ProfileCardList.css';
import { Container } from 'bloomer/lib/layout/Container';

const ProfileCardList =props => {
    const { userData } = props;

    return(
            <Container className="ProfileCardList">
                    {userData.length > 0 ? (
                     userData.map(user => (
                    <li className="ProfileCard" key={user.login.uuid}>
                        <ProfileCard user={user} />
                    </li> 
                ))
            ) : (
                <li>No User Data</li>
            )}
            
            </Container>  
    
    );
};

export default ProfileCardList;