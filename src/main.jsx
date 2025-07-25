import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WillWatchProvider } from './ContextStore/WillWatch.jsx'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const About=lazy(()=>import('./Pages/About.jsx'));

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path: '/about',
    element: (<Suspense fallback={
  <div className="flex justify-center items-center h-screen bg-black">
    <h1 className="text-6xl font-extrabold text-white animate-pulse">LAZY</h1>
  </div>
}>
      <About/>
    </Suspense>)
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <WillWatchProvider>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  </WillWatchProvider>
  </Provider>,
)
