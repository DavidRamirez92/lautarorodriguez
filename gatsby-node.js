const urlSlug = require('url-slug');

exports.createPages = async({actions, graphql, reporter}) => {
    const resultado = await graphql(`
        query {
            allStrapiVideos {
              nodes {
                nombre
                id
              }
            }
          }
          
    `);

    //console.log(JSON.stringify(resultado.data.allStrapiVideos));

    if(resultado.errors){
        reporter.panic('No hubo resultados',resultado.errors);
    }

     //Si hay resultados generar los archivos etaticos
     const videos = resultado.data.allStrapiVideos.nodes;
    
     //crear los templates de propiedades
     videos.forEach(video => {
         actions.createPage({
             path:urlSlug(video.nombre),
             component: require.resolve('./src/components/Videos.jsx'),
             context:{
                 id: video.id

             }
         })
     })
}