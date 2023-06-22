import { useNavigate } from 'react-router-dom';

export default function Header({ user, setUser, setLoggedIn }) {

  const navigate = useNavigate()

  const handleLogout = () => {
    setUser('');
    setLoggedIn(false);
    navigate('/')
  }

  return (
    
    <div  className="w-full flex justify-center">
      <div className="z-50 fixed w-11/12 navbar navbar-center flex justify-between bg-base-100 rounded-2xl mt-3 opacity-95 drop-shadow-xl">
        <div className="text-5xl ml-5 py-2 font-mono">Things I Gotta Do</div>
        <div>
          <div className="ml-5 text-2xl mr-5">Welcome, {user}!</div>
          <button className="btn btn-outline btn-sm mr-5" onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  )
}