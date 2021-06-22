import React from 'react';
import Layout from '../components/Layout';
import {css} from '@emotion/react';

const Contacto = () => {
    return ( 
        <Layout>
            <main
            css={css`
                max-width: 1200px;
                margin:0 auto;
                margin-top: 2rem;
                width: 95%;


            `}
            >
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciD0xd9bwQA8MfPnP0MOit252lnr2CixThHYUEA2hooaO9kg/viewform?embedded=true" width="640" height="673" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </main>
           
        </Layout>
     );
}
 
export default Contacto;