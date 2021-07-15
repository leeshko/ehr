import s from '../../components/entrance/selectButton.module.css';

const SelectButton = ({ showEntranceForm, children, assign, job, communication }) => {
  
    
    return (
        <button className={s.btn} onClick={showEntranceForm} onClick={() => assign(job, communication)} >
            {children}
        </button>
    )
}

export default SelectButton;