import { EMBED_TYPES } from './constants'

const locations = [
  {
    id: 'straumsundet',
    title: 'Straumsundet',
    src: 'https://svplive-lh.akamaized.net/hls/live/2039444/vnytt/mLTCtDZlSUPVAuUqmIliz/source.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.358455,
    lon: 5.114327,
  },
  {
    id: 'straume',
    title: 'Straume',
    src: 'https://svplive-lh.akamaized.net/hls/live/2039443/vnytt/qSIcaRpL0KZVyWQs6G9CW/source.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.360576,
    lon: 5.124039,
  },
    {
    id: 'straume-2',
    title: 'Straume 2',
    src: 'https://svplive-lh.akamaized.net/hls/live/2039442/vnytt/qy2WDmHr5pgQxjMuWTbDy/source.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.360576,
    lon: 5.124039,
  },
  {
    id: 'sotrabrua-ost',
    title: 'Sotrabrua (East)',
    src: 'https://svplive-lh.akamaized.net/hls/live/2039445/vnytt/0K3lxIhudMtz1yAfOAnk0/source.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.372490,
    lon: 5.170646
  },
  {
    id: 'sotrabrua-vest',
    title: 'Sotrabrua (West)',
    src: 'https://kamera.vegvesen.no/public/1229038_2/manifest.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.372551,
    lon: 5.161009
  },
  {
    id: 'janaflaten',
    title: 'Janaflaten',
    src: 'https://svplive-lh.akamaized.net/hls/live/2039445/vnytt/Nhm66VX22NbQJ59NqYyr9/source.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.372551,
    lon: 5.161009
  },
  {
    id: 'e16-indre-arna',
    title: 'E16 Indre Arna',
    src: 'https://kamera.vegvesen.no/public/1229030_1/hls_1_stream_1_orig.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.417086,
    lon: 5.474415
  },
  {
    id: 'nygardstangen',
    title: 'Nygårdstangen',
    src: 'https://stream1.vossaskyen.no/bt/Nygardstangen.stream/playlist.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.384074,
    lon: 5.335443
  },
  {
    id: 'danmarksplass',
    title: 'Danmarksplass',
    src: 'https://stream1.vossaskyen.no/bt/Danmarksplass.stream/playlist.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.376530,
    lon: 5.338582
  },
  {
    id: 'aasanevegen',
    title: 'Åsanevegen',
    src: 'https://stream1.vossaskyen.no/bt/Aasanevegen.stream/playlist.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.418810,
    lon: 5.311958
  },
  {
    id: 'puddefjordsbroen',
    title: 'Puddefjordsbroen',
    src: 'https://stream1.vossaskyen.no/bt/Puddefjordsbroen.stream/playlist.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.383789,
    lon: 5.316943
  },
  {
    id: 'fanaveien',
    title: 'Fanaveien',
    src: 'https://stream1.vossaskyen.no/bt/Fanaveien.stream/playlist.m3u8',
    type: EMBED_TYPES.VIDEO_JS,
    lat: 60.308196,
    lon: 5.341326
  }
]

locations.sort((a, b) => a.id.localeCompare(b.id))

export default locations