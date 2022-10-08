import Timer from "./Timer";

function Header({ foundChars, elapsedTime, parseTime, countUp, isTimeRunning }) {
    return (
        <header>
            <h1>Where's Morty</h1>
            {(isTimeRunning) ? <Timer elapsedTime={elapsedTime} parseTime={parseTime} countUp={countUp} /> : null}
            <ul>
                <li>
                    <div className="charTarget" style={{background: 'url(https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png) 50% 0% / 120%', filter: (foundChars.includes('Morty')) ? 'grayscale(100%)' : 'none'}}></div>
                    <p>Morty</p>
                </li>
                <li>
                    <div className="charTarget" style={{background: 'url(https://lumiere-a.akamaihd.net/v1/images/original_1626377018_solar_opposites_s1_-_star_6_a365329e.jpeg) 65% 30% / 700%', filter: (foundChars.includes('Mariachi')) ? 'grayscale(100%)' : 'none'}}></div>
                    <p>Mariachi</p>
                </li>
                <li>
                    <div className="charTarget" style={{background: 'url(https://www.looper.com/img/gallery/how-rick-and-mortys-summer-changed-because-of-spencer-grammer-exclusive/intro-1605813748.jpg) 78% 10% / 300%', filter: (foundChars.includes('Summer')) ? 'grayscale(100%)' : 'none'}}></div>
                    <p>Summer</p>
                </li>
            </ul>
        </header>
    );
  }

  export default Header