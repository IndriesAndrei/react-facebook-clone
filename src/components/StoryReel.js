import '../styles/StoryReel.css';
import Story from './Story';

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRWI3lX3z1xPbRKWseNoMK1V5fdJpNDnV_w&usqp=CAU" 
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6fJuz8nUzHaTJ-Uyj_1JC89WavzpO_CS-g&usqp=CAU" 
                title="Sonny X"
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmR8LF39ptV7-8XwO-3fw1VV0iU0cXa46-A&usqp=CAU" 
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQFkQsANle1VbUg2-dGNFFCg5oZVQqEXmfQ&usqp=CAU" 
                title="Lady M" 
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHpoTSLNay1j6KuwVTGvXvrE870JhHe6gtg&usqp=CAU" 
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwyqpjAmQf9cJZJYedogG6ivGM_FAyiIOwQ&usqp=CAU" 
                title="Person Y" 
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuGUQMJrmLmVDqYpR_RMx1M7o3Pv4BaUIdA&usqp=CAU" 
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJI-s1Tk1OjL5n01uQm3_SCAMqtHwCW-x2kA&usqp=CAU" 
                title="Person Z" 
            />
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDS8og8J13UfWB_E2_V0JxkE_oog9OKQvqA&usqp=CAU" 
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjJ7C5DlPqIatYG2mgnPMMZ7TaFujUp9fFw&usqp=CAU" 
                title="Person W" 
            />
        </div>
    )
}