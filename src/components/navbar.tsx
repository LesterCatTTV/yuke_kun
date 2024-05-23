import Logo from "/Yuke_Kun.png"
import { navbar } from "@/data"

function NavBar() {
    return (
        <div className="navbar">
            <div>
                <img src={Logo} alt="Yuke_Kun" className="logo_navbar" />
            </div>
            {navbar.map((data) => (
                <div className="navbar_links">
                    <a href={data.link}>
                        {data.text}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default NavBar