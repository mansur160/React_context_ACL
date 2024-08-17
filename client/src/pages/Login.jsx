import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth();

    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
	
	const hasPermission = (user, requiredRole) => {
		if (!user || !user.role) return false; // If no user or role, deny access
			return user.role === requiredRole; // Check if the user's role matches the required role
		};


    const signIn = (e) => {
        e.preventDefault();
		// Example user with multiple roles and permissions
		const role = emailOrUsername === "admin" ? "admin" : "user"; // Simplified role assignment
		//const permissions = role.includes("admin") ? ["read", "write", "delete"] : ["read"];
		
        console.log('Email/Username:', emailOrUsername); // You can see the value here
        console.log('Password:', password); // You can see the value here

        // Handle your login logic here
        setIsLoggedIn(true);
        setAuthUser({
            Name: emailOrUsername, // Set the username or email as the auth user
			role: role // Set the user role here
        });
    };

    const signOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUser(null);
    };

    return (
        <>
            <span>Login check: {isLoggedIn ? 'user logged-in' : 'user logged out'}.</span>
            {isLoggedIn ? (<span>username: {authUser.Name}</span>) : null}
            <br />
            {isLoggedIn
                ? <button className="btn btn-danger d-grid w-100" onClick={(e) => { signOut(e) }}>Sign out</button>
                : <p>Enter your login details to signin</p>
            }
			 {isLoggedIn && hasPermission(authUser, 'admin') && (
                <div>
                    <h2>Admin Panel</h2>
                    <p>Only accessible by users with the "admin" role.</p>
                </div>
            )}

            {isLoggedIn && hasPermission(authUser, 'user') && (
                <div>
                    <h2>User Dashboard</h2>
                    <p>Welcome to the user dashboard.</p>
                </div>
            )}
            <div className="d-none d-lg-flex col-lg-7 p-0">
                <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                    <img
                        src="../../assets/img/illustrations/auth-login-illustration-light.png"
                        alt="auth-login-cover"
                        className="img-fluid my-5 auth-illustration"
                        data-app-light-img="illustrations/auth-login-illustration-light.png"
                        data-app-dark-img="illustrations/auth-login-illustration-dark.png" />

                    <img
                        src="../../assets/img/illustrations/bg-shape-image-light.png"
                        alt="auth-login-cover"
                        className="platform-bg"
                        data-app-light-img="illustrations/bg-shape-image-light.png"
                        data-app-dark-img="illustrations/bg-shape-image-dark.png" />
                </div>
            </div>

            <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
                <div className="w-px-400 mx-auto">
                    <div className="app-brand mb-4">
                        <a href="/" className="app-brand-link gap-2"></a>
                    </div>
                    <h3 className="mb-1">Welcome to Shutter Suites! ??</h3>
                    <p className="mb-4">Please sign-in to your account and start the adventure</p>

                    <form className="mb-3" action="#" method="POST">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email or Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email-username"
                                placeholder="Enter your email or username"
                                autoFocus
                                value={emailOrUsername}
                                onChange={(e) => setEmailOrUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" htmlFor="password">Password</label>
                                <a href="auth-forgot-password-cover.html">
                                    <small>Forgot Password?</small>
                                </a>
                            </div>
                            <div className="input-group input-group-merge">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="••••••••••"
                                    aria-describedby="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="input-group-text cursor-pointer"><i
                                    className="ti ti-eye-off"></i></span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remember-me" />
                                <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                            </div>
                        </div>
                        <button onClick={(e) => { signIn(e) }} className="btn btn-primary d-grid w-100" type="button">Sign in</button>
                    </form>

                    <p className="text-center">
                        <span>New on our platform?</span>
                        <a href="auth-register-cover.html">
                            <span>Create an account</span>
                        </a>
                    </p>

                    <div className="divider my-4">
                        <div className="divider-text">or</div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <a href="javascript:;" className="btn btn-icon btn-label-facebook me-3">
                            <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                        </a>

                        <a href="javascript:;" className="btn btn-icon btn-label-google-plus me-3">
                            <i className="tf-icons fa-brands fa-google fs-5"></i>
                        </a>

                        <a href="javascript:;" className="btn btn-icon btn-label-twitter">
                            <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
