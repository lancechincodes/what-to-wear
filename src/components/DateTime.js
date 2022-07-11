import '../cssFiles/DateTime.css'

function DateTime({dateTime}) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dateAndTime = dateTime.split(" ")

    // convert api data into month day, year
    const date = dateAndTime[0].split("-")
    const month = months[Number(date[1]) - 1]
    const day = Number(date[2])
    const year = Number(date[0])

    // convert time to hours and minutes (AM/PM)
    let time = dateAndTime[1].split(":")
    const minute = time[1]
    let hour = Number(time[0])
    if (hour > 12) {
        hour -= 12
        time = `${hour}:${minute} PM`
    }
    else {
        time = `${hour}:${minute} AM`
    }
    return(
        <div className="dateTime">
            <p className="updated">Last updated local time</p>
            <p className="time">{time}</p>
            <p className="date">{month} {day}, {year} </p>
        </div>
    )
}

export default DateTime