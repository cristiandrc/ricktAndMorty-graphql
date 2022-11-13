export interface Characters {
  characters: {
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
  air_date: string
  episode: string
  name: string
  characters: CharacterEpisodeType[]
}

export interface CharacterEpisodeType extends Pick<Character, 'id' | 'image'> { }
