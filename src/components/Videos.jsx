import React from 'react';
import {css} from '@emotion/react';
import Layout from './Layout';
import {graphql} from 'gatsby';

export const query = graphql`
    query($id:String!){
        allStrapiVideos(filter:{id:{eq:$id}}){
            nodes{
                nombre
                url
                descripcion
            }
        }
    }
`

const Videos = ({data:{allStrapiVideos:{nodes}}}) => {
    const{nombre, descripcion, url} = nodes[0];
    console.log(url);
    return (
        <Layout>
            <h1>{nombre}</h1>
                <main 
                    css={css`
                        max-width: 1200px;
                        margin:0 auto;
                        width: 95%;

                    `}
                >

                        <iframe
                            width="1200" height="600" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen" allowfullscreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen">

                        </iframe>
           
                    <div
                       
                    >   
                        <p>{descripcion}</p>
                    </div> 
                    </main>
        </Layout> 
    );
}
 
export default Videos;
