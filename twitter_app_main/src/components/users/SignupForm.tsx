import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignupForm(){

    const [error,setError] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setpassword] = useState<string>("");
    const [passwordConfirmation,setPasswordConfirmation] = useState<string>("");

    return (

        <form className="form form--lg">
            <div className="form__title">회원가입</div>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type='text' name='email' id='email'  value={email} required />
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type='password' name='password' id='password' value = {password} required />
            </div>
            <div className="form__block">
                <label htmlFor="password_confirmation">비밀번호 확인</label>
                <input type='password' name='password_confirmation' id='password_confirmation' value = {passwordConfirmation}required />
            </div>
            {/*만약 에러가 있다면? */}
            {error && error?.length >0 && (
                <div className="form__block">
                    <div className="form_error">{error}</div>
                </div>
            )}

            <div className="form__block">
                계정이 있으신가요?
                <Link to='/login' className='form__link'>
                    로그인하기
                </Link>
            </div>
            <div className="form__block">
                <button type='submit' className="form__btn-submit" disabled = {error?.length >0}>회원가입</button>
            </div>
        </form>
    );
}