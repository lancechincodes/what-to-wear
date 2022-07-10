import '../cssFiles/DateTime.css'

function DateTime({dateTime}) {
 
    return(
        <div className="dateTime">
            <p className="time">{dateTime}</p>
            <p className="date">{dateTime}</p>
        </div>
    )
}

export default DateTime