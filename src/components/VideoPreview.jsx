import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage} from 'gatsby-plugin-image/';
import {Link} from 'gatsby';
import urlSlug from 'url-slug';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #809580;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration:none;
    text-align: center;
    font-weight:700;
    text-transform: uppercase;
    &:hover{
        background-color: #515f51;
    }
`;


const Card = styled.div`
    border: 1px solid #E1E1E1;
    img{
        max-width: 100%;
    }
`; 

const Contenido = styled.div`
    padding: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    h3{
        font-family: 'Lato',sans-serif;
        margin: 0 0 2rem 0;
        text-align: center;
        font-size:2.4rem;
    }
`;


const VideoPreview = ({video}) => {

    const{nombre,imagen} = video;
    return ( 
        <Card>
        <GatsbyImage
            image={getImage(imagen[0].localFile)}
            alt="imagen video"
        />
        <Contenido>
            <h3>{nombre}</h3>

            <Boton to={urlSlug(nombre)}>
                Ver video
            </Boton>

        </Contenido>
    </Card>

    );
}
 
export default VideoPreview;
