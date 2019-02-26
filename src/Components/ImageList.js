import React, { Component } from 'react';
import Image from './Image';

class ImageList extends Component {


    render() {


        return (
            <div className="photo-container">
                <h2>your Results: </h2>
                <ul>
                    {this.props.imageList.map((image, index) => (
                        <Image
                            {...image}
                            key={image.id.toString()}
                            index={index}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default ImageList;



















