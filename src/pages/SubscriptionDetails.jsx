import React from 'react';
import { useParams } from 'react-router';

const SubscriptionDetails = () => {
    const {id}=useParams();
    console.log(id);
    return (
        <div>
            This is details
        </div>
    );
};

export default SubscriptionDetails;