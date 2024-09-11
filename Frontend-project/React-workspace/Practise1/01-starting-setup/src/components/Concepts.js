import ConceptItem from "./ConceptItem";

const Concepts= (props) => {

    return (
        <>
            <ConceptItem item={props.data[0]}></ConceptItem>
            <ConceptItem item={props.data[1]}></ConceptItem>
            <ConceptItem item={props.data[2]}></ConceptItem>
        </>
    );
}

export default Concepts;