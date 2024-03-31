import { useParams } from "react-router-dom"

function User() {

    const {UserId} = useParams()

  return (
    <div className="text-center bg-orange-500">User: {UserId}</div>
  )
}

export default User