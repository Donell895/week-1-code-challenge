function checkspeed(speed){
 const limitspeed=70
 const more=5
 const pointsbove=12
 if(speed <=limitspeed){
    return "Okay"

 }else {
    const maximumspeed=speed-speed-limitspeed
    const marks=Math.floor(speed/more)
    if(marks>pointsabove){
        return "LICENCE CANCELED"
    }else{
        return "points"+points
    }
 }

}
const speed =parseInt("100")
checkspeed(speed)
console.log(checkspeed(speed))