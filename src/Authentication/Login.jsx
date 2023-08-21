import React from 'react';

function Login() {
    return (
        <div className="container-fluid bg-primary vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        <h2 className="text-center">Login</h2>
                    </div>
                    <div className="card-body">
                        <form id="loginForm">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
