import { ImgHTMLAttributes } from "react";

interface ImageProps {
    
}

const Image = ({ ...options }: ImageProps & ImgHTMLAttributes<HTMLImageElement>) => {

    return (
        <img {...options} />
    )
}

export default Image;