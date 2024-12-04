import './App.css'


import MyRoute from './components/MyRoute'
import { GlobalProvider } from './context/Global'

function App() {
 

  return (
   <>
   <GlobalProvider>
   <MyRoute/>
   </GlobalProvider>
   
   </>
  )
}

export default App
