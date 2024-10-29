

function Card (props) {

    console.log(props)

    return(




            <li>
                
                <img className="img-card" src={"./" + props.item.image}alt="" />

                <div className="text-elements">
                    
                    <h4><img className="fill" src="./public/fill.png" alt="" /> {props.item.location} <a href={props.item.googleMaps}>View on Google Maps</a></h4>
                    <h1>{props.item.title}</h1>
                    <h3>{props.item.date}</h3>
                    <p>{props.item.notes}</p>
                </div>
                
            </li>


                
    )
}

export default Card;
