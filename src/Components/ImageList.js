import React, { Component } from 'react';
import Image from './Image';
import NoImage from './NoImage'

class ImageList extends Component {

    render() {
        let ListImages = this.props.imageList;
        let images;
        if (ListImages.length == 0) {
            images = <NoImage />
        }
        else {
            images = this.props.imageList.map((image, index) => (
                <Image
                    {...image}
                    key={image.id.toString()}
                    index={index}
                />
            ))
        }

        return (
            <div className="photo-container">
                <ul>
                    {/* {this.props.imageList.map((image, index) => (
                        <Image
                            {...image}
                            key={image.id.toString()}
                            index={index}
                        />
                    ))} */}
                    {images}
                </ul>
            </div>
        )
    }
}

export default ImageList;



















