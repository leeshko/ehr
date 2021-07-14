import s from './checkBox.module.css';

const Checkbox = ({ displayEmail }) => {
    
    return (
        <div onChange={displayEmail}>
            <input type="checkbox" className={s.checkbox} id="checkbox" />
            <label for="checkbox"></label>
        </div>
    )
}

export default Checkbox;