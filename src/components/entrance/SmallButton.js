import s from '../../components/entrance/smallButton.module.css';

const SmallButton = ({ children }) => {
    return (
        <button className={s.btn} >
            {children}
        </button>
    )
}

export default SmallButton;