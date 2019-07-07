import React from 'react'
import {Helmet} from 'react-helmet';

interface SEOProps {
    title: string,
    description: string,
};

const defaultProps : SEOProps = {
    title: 'titulo default',
    description: 'Aplicacion web con react'
};

const SEO: React.SFC<SEOProps> = (props = defaultProps) => {
    const {title, description} = props
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Helmet>
    );
};

SEO.defaultProps = defaultProps;

export default SEO;