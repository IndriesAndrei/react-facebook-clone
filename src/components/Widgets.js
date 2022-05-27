import '../styles/Widgets.css';

export default function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                title="FB Iframe"
                className="iframe-fb" 
                width="450" 
                height="700" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="yes" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media" 
                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/Microsoft/&tabs=timeline%2Cevents%2Cmessages&width=450px&height=700px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2235597906716847"
            >
            </iframe>
        </div>
    )
}