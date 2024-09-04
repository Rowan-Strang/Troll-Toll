import request from 'superagent'
import { Favourite, FavouriteData } from '../../models/favourite'

//GET 'api/v1/favourite'
export async function getFavourites(user: string) {
  const result = await request.get(`/api/v1/favourite/${user}`)
  return result.body as FavouriteData[]
}

//GET 'api/v1/favourite/:user/:id'
export async function getFavouriteById(user: string, id: number) {
  const result = await request.get(`/api/v1/favourite/${user}/${id}`)
  return result.body as FavouriteData
}

//DELETE 'api/v1/favourite/:user/:id'
export async function deleteFavouriteById(user: string, id: number) {
  const result = await request.delete(`/api/v1/favourite/${user}/${id}`)
  console.log(result.statusCode)
}

//POST 'api/v1/favourite
export async function addFavourite(newFave: Favourite) {
  const result = await request.post(`/api/v1/favourite`).send(newFave)
  console.log(result.statusCode)
}
