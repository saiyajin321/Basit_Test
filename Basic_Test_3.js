const convertTime12to24 = time12h => {
    const [time, modifier] = time12h.split(" ");
   
    let [hours, minutes, seconds] = time.split(":");
   
    if (hours === "12") {
        hours = "00";
    }
   
    if (modifier === "PM") {
        hours = (parseInt(hours, 10) + 12).toString();
    }
   
    return `${hours}:${minutes}:${seconds}`;
};
   
var convertedTime = convertTime12to24("01:00:45 PM");
console.log(convertedTime);
