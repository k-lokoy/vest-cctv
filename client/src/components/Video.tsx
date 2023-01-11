import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import videojs, { VideoJsPlayer } from 'video.js'

import 'video.js/dist/video-js.css'
import { EmbedType } from '../data/constants'

interface VideoProps {
  src: string
  type: EmbedType
}

const Video: React.FC<VideoProps> = ({ src, type }) => {
  const videoRef  = useRef(null)
  const playerRef = useRef<VideoJsPlayer>()

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src
    }]
  }

  function onReady(player: VideoJsPlayer) {
    player.src(src)
    player.play()
  }

  useEffect(function() {
    if (!videoRef.current) return

    playerRef.current = videojs(videoRef.current, videoJsOptions, () => {
      videojs.log('player is ready');
      playerRef.current && onReady && onReady(playerRef.current)
    })
  }, [src])

  switch(type) {
    case EmbedType.VideoJS:
      return (
        <div data-vjs-player>
          <StyledVideo ref={videoRef} className='video-js vjs-big-play-centered' />
        </div>
      )

    case EmbedType.Image:
      return (
        <StyledImg src={`${src}&t=${Date.now()}`} />
      )

    default: 
        return (
          <StyledIframe src={src} />
        )
  } 
}

const StyledVideo = styled.video`
  width: 100%;
  aspect-ratio: 16 / 9;
`

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  aspect-ratio: 16 / 9;
`

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

export default Video