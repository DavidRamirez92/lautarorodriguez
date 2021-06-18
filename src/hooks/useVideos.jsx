import {graphql,useStaticQuery} from 'gatsby';

const useVideos = ()=> {
    const info = useStaticQuery(graphql`
        query  {
            allStrapiVideos {
            nodes {
                id
                nombre
                url
                descripcion
                imagen {
                localFile {
                    childImageSharp {
                    gatsbyImageData(formats: [AUTO,AVIF,WEBP],
                                                placeholder: BLURRED
                                        layout: CONSTRAINED
                                            width: 600
                                            height: 400)
                    }
                }
                }
            }
            }
      }
    `);

    return info.allStrapiVideos.nodes.map(video =>({
        id: video.id,
        nombre: video.nombre,
        descripcion: video.descripcion,
        url: video.url,
        imagen:video.imagen
    }))
}

export default useVideos;