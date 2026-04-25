
import Style from "./Button.module.css"


const Button = ({onButtonclicked}) => {
    const buttonnames = [ "C", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=" ]
    return <div className={Style.buttonContainer}>
            {buttonnames.map((buttonText) => (
                <button key={buttonText} className={Style.button} onClick={() => onButtonclicked(buttonText)}>
                    {buttonText}
                </button>
            ))}
          </div>
    
}
export default Button