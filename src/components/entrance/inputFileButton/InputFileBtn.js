import s from './inputFileBtn.module.css';

const InputFileBtn = () => {

    return (
            <label className={s.styledInput} htmlFor="uploadKey">
                <p>Выбрать ключ ЭЦП на этом ПК</p>
                <input type="file" className={s.btn} id="uploadKey" >
                </input>
            </label>
    )
}

export default InputFileBtn;