const ConceptItem = (props) => {

    return(
            <li className="concept">
                <img src={props.item.image} alt="TODO: TITLE" />
                <h2>TODO: {props.item.title}</h2>
                <p>TODO: {props.item.description}</p>
            </li>
    );
}

export default ConceptItem;

