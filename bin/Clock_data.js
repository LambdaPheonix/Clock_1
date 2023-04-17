import {wrapDiv} from "./Clock_Format.js";

function timeCheck(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let timeShow = addZeros(hrs)+":"+addZeros(mins)+":"+addZeros(secs);
    return timeShow;
}

export function attachTimeDiv(){
    let time = timeCheck();
    let element_div = document.querySelector("#Display_Time");
    element_div.innerHTML = "";
    element_div.innerHTML = wrapDiv(time,"clock");
}

function addZeros(text){
    let i = isNaN(Number(text))?null : Number(text);
    if (i == null){
        return text;
    } 
    if (typeof i == "number"){
        if (i > 9){
            return String(i);
        } else if (i >= 0 && i < 10){
            return "0" + String(i); 
        } else {
            if (i > -10 && i < 0 ){
                let j = Math.abs(i);
                return "-0"+String(j);
            } else {
                return String(i);
            }
        }
    }
}