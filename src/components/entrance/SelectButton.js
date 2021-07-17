import s from '../../components/entrance/selectButton.module.css';

const SelectButton = ({ showEntranceForm, children, assign, job, communication }) => {
    
    return (
        <button className={s.btn} onClick={showEntranceForm} onClick={() => {
            if (job !== undefined) {
                assign(job, communication)
            } else {
            showEntranceForm();}
        }

        } >
            {children}
        </button>
    )
}

export default SelectButton;