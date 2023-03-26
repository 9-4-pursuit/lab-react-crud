import { NavLink } from "react-router-dom";

export default function MovieListing(props) {

    return (
        <>
        <article className="show">
            <h3 className="title">
                <NavLink to={`/movies/${props.id}`}> {props.title} </NavLink>
            </h3>
            <p className="description"> {props.description} </p>
            <aside className="details">
                <p>
                    <span> Listed Categories: </span>
                    {props.listedIn}
                </p>
                <p>
                    <span> Duration: </span> {props.duration}
                </p>
            </aside>
        </article>
        </>
    )
}