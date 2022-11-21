export interface CharactersType {
  characters: {
    info: {
      pages: number
    }
    results: Character[]
  }
}

export interface Character {
  name: string
  id: string
  status: string
  image: string
}


export interface EpisodesType {
  episodes: {
    results: EpisodeType[]
  }
}
export interface EpisodeType {
  id: string
  name: string
  air_date: string
  episode: string
  characters: CharacterMiniType[]
}

export interface CharacterMiniType extends Pick<Character, 'id' | 'image'> { }


export interface LocationsType {
  locations: {
    results: LocationType[]
  }
}

export interface LocationType {
  id: string
  name: string
  type: string
  residents: CharacterMiniType[]
}