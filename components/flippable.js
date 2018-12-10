const Flippable = (props) => (
    <div className="flippable-wrapper">
        <div className="flippable">
            <span className="flippable-circle front">
                <img className="front"
                    src={props.frontSrc}
                    alt={props.frontAlt}
                />
            </span>
            <span className="flippable-circle back">
                <img className="back"
                    src={props.backSrc}
                    alt={props.backAlt}
                />
            </span>
        </div>
    </div>
)

export default Flippable