
// wraps text in a div with class as class_f. class_f can be array of strings or a string
export function wrapDiv(text,class_f) {
    let rStr = "<div" + addClass(class_f) + ">" + text + "</div>";
    return rStr;
}

// returns the class of the div in wrapDiv can also be used for other html elements
function addClass(class_f){
    if (typeof class_f == "string") {
        return "class='" + class_f + "'";
    } else if (typeof class_f === "undefined") {
        return;
    } else if ( Array.isArray(class_f)){
        let rStr = "class ='";
        class_f.forEach(element => {
            rStr += element +" ";
        });
        rStr += "'";
        return rStr;
    } else {
        return;
    }
}
