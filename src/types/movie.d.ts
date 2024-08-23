interface MoviceSchedule {
  id: number
  airdate: string
  airstamp: string
  airtime: string
  url: string
  _embedded: {
    show: {
      id: number
      url: string
      name: string
      genres: string[]
      rating: {
        average: number | null
      }
      image: {
        medium: string
        original: string
      }
    }
  }
}
