import styles from '../../styles/Util.module.css'

const CardHeader = (props) => {
    return (
        <div className={styles.headerParent}>
            <img
                className={styles.icon}
                src={`/images/icons/${props.iconName}`}
            />
            <div className={styles.headerMessage} >{props.headerText}</div>
        </div>
    )
}

export default CardHeader