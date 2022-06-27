import { EMBED_TYPES } from './constants'

const locations = [
  {
    id: 'straumsundet-bru',
    title: 'Straumsundet bru',
    src: 'https://v.angelcam.com/iframe?v=b91rxzv7lo',
    type: EMBED_TYPES.IFRAME,
    lat: 60.358455,
    lon: 5.114327,
  },
  {
    id: 'sotrabrua-ost',
    title: 'Sotrabrua (East)',
    src: 'https://v.angelcam.com/iframe?v=m17yd80kle',
    type: EMBED_TYPES.IFRAME,
    lat: 60.372490,
    lon: 5.170646
  },
  {
    id: 'sotrabrua-vest',
    title: 'Sotrabrua (West)',
    src: 'https://kamera.vegvesen.no/public/1229038_1/manifest.m3u8',
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