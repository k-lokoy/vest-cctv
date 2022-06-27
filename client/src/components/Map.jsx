import { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'

export default function Map({ lat, lon }) {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const traffic = useRef(null)

  const getMap = useCallback(function() {
    const { Maps } = window.Microsoft

    map.current = new Maps.Map(mapContainer.current, {
      credentials: process.env.REACT_APP_BING_MAPS_KEY,
      liteMode: true,
      center: Maps.Location(lat, lon),
      disableKeyboardInput: true,
      disableMapTypeSelectorMouseOver: true,
      disablePanning: true,
      disableScrollWheelZoom: true,
      disableZooming: true,
      showDashboard: false
    })

    Maps.loadModule('Microsoft.Maps.Traffic', function () {
      traffic.current = new Maps.Traffic.TrafficManager(map.current)
      traffic.current.show()
      traffic.current.showFlow()
      traffic.current.showIncidents()
      traffic.current.showLegend()
    })

    map.current.setView({
      center: new Maps.Location(lat, lon),
      zoom: 15
    })
  })

  useEffect(function() {
    if (window.Microsoft && window.Microsoft.Maps)
      return getMap()

    const scriptTag = document.createElement('script')
    
    scriptTag.setAttribute('type', 'text/javascript')
    scriptTag.setAttribute('src', 'http://www.bing.com/api/maps/mapcontrol?callback=getMap')
    scriptTag.async = true
    scriptTag.defer = true

    document.body.appendChild(scriptTag)
    window.getMap = getMap
  }, [getMap])

  return (<StyledMap ref={mapContainer}></StyledMap>)
}

const StyledMap = styled.div`
  min-height: 20rem;
`