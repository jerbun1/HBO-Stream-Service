const SideNav = (props) => {
    return (
        <div className="side-nav ">
            <div className="side-nave_close-btn">
                <i className="fas fa-times" />

            </div>
            <ul className="side-nav-main">
                <li href="/" className="active">
                    Home
                </li>
                <li href="/">
                    Movies
                </li>
                <li href="/" >
                    T.V Shows
                </li>
                <li href="/">
                    Just Added
                </li>
                <li href="/" >
                    Last Chance
                </li>
                <li href="/">
                    Coming Soon
                </li>

            </ul>
            <div className="side-nav-divider" />
            <ul className="side-nav-main">
                <li href="/" className="active">
                    Action
                </li>
                <li href="/">
                    Adventure
                </li>
                <li href="/" >
                    Drama
                </li>
                <li href="/">
                    Comedy
                </li>
                <li href="/" >
                    Horror
                </li>
                <li href="/">
                    Thriller
                </li>
                <li href="/">
                    Romance
                </li>
                <li href="/">
                    Sports
                </li>
                <li href="/">
                    Martial Arts
                </li>
                <li href="/">
                    Music
                </li>
                <li href="/">
                    Dance
                </li>
                <li href="/">
                    Supernatural
                </li>
                <li href="/">
                    Fantsy
                </li>
                <li href="/">
                    Reality
                </li>


            </ul>
        </div>

    )
}
export default SideNav;