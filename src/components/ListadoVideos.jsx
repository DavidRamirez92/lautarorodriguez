import React,{useState,useEffect} from 'react';
import useVideos from '../hooks/useVideos';
import {css} from '@emotion/react';
import * as listadoVideosCSS from '../css/listadoVideos.module.css';
import VideoPreview from '../components/VideoPreview';

const ListadoVideos = () => {

    const result = useVideos();
    const [videos,setVideos] = useState([]);

    useEffect(()=> {
            setVideos(result);
    },[])

    return (
        <>
        <h2
            css={css`
                margin-top: 5rem;
            `}
        >Proyectos</h2>

        <ul className={listadoVideosCSS.videos}>
                {videos.map(video =>(
                    <VideoPreview 
                        key={video.id}
                        video={video}
                    />
                ))}
            </ul>
        </>

    );
}
 
export default ListadoVideos;
