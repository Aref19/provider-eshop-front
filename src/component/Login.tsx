import userImage from '../assest/user.png';
import emaiImg from '../assest/email.png';
import passImg from '../assest/padlock.png';
import loginCss from '../css/Login.module.css'
import { useState } from 'react';
import { useAuth } from '../hook/ContextHook';
import { AuthInContext } from '../context/LoginContext';
import { axiosPrivate } from '../api/Axio';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate =useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useAuth() as AuthInContext;
    const auth = "/auth/token"


    const onCahnge = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(name);
        if (name == "email") {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    const login = () => {
        const params = new URLSearchParams(); // wen send application/x-www-form-urlencoded
        params.append('client_id', 'eshop_backend');
        params.append('client_secret', 'ZfxTLX7ZaYgR2bt6cNpZ9LE2BnHoQEjj');
        params.append('username', email);
        params.append('grant_type', 'password');
        params.append('password', password);
        const loginData = async () => {
            try {

                const respose = await axiosPrivate.post(auth, params,
                    {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        withCredentials: true

                    },
                );
                console.log(JSON.stringify(respose?.data));
                const accessToken = respose?.data?.access_token
                const refresh_token = respose?.data?.refresh_token
                setAuth({ access_Token: accessToken, username: email, password: password, refresh_token: refresh_token })
                console.log("data : ", respose?.data?.refresh_token);
                navigate("/item")
            } catch (err) {
                console.log(err);
            }

        }
        loginData()

    }

    return (

        <div className={loginCss.body}>
            <div className={loginCss.content} >
                <img className={loginCss.img} src={userImage} />

                <div className={loginCss.contentForm}>

                    <form>
                        <div className={loginCss.input_div}>
                            <h2>Login</h2>
                            <div className={loginCss.usernameidv}>
                                <img src={emaiImg} className={loginCss.imgLog} />
                                <input type='text' name='email' className={loginCss.input} onChange={onCahnge}></input>
                            </div>
                            <div className={loginCss.usernameidv}>
                                <img src={passImg} className={loginCss.imgLog} />
                                <input type='password' name='pass' className={loginCss.input} onChange={onCahnge}></input>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
            <button className={loginCss.button} onClick={login}>LogIn</button>
        </div>

    )
}

export default Login;