import { useAddFavourites } from '../hooks/useFavourite'

// interface Props {
//   user: string
//   bridgeId: number
// }

function AddFavourite() {
  const addFave = useAddFavourites()
  const handleClick = async () => {
    try {
      await addFave.mutate({
        usersToken: '0auth|4321',
        bridgesId: 3,
      })
    } catch (error) {
      console.error('Error Adding Favourite')
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Add to favourites</button>
    </div>
  )
}

export default AddFavourite
