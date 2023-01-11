export interface TwitterAccount {
  handle: string
  isEnabled: boolean
}

export const accounts: TwitterAccount[] = [
  {handle: 'VTSvest', isEnabled: true},
  {handle: 'politivest', isEnabled: false},
]