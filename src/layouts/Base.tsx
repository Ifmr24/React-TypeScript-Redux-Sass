import React from 'react'
import SEO from './SEO';

export interface BaseProps {
    title: string,
    description: string
}
 
const defaultProps : BaseProps = {
    title: '',
    description: ''
}

const Base: React.SFC<BaseProps> = (props = defaultProps) => {

    const {children, title, description} = props

    return (
        <React.Fragment>
            <SEO title={title} description={description} />
            {children}
        </React.Fragment>
    );
}

Base.defaultProps = defaultProps;

export default Base;