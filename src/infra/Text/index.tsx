import { createElement, HTMLAttributes } from "react";


type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface TextProps<ElementType> {
    as: ElementType;
}

const Text = ({ children, as, ...options }: TextProps<ElementType> & HTMLAttributes<ElementType>) => {

    const Element = createElement(as, {...options}, children);

    return Element
}

export default Text;