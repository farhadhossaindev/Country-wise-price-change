import { useEffect, useState } from "react";
import Card from "../components/Card";

function Blog() {
    const [post, setpost] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(myData => setpost(myData))

    }, [])

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-3">All Post Data</h1>
            <div className="mt-2 gap-4 flex-wrap flex justify-center">
                {
                    post.map(pt => <Card key={pt.id} apiKey={pt} />)
                }
            </div>
        </div>
    )
}

export default Blog