import React, {useState} from 'react';
import "./ModalWindowLogin.css"

const ModalWindowLogin = ({closeLog}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = e => {
        e.preventDefault()

        // console.log(email, password)
        alert(`Вы успешно авторизовались Ваш логин: ${email} Ваш пароль: ${password}` )
    }

    return (
        <section>
            <div className="form-box">
                <div className="formValue">
                    <form onSubmit={submit}>
                        <h2>Login</h2>
                        <div className="inputBox">
                            <input
                                onChange={event => setEmail(event.target.value)}
                                   value={email}
                                type="email"
                                required/>
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input value={password}
                                   onChange={event => setPassword(event.target.value)}
                                   type="password"
                                   required/>
                            <label>Password</label>
                        </div>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ModalWindowLogin;