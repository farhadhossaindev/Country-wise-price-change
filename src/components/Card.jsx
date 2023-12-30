import React from 'react'
import { Link } from 'react-router-dom'

function Card({apiKey}) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp" alt="" />
                <div className="card-body">
                    <h2 className="card-title">{apiKey.title}</h2>
                    <p>{apiKey.body}</p>
                    <div className='flex justify-center'>
                    <Link to={`${apiKey.id}`}><button className="btn btn-wide">View More</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Card