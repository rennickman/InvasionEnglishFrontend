import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import ResponsiveAppBar from './app/features/appBar/AppBar';
import Dashboard from './app/features/dashboard/Dashboard';
import PrivateRoute from './app/features/routes/PrivateRoute';
import PersistLogin from './app/features/sessions/PersistLogin';
import Logout from './app/features/sessions/Logout';
import UpdateProfile from './app/features/sessions/UpdateProfile';
import Login from './app/features/sessions/Login';
import Signup from './app/features/sessions/Signup';
import PublicOnlyRoute from './app/features/routes/PublicOnlyRoute';




function App() {


    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <ResponsiveAppBar />
                </header>

                <main>
                    <Routes>
                        <Route element={<PersistLogin />}>
                            {/** Home Page Route */}
                            <Route path="/" element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            } />

                            {/** Logout Page Route */}
                            <Route path="/logout" element={
                                <PrivateRoute>
                                    <Logout />
                                </PrivateRoute>
                            } />

                            {/** Update Profile Page Route */}
                            <Route path="/update-profile" element={
                                <PrivateRoute>
                                    <UpdateProfile />
                                </PrivateRoute>
                            } />

                            {/** Login Page Route */}
                            <Route path="/login" element={
                                <PublicOnlyRoute>
                                    <Login />
                                </PublicOnlyRoute>
                            } />

                            {/** Registration Page Route */}
                            <Route path="/signup" element={
                                <PublicOnlyRoute>
                                    <Signup />
                                </PublicOnlyRoute>
                            } />
                        </Route>
                    </Routes>
                </main>
            </Router>
        </div>
    );
}



export default App;
