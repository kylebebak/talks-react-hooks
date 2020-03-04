// https://api.brigada.mx/api/localities/?page_size=100

export interface Locality {
  id: number
  cvegeo: string
  cvegeo_municipality: string
  cvegeo_state: string
  location: {
    lat: number
    lng: number
  }
  municipality_name: string
  name: string
  state_name: string
}

export interface ListData<T = any> {
  next: string | null
  previous: string | null
  results: T[]
}
