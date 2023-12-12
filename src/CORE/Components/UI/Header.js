import duo_chat_logo from "../../../duo_chat.png";

export const Header = () => {
    return <nav className="navbar">
        <div className="navbar-brand" style={{ padding: "1%" }}>
            <img width={200} src={duo_chat_logo} />
        </div>
    </nav>
}