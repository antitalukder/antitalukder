import './button.styles.scss'
const Button_TYPE_CLASSES = {
    google : 'google-sign-in',
    invertted : 'inverted'
}

const Button = ({children , buttonType , ...otherProps}) => {
    return (
        <button className={`button-container ${Button_TYPE_CLASSES}`}  {...otherProps}>{children}</button>
    )
}

export default Button