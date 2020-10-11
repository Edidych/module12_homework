let obj = {
    fruit: "apple",
    veget: "potato",
}

let str = "fruit";

function check(string, object){
    if(string in object){
        console.log("true");
    }else{
        console.log("false");
    }
}

check(str, obj)