import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/pages/Home";
import CreatePost from "./component/pages/CreatePost";
import Login from "./component/pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }


  return (
    <>
    <Router>
      <nav className="bg-blue-300 text-center p-4">
        <Link to={'/'} className="">Home</Link>
        {!isAuth ? (
          <Link to={'/login'} className="ml-6">Login</Link>
          ) : (<>
            <Link to={'/createpost'} className="ml-6">Create Post</Link>
        <button className="ml-6" onClick={signUserOut}>Logout</button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
