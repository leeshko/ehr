import s from './checkBoxSq.module.css';

const CheckboxSq = ({children}) => {

    return (
        <div className={s.checkbox}>
            <label className={s.customCheckbox}>
                <input type="checkbox" name="color-1" value="indigo"></input>
                <span>{children}</span>
            </label>
        </div>
    )
}

export default CheckboxSq;