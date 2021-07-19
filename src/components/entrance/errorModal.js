import s from '../../components/entrance/errorModal.module.css';

const ErrorModal = ({ children }) => {
    return (
        <div className={s.error}>
            {children}
        </div>
    )
}

export default ErrorModal;