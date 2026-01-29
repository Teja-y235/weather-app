import React, { useEffect, useState } from 'react'

const Comp = () => {

    const [post, setPost] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPost(data));

    }, []);
    

    

    return (
        <>
            <ul>
                {
                    post.map(u => (
                        <li>{u.title}</li>
                    ))

                }
            </ul>

        </>
    )
}

export default Comp 