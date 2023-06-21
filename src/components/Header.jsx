

export default function Header({ user }) {

    return (
        <div>
            Welcome, {user}!
            <button className="btn">logout</button>
        </div>
    )
}