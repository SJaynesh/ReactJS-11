import Third from "./Third";

export default function Location({ city, state, country, num }) {

    return <>
        <div>
            <p>City : {city}</p>
            <p>State : {state}</p>
            <p>Country : {country}</p>
        </div>

        <h2>{num}</h2>

        <Third number={num} />


    </>
}