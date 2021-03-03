import React from 'react';

const BreedDetails = (props) => {
    console.log(props.bd)
    return (
        <div style={{marginTop: '25px'}} className="teams">
            <img src={props.bd} alt=""/>
        </div>
    );
};

export default BreedDetails;