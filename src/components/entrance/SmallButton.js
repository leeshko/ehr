import s from '../../components/entrance/smallButton.module.css';

const SmallButton = ({ children, width }) => {
    return (
        <button className={s.btn} style={width}>
            {children}
        </button>
    )
}

export default SmallButton;