import React from 'react';

const Image = props => {

    let farm_id = props.farm;
    let server_id = props.server;
    let id = props.id;
    let secret = props.secret

    let imageUrl = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}.jpg`;

    return (
        <li className="img-fluid" style={{ minHeight: 206, objectFit: 'cover' }}>
            <img src={imageUrl} alt="" />
        </li>
    )
};

export default Image;