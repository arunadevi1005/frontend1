import { useParams } from "react-router-dom";

function Params() {
    const { id } = useParams();

    return (
        <>
            <h1>{id ? `The id is ${id}` : "No id provided"}</h1>
        </>
    );
}

export default Params;