import React, { useState } from 'react';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../FirebaseConfig/Firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [userError, setUserError] = useState({
		email: '',
		password: '',
		general: '',
	});

	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
	//for password reset
	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
	// for navigate
	const navagate = useNavigate();
	// email input
	const handleEmailonChange = event => {
		const emailREGEX = /\S+@\S+\.\S+/;
		const validEmail = emailREGEX.test(event.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: event.target.value });
			setUserError({ ...userError, email: '' });
		} else {
			setUserError({ ...userError, email: 'Invalid email' });
			setUserInfo({ ...userInfo, email: '' });
		}
	};
	// password input
	const handlePasswordonChange = event => {
		const passwordREGEX = /.{6,}/;
		const validPassword = passwordREGEX.test(event.target.value);
		if (validPassword) {
			setUserInfo({ ...userInfo, password: event.target.value });
			setUserError({ ...userError, password: '' });
		} else {
			setUserError({ ...userError, password: 'minimum 6 charecter' });
			setUserInfo({ ...userInfo, password: '' });
		}
	};

	// submit
	const handleSignIn = event => {
		event.preventDefault();
		signInWithEmailAndPassword(userInfo.email, userInfo.password);
	};

	// Jodi user thake tahole eivabe korte hobe, eikhane home e jabe
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	if (user) {
		navagate(from, { replace: true });
	}
	//go to signup page
	const goToSignup = () => {
		navagate('/signup');
	};
	//password reset
	const resetPassword = async () => {
		if (userInfo.email) {
			await sendPasswordResetEmail(userInfo.email);
			toast('Sending email');
		} else {
			toast('Please enter email');
		}
	};
	return (
		<div>
			<div className='container'></div>

			<div className='row'>
				<div className='col-md-3'></div>
				<div className='col-md-6 signup-contain'>
					<div className='text-center'></div>
					<form onSubmit={handleSignIn} className='my-signup-form'>
						<h3 className=' mb-3'>Login</h3>
						<div className='form-group'>
							<label for='exampleInputEmail1'>Email address</label>
							<input type='email' onChange={handleEmailonChange} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' required />
							{userError?.email && <p className='epError'>{userError.email}</p>}
						</div>
						<div className='form-group'>
							<label for='exampleInputPassword1'>Password</label>
							<input type='password' onChange={handlePasswordonChange} className='form-control' id='exampleInputPassword1' placeholder='Password' required />
							{userError?.password && <p className='epError'>{userError.password}</p>}
						</div>

						<button type='submit' className='btn btn-secondary mt-2'>
							Submit
						</button>
					</form>
					<p className='resetPass-part m-2'>
						<div className=''>
							<span>Don't have account ?</span>
							<span onClick={goToSignup} className='goToSignupPage m-2'>
								Create Account
							</span>
						</div>
						<div className=''>
							<span>Forget Password ?</span>
							<span onClick={resetPassword} className='goToSignupPage m-2'>
								Reset Password
							</span>
						</div>
					</p>

					<ToastContainer />
				</div>
				<div className='col-md-3'></div>
			</div>
			<div />
		</div>
	);
};

export default Login;
