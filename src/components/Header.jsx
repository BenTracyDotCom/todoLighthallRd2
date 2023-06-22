import { useNavigate } from 'react-router-dom';

export default function Header({ user, setUser }) {

  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(''),
    navigate('/')
  }

  return (
    <div>
      Welcome, {user}!
      <button className="btn" onClick={handleLogout}>logout</button>
    </div>
  )
}