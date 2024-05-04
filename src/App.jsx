
import './App.css'
import Home from './component/Home'
import Contact from './component/contact'
import About from './component/about'
import { Route , Routes ,useLocation,Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
const location = useLocation(

)
  return (
 <>
<header className='flex relative z-[9999] list-none justify-center py-2 gap-2 bg-blue-900 text-white'>
    <Link to='/'>Home</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/about'>About</Link>
    
</header>
<AnimatePresence mode='wait' >
<Routes location={location} key={location.pathname} >
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </AnimatePresence>
 </>
  )
}
export default App
