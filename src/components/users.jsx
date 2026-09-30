import "./global.css"

export default function users({user}){
    return(
        <div className="card-wrap">
            <h3>{user.name.first}{""}{user.name.last}</h3>
            <img src={user.image} alt=""/>
            <p>{birthDate}</p>
            <p>{user.address.city}</p>
            <p>{user.phone}</p>
        </div>
    )
}