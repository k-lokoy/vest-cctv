import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import videojs from 'video.js'

import 'video.js/dist/video-js.css'
import { EMBED_TYPES } from '../data/constants'

export default function Video({ src, type }) {
  const videoRef  = useRef(null)
  const playerRef = useRef(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src
    }]
  }

  function onReady(player) {
    player.src(src)
    player.play()
  }

  useEffect(function() {
    if (!videoRef.current) return

    playerRef.current = videojs(videoRef.current, videoJsOptions, () => {
      videojs.log('player is ready');
      onReady && onReady(playerRef.current)
    })
  }, [src])

  switch(type) {
    case EMBED_TYPES.VIDEO_JS:
      return (
        <div data-vjs-player>
          <StyledVideo ref={videoRef} className='video-js vjs-big-play-centered' />
        </div>
      )

    case EMBED_TYPES.IMAGE:
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