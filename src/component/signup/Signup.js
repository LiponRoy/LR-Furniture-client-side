import React, { useEffect, useState } from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '../../FirebaseConfig/Firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Signup = () => {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [userError, setUserError] = useState({
		emailError: '',
		passwordError: '',
		confirmPasswordError: '',
		generalError: '',
	});

	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
	//for google signin
	// for email
	const handleEmail = event => {
		const emailREGEX = /\S+@\S+\.\S+/;
		const validEmail = emailREGEX.test(event.target.value);
		if (validEmail) {
			setUserInfo({ ...userInfo, email: event.target.value });
			setUserError({ ...userError, emailError: '' });
		} else {
			setUserError({ ...userError, emailError: 'Invalid email' });
			setUserInfo({ ...userInfo, email: '' });
		}
	};

	// for password
	const handlePassword = event => {
		const passwordREGEX = /.{6,}/;
		const validPassword = passwordREGEX.test(event.target.value);
		if (validPassword) {
			setUserInfo({ ...userInfo, password: event.target.value });
			setUserError({ ...userError, passwordError: '' });
		} else {
			setUserError({ ...userError, passwordError: 'minimum 6 charecter' });
			setUserInfo({ ...userInfo, password: '' });
		}
	};

	// for confirm password
	const handleConfirmPassword = event => {
		if (event.target.value === userInfo.password) {
			setUserInfo({ ...userInfo, confirmPassword: event.target.value });
			setUserError({ ...userError, confirmPasswordError: '' });
			// return;
		} else {
			setUserError({ ...userError, confirmPasswordError: 'Password do not match' });
			setUserInfo({ ...userInfo, confirmPassword: '' });
		}
	};
	//submit
	const handleCreateUser = event => {
		event.preventDefault();
		createUserWithEmailAndPassword(userInfo.email, userInfo.password);
	};

	// valovabe singup hole home e jao
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	useEffect(() => {
		if (user) {
			navigate(from);
		}
	}, [user]);

	//go to google
	const goToLogin = () => {
		navigate('/login');
	};

	return (
		<div className='container'>
			<div>
				<div className='row'>
					<div className='col-md-3'></div>
					<div className='col-md-6 signup-contain'>
						<div className='text-center'></div>
						<form onSubmit={handleCreateUser} className='my-signup-form'>
							<h3 className=' mb-3'>Signup </h3>
							<div className='form-group'>
								<label htmlFor='exampleInputEmail1'>Email address</label>
								<input type='email' onChange={handleEmail} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' required />
								{userError?.emailError && <p className='signUpError'>{userError.emailError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputPassword1'>Password</label>
								<input type='password' onChange={handlePassword} className='form-control' id='exampleInputPassword1' placeholder='Password' required />
								{userError?.passwordError && <p className='signUpError'>{userError.passwordError}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='exampleInputConfirmPassword'>Password</label>
								<input type='password' onChange={handleConfirmPassword} className='form-control' id='exampleInputPassword1' placeholder='ConfirmPassword' required />
								{userError?.confirmPasswordError && <p className='signUpError'>{userError.confirmPasswordError}</p>}
							</div>
							<button type='submit' className='btn btn-warning mt-2 signupBtn'>
								Submit
							</button>

							<p style={{ color: 'red' }}>{error?.message}</p>
							{/* <p style={{ color: 'blue' }}>{loading}</p> */}
						</form>
						<div className='m-2'>
							<span>Already have account ?</span>
							<span onClick={goToLogin} className='goToSignupPage '>
								login page
							</span>
						</div>
						<SocialLogin></SocialLogin>
					</div>
					<div className='col-md-3'></div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
