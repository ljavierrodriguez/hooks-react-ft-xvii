import React from 'react';

const ImageItem  = ({ source, setImageSource }) => {
    return (
        <img src={source} className="img-fluid rounded-circle thumbnail" onClick={() => setImageSource(source)} />
    )
}

export default ImageItem;