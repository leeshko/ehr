import s from './checkBoxSq.module.css';

const CheckboxSq = () => {

    return (
        <div >
            <input type="checkbox" className={s.checkbox} id="checkbox" />
            <label for="checkbox"></label>
        </div>
    )
}

export default CheckboxSq;