import userImage from '../assest/user.png';
import loginCss from '../css/Login.module.css'

const Login = () => {

    return (

        <div  className={loginCss.body}>
            <div className={loginCss.content} >
                <img className={loginCss.img} src={userImage} />
             
                <div className={loginCss.contentForm}>
                    
                    <form>
                        <div className={loginCss.input_div}>
                        <h2>Login</h2>
                            <input type='text' className={loginCss.input}></input>
                            <input type='password' className={loginCss.input}></input>
                        </div>
                     
                    </form>
                </div>
           
            </div>
            <button className={loginCss.button}>LogIn</button>
        </div>

    )
}

export default Login;