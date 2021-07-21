import s from './text.module.css';

const Text = ({children}) => {
    return (
        <>
        <div className={s.textEnter}>{children}</div>
        </>
    )
}

export default Text;