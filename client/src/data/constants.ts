export enum EmbedType {
  Iframe,
  VideoJS,
  Image
}

export enum UnitType {
  Standard,
  Metric,
  Imperial
}

export const UNITS = {
  [UnitType.Standard]: {
    name:  'Standard',
    temp:  'K',
    speed: 'm/s',
    rain:  'mm'
  },
  [UnitType.Metric]: {
    name:  'Metric',
    temp:  '°C',
    speed: 'm/s',
    rain:  'mm'
  },
  [UnitType.Imperial]: {
    name:  'Imperial',
    temp:  '°F',
    speed: 'mph',
    rain:  'inch'
  }
}

export const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
