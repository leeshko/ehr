import s from './registerBloc.module.css';

const RegisterBlock = () => {
    return (
        <div className={s.register}>
            <span className={s.noAcc}>Еще нет аккаунта?</span>
            <a href="#" className={s.regAcc}>Зарегистрируйтесь.</a>
        </div>

    )
}

export default RegisterBlock;