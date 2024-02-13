import React, { useState, useEffect } from 'react';
import { base64ToBlob, blobToImageUrl } from '../utils/imageUtils'

const ImageBase64 = ({ avatarBase64 }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const blob = base64ToBlob(avatarBase64);
    const url = blobToImageUrl(blob);
    setImageUrl(url);

    
    return () => URL.revokeObjectURL(url);
  }, [avatarBase64]);

  return <img src={imageUrl} alt="Avatar" />;
};

export default ImageBase64