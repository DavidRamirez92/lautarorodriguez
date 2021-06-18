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
                 <iframe title="contact Form" src="https://docs.google.com/forms/d/e/1FAIpQLSf68MjLFdjdrUWkjPFCUb15Jha2Sta0GO3NwLU6MmDSpqMeig/viewform?embedded=true" width="640" height="673" frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
            </main>
           
        </Layout>
     );
}
 
export default Contacto;