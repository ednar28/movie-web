interface MoviceSchedule {
  id: number
  airdate: string
  airstamp: string
  airtime: string
  url: string
  _embedded: {
    show: {
      image: {
        medium: string
        original: string
      }
    }
  }
}
