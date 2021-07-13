import s from '../../components/entrance/selectButton.module.css';
const SelectButton = ({ showEntranceForm }) => {
    return (
        <button className={s.btn} onClick={showEntranceForm}>
            Выбрать ключ ЭЦП на этом ПК
        </button>


    )
}

export default SelectButton;