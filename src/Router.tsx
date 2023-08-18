import {useState} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SingIn'
import Profile from './routes/Profile'
import EditProfile from './routes/EditProfile'


function Router(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;