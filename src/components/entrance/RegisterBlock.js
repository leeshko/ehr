import s from './registerBloc.module.css';

const RegisterBlock = ({register}) => {

    return (
        <div className={s.register}>
            <span className={s.noAcc}>Еще нет аккаунта?</span>
            <a href="#" className={s.regAcc} onClick={register}>Зарегистрируйтесь.</a>
        </div>

    )
}

export default RegisterBlock;