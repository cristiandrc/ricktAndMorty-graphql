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