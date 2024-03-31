import {useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/PassiOrg')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="text-center text-2xl">
    Github Followers: {data.following}
        <img className="rounded-full" src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/PassiOrg')
    return response
}