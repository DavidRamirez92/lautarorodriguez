import React from 'react';  
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ListadoVideos from '../components/ListadoVideos';

const Index = () => {
  return (
    <Layout>
      <Hero/>
      <ListadoVideos/>
    </Layout> 
     
    );
}
 
export default Index;