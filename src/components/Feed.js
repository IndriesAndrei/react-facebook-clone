import { useEffect, useState } from 'react';
import '../styles/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    // only runs this once, when the Feed component loads as we use [] as second argument for useEffect
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            // pull everything from Firebase posts collection
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        ))
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post 
                    key={post.id}
                    image={post.data.profilePic}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                />
            ))}
        </div>
    )
}