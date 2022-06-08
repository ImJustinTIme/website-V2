import styles from '../../styles/Util.module.css'

const CardHeader = (props) => {

    const {
        iconName,
        headerText
    } = props

    return (
        <div className={styles.headerParent}>
            {iconName && <img
                className={styles.icon}
                src={`/images/icons/${iconName}`}
            />}
            <div className={styles.headerMessage} >{headerText}</div>
        </div>
    )
}

export default CardHeader