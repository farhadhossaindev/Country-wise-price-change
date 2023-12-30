import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Fullpage() {
    const { id } = useParams()

    const [post, setpost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(myData => setpost(myData))
    }, [])
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-10 my-10">
                <figure><img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fullpage