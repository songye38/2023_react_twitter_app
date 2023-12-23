import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "firebaseApp";
import { toast } from "react-toastify";

export default function SignupForm(){
    const navigate = useNavigate();

    const [error,setError] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [passwordConfirmation,setPasswordConfirmation] = useState<string>("");

    const onSubmit = async (e:any)=>{
        e.preventDefault();
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth,email,password);
            navigate('/');
            toast.success('회원가입에 성공했습니다.');
        }catch(error:any){
            toast.error(error?.code);

        }
    };

    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {
            target : {name,value},
        } = e;

        if (name==='email'){
            setEmail(value);
            const valueRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if(!value?.match(valueRegex)){
                setError('이메일 형식이 올바르지 않습니다.');
            }else{
                setError('');
            }
            
        }
        if (name==='password'){
            setPassword(value);
            if (value?.length <8){
                setError('비밀번호는 8자리 이상으로 해주세요');
            }else{
                setError('');
            }
            
        }
        if (name==='password_confirmation' && password!==null){
            setPasswordConfirmation(value);
        }else{
            setError('');
        }

    };

    return (

        <form className="form form--lg" onSubmit={onSubmit}>
            <div className="form__title">회원가입</div>
            <div className="form__block">
                <label htmlFor="email">이메일</label>
                <input type='text' name='email' id='email'  value={email} onChange={onChange} required/>
            </div>
            <div className="form__block">
                <label htmlFor="password">비밀번호</label>
                <input type='password' name='password' id='password' value = {password} onChange={onChange } required/>
            </div>
            <div className="form__block">
                <label htmlFor="password_confirmation">비밀번호 확인</label>
                <input type='password' name='password_confirmation' id='password_confirmation' value = {passwordConfirmation} onChange={onChange} required />
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