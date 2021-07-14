import s from './text.module.css';
const Buttons = ({children}) => {
    return (
        <>
        <div className={s.textEnter}>{children}</div>
        </>
    )
}


export default Buttons;