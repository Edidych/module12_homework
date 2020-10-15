let obj = {
    fruit: "apple",
    veget: "potato",
}

let str = "fruit";

function check(string, object){
    console.log(string in object);
}

check(str, obj)

// Всё решено верно. Выше показала, как можно упростить код и записать то же самое короче :)