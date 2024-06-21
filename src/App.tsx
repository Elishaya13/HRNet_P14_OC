import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { UsersProvider } from './context/UserContext';

const App = () => {
  return (
    <div className='App h-screen overflow-hidden'>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </div>
  );
};

export default App;
