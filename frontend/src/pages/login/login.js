import '../../css/Login.css';
import React, { useState } from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import CryptoJS from 'crypto-js';
import { notification } from 'antd';
import baseUrl from "../../backend/BaseUrl";
function Login(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [api, contextHolder] = notification.useNotification();

	const openNotificationWithIcon = (type) => {
		api[type]({
			message: 'Giriş Hatası',
			description:
				'Lütfen, kullanıcı adı veya şifrenizi kontrol ediniz!',
		});
	};
	const handleLoginSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (!response.ok) {
				const data = await response.json();
				setError(data.error);
				openNotificationWithIcon('error')
			} else {
				const data = await response.json();
				const plaintext = data.access_token;
				const token = CryptoJS.AES.encrypt(plaintext, password).toString();
				localStorage.setItem('token', JSON.stringify(token));
				window.location.href = data.redirect;
			}
		} catch (error) {
			setError(error.message);
		}
	}
	const handleSubmit = (values,{resetForm,setSubmitting}) => {
		const data = new FormData();
		data.append('register_email',values.register_email);
		data.append('register_name',values.register_name);
		data.append('register_password',values.register_password);
		axios.post(baseUrl+'register',data,
			{
				headers: {
					'Authorization': 'Bearer'
				}
			}).then((res)=> {
			const createDenied = (type) => {
				api[type]({
					message: 'Kayıt Hatası',
					description:
						res.data.error,
				});
			};
			if (res.data.error){
				createDenied('error')
			}
				resetForm({});
				setSubmitting(false)
		}).catch((err)=>{
			console.log(err)
		})
	}
    return(
        <>
	<div className="background">
		<div className="main">
			<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div className="signup">
				<Formik
				initialValues={{
					register_name:'',
					register_email:'',
					register_password:'',
				}}
				onSubmit={handleSubmit}
				validationSchema={
					Yup.object().shape({
						register_name:Yup.string().required('Kullanıcı Adı Zorunludur!'),
						register_email:Yup.string().email('Lütfen geçerli bir email adresi girin!').required('Email Zorunludur!'),
						register_password:Yup.string().required('Şifre Zorunludur!'),
					})

				}
				>
					{({
						  values,
						  handleChange,
						  handleSubmit,
						  errors,
						  touched
					  }) => (
				<form>
					<label className='lbl' htmlFor="chk" aria-hidden="true">Kayıt Ol</label>
					<input value={values.register_name} onChange={handleChange('register_name')} className='input' type="text" name="txt" placeholder="Kullanıcı Adı" required=""></input>
					{(errors.register_name && touched.register_name) && <p className="login-form-error-1">{errors.register_name}</p>}
					<input value={values.register_email} onChange={handleChange('register_email')} className='input' type="email" name="email" placeholder="E-mail" required=""></input>
					{(errors.register_email && touched.register_email) && <p className="login-form-error-2">{errors.register_email}</p>}
					<input value={values.register_password} onChange={handleChange('register_password')} className='input' type="password" name="pswd" placeholder="Şifre" required=""></input>
					{(errors.register_password && touched.register_password) && <p className="login-form-error-3">{errors.register_password}</p>}
					<button type="button" onClick={handleSubmit} className='btn-login'>Kayıt</button>
				</form>
					)}
				</Formik>
			</div>
			<div className="login">
				{contextHolder}
				<form onSubmit={handleLoginSubmit}>
					<label className='lbl' htmlFor="chk" aria-hidden="true">Giriş Yap</label>
					<input value={email} onChange={(e)=>setEmail(e.target.value)} className='input' type="email" name="email" placeholder="Email" required=""></input>
					<input value={password} onChange={(e)=>setPassword(e.target.value)} className='input' type="password" name="pswd" placeholder="Şifre" required=""></input>
					<button type="submit" className='btn-login' >Giriş</button>

				</form>
			</div>

		</div>
	</div>

        </>
    )
}
export default Login;