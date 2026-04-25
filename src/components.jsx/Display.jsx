import Style from "./Display.module.css"
function Display({displayvalue}) {
    return <input className={Style.Display} type="text" value={displayvalue}readOnly />
}
export default Display