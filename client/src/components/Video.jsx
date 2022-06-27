import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import videojs from 'video.js'

import 'video.js/dist/video-js.css'

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
  
  
  if ('iframe' == type) {
    return (
      <StyledIframe src={src} />
    )
  }

  return (
    <div data-vjs-player>
      <StyledVideo ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )
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