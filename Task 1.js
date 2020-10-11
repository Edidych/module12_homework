const obj = {
    fruit: "mango",
    veget: "potato",
}
function appier(get){
    for (let src in get){
        if(get.hasOwnProperty(src)){
            console.log(`${src}: ${get[src]}`);
        }
    }
}

appier(obj);