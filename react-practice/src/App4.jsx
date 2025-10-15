// get posts from https://jsonplaceholder.typicode.com/posts

import React, { useEffect, useState} from 'react';
import axios from 'axios';

function App4() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //use effect to get posts 
    useEffect(() => {   
        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error : ', error);
            })
            .finally(() => setIsLoading(false));

    }, []);

    return (
        <div style={{ padding: 16 }}>
            <h1>Posts</h1>
            {isLoading ? (
                <p>Loading posts...</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id} style={{ marginBottom: 8 }}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default App4;
