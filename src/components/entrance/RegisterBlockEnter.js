import s from './registerBloc.module.css';

const RegisterBlock = ({register}) => {

    return (
        <div className={s.register}>
            <span className={s.noAcc}>Уже есть аккаунт?</span>
            <a href="#" className={s.regAcc} onClick={register}>Войдите.</a>
        </div>

    )
}

export default RegisterBlock;