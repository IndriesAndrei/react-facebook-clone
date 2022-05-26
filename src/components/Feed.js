import '../styles/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

export default function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRPSlR8Z5wkwig6fQ3wWubJcFReo5qh2PTQ&usqp=CAU'
                message='Wow this works!'
                timestamp='This is a timestamp'
                username='My Username'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjdqlfZlxtPRs40H4NzFAse-FFlbTfFCgcw&usqp=CAU'
            />
            <Post
                profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnhsDFtqUlGGBSacLUqE-YDC07v0dsmD1HQ&usqp=CAU'
                message='Wow this works!'
                timestamp='This is a timestamp'
                username='My Username'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDfN9cA7BaCosInTl2sEkxdW9DcEJysw6bA&usqp=CAU'
            />
            <Post />
        </div>
    )
}