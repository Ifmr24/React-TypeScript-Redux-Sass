import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

interface LoaderProps {
    children?: any
};

const Loader: React.FC<LoaderProps> = (props) => {

    const Load = styled.span`
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    `
    const {children} = props;
    const [isLoading, setisLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setisLoading(false)
		}, 400)
    }, [isLoading])
    
    return(
        <React.Fragment>
            {isLoading ? (
                <Load>
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </Load>
            ):(
                children
            )}
        </React.Fragment>
    )
}

export default Loader