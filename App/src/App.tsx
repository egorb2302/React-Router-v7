import { BrowserRouter, Routes, Route } from 'react-router';
import { lazy, Suspense, useState } from 'react'
const DashboardLayout = lazy(() => import('./components/DashboardLayout')) 
const UsersList = lazy(() => import('./pages/UsersList'))
const UserDetail = lazy(() => import('./pages/UserDetail'))
const Settings = lazy(() => import('./pages/Settings'))
import Home from './pages/Home';
const NotFound = lazy(() => import('./pages/NotFound'))
import Login from './pages/Login';
const ProtectedRoutes = lazy(() => import('./components/ProtectedRoutes'))

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true)
  }

  const handleLogout = () => {
    setIsAuth(false)
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>

          <Route path="/dashboard" element={
            <ProtectedRoutes isAuth={isAuth}>
              <DashboardLayout onLogout={handleLogout}/>
            </ProtectedRoutes>}>
            <Route path="users" element={<UsersList />}/>
            <Route path="users/:id" element={<UserDetail/>}/>
            <Route path="settings" element={<Settings />}/>
          </Route>
          
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

