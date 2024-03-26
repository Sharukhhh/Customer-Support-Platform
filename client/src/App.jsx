import {Route , Routes} from 'react-router-dom'
import Register from './Screens/Register'
import LoginPage from './Screens/LoginPage'
import { Toaster } from 'react-hot-toast'
import UserHome from './Screens/UserHome'
import PrivateComponent from './Components/Privates/PrivateComponent'
import ComplaintPage from './Screens/ComplaintPage'
import UserHistory from './Screens/UserHistory'

function App() {

  return (
    <>
    <Toaster position='top-right'/>
      <Routes>

        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<PrivateComponent forUser={true}/>}> 
            <Route path='/home' element={<UserHome/>}/>
            <Route path='/ticket' element={<ComplaintPage/>}/>
            <Route path='/history' element={<UserHistory/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
