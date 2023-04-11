function timeCheck(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let timeShow = hrs+":"+mins+":"+secs;
    return timeShow;
}

export function attachTimeDiv(){
    let element_div = document.querySelector("#Display_Time");
    element_div.innerHTML = "";
    element_div.innerHTML = timeCheck();
}

