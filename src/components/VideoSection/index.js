import React, {useState} from 'react'
import { ArrowForward, ArrowRight, Video, VideoBg, VideoBtn, VideoContainer, VideoContent, VideoDesc, VideoTitle } from './VideoSectionElements'

// Video by Michelangelo Buonarroti from Pexels

import video from '../../video/HomeService2.mp4'
import { Button } from '../ButtonElements.component'



const VideoSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <VideoContainer id='home'>
            <VideoBg>
            {/* Video by Michelangelo Buonarroti from Pexels */}
                <Video autoPlay loop muted src={video} type='video/mp4'/>
            </VideoBg>
            <VideoContent>
                <VideoTitle>Home Service With Best Safety Measures</VideoTitle>
                <VideoDesc>We Care For You, We Care For Your Home.<br/> Get Your Home Service Today.</VideoDesc>
                <VideoBtn>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true' to='services'>Get Started{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </VideoBtn>
            </VideoContent>

        </VideoContainer>

    )
}

export default VideoSection
