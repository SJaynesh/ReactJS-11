import Hero from "./Hero";

function Header() {
    // Comment
    /**
     * 
     * 
     */
    let name = "Jency";
    let isMale = false;
    let userNameCSS = { color: 'orange', backgroundColor: 'pink', padding: '5px' };
    return <>
        <h1> Header </h1>
        <div>
            {/*  <a href="">Home</a> |*/}
            <a href="">About</a> |
            <a href="">Contact</a> |

            <p style={userNameCSS}>Username : {name} {isMale ? "👨" : "👧"} </p>
        </div>

        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
    </>
}

export default Header;