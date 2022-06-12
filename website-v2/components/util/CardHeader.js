
const CardHeader = (props) => {

    const {
        iconName,
        headerText
    } = props

    return (
        <div className={'headerParent'}>
            {iconName && <img
                className={'icon'}
                src={`/images/icons/${iconName}`}
            />}
            <div className={'headerMessage'} >{headerText}</div>
        </div>
    )
}

export default CardHeader