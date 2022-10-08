function Startscreen({ start }) {
    return (
        <div>
            <div className="modal start-screen">
                <h2>Rules</h2>
                <p>Find these characters as fast as you can and fight for a place in the leaderboards.</p>
                <p>When you find a character, an alert will show up and his logo on the top right will turn gray.</p>
                <p><strong>Disclaimer</strong>: This game was designed to be played without resizing your window, otherwise it won't work properly.</p>
                <ul>
                    <li>
                        <div className="charTarget" style={{background: 'url(https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png) 50% 0% / 120%'}}></div>
                        <p>Morty</p>
                    </li>
                    <li>
                        <div className="charTarget" style={{background: 'url(https://lumiere-a.akamaihd.net/v1/images/original_1626377018_solar_opposites_s1_-_star_6_a365329e.jpeg) 65% 30% / 700%'}}></div>
                        <p>Mariachi</p>
                    </li>
                    <li>
                        <div className="charTarget" style={{background: 'url(https://www.looper.com/img/gallery/how-rick-and-mortys-summer-changed-because-of-spencer-grammer-exclusive/intro-1605813748.jpg) 78% 10% / 300%'}}></div>
                        <p>Summer</p>
                    </li>
                </ul>
                <button onClick={start}>Start</button>
            </div>
            <div className="overlay"></div>
        </div>
    );
  }

  export default Startscreen