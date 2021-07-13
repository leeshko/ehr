import s from '../../components/entrance/selectButton.module.css';

const SelectButton = ({ showEntranceForm, children }) => {
    return (
        <button className={s.btn} onClick={showEntranceForm}>
            {children}
        </button>
    )
}

export default SelectButton;