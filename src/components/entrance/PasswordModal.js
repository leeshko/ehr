import s from './passwordModal.module.css';

const PasswordModal = () => {
    return (
            <div className={s.modal} >
            Пароль должен содержать не менее 8 символов и состоять из строчных, заглавных букв и цифр.
            </div>
    )
}

export default PasswordModal;