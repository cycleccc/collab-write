export interface AvailablePlace {
  name: string
  placeType: PlaceType
  url: string
  parentid: number
  country: string
  woeid: number
  countryCode: null | string
}

export interface PlaceType {
  code: number
  name: 'Country' | 'Supername' | 'Town' | 'Unknown'
}

export type AvailablePlaces = AvailablePlace[]
