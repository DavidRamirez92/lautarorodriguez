import React from 'react';
import {getImage,GatsbyImage} from 'gatsby-plugin-image';
import{useStaticQuery,graphql} from 'gatsby';
import{css} from '@emotion/react';

const Hero = () => {
    const response = useStaticQuery(graphql`
        query {
            strapiPaginas(nombre: {eq: "inicio"}) {
              imagen {
                localFile {
                  childImageSharp {
                    gatsbyImageData(formats: [AUTO,AVIF,WEBP],
                                     layout: FULL_WIDTH, 
                                    placeholder: DOMINANT_COLOR,
                                    transformOptions:{duotone:{
                                        highlight:"#222222",shadow:"192500", opacity:30}
                                    }
                                    )
                  }
                }
              }
            }
          }
    `)
    const imagen=(getImage(response.strapiPaginas.imagen[0].localFile));
    return ( <div
        css={css`
           display: grid;
        `}
        >
        <GatsbyImage 
           image={getImage(imagen)}
           alt="Hero Inicio"	
           css={css`
             grid-area: 1/1;
               height:300px;
           `}
           />
           <div
           css={css`   
               grid-area: 1/1;
               position: relative;
               place-items: center;
               display: grid;
               color: #FFF;
           `}>
               <h3 
                   css={css`
                       
                       font-size:2rem;
                       margin: 0;
                       max-width: 800px;
                       @media(min-width:992px){
                           &{
                               font-size: 4rem;
                           }
                       }
                   `}
               > Lautaro Rodriguez </h3>
           </div>
       </div>);
}
 
export default Hero;
