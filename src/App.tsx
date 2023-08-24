// Import necessary modules and styles
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Contacts from './pages/Contacts'; 
import AddContact from './pages/AddContact'; 
import LineChart from './pages/LineChart.tsx';
import Map from './pages/Map.tsx';

import {
  QueryClient,
  QueryClientProvider, 
} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  
  // Create a BrowserRouter instance with route configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> // Render Home component for the root path
    },{
      path: "/contacts",
      element: <Contacts /> // Render Contacts component for the root path
    },{
      path: "/add-contact",
      element: <AddContact /> // Render Home component for the root path
    } ,{
      path: "/chart",
      element: <LineChart /> // Render LineChart component for the root path
    },{
      path: "/map",
      element: <Map /> // Render Map component for the root path
    }
  ]);

  return (
    <>
      {/* Provide the router instance to the RouterProvider */}
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
