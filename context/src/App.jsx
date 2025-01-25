import Login from "./component/Login"
import Profile from "./component/Profile"
import ContextProvider from "./context/ContextProvider"

function App() {


  return (
    <>
      <ContextProvider>
        
        <Login/>
        <Profile/>
      </ContextProvider>

    </>
  )
}

export default App
