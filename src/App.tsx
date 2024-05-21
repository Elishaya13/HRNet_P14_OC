import { RouterProvider } from "react-router-dom"
import router from "./routes/Router"
import { UsersProvider } from "./context/UserContext"



function App() {

  return (
    <div className='App'>
      <UsersProvider>
        <RouterProvider router={router} />  
       </UsersProvider>
    </div>
  )
}

export default App
