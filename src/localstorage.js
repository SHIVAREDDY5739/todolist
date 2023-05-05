console.log("Page is Ready")
var take_input=Document.getElementById("take_input")
var take_input_key=Document.getElementById("take_input_key")
var save_value=Document.getElementById("save_value")
var localstorage_value=Document.getElementById("localstorage_value")
var read_localstorage=Document.getElementById("read_localstorage")
var delete_date=Document.getElementById("delete_data")
var read_all_data=Document.getElementById("read_all_data")

save_value.onclick=function(){
    localstorage.setItem(take_input_key,take_input.value);
}

read_localstorage.onclick=function(){
    localstorage_value.textContent=localStorage.getItem("name");
}

delete_data.onclick=function(){
    localstorage_value.removeItem("name");
}

read_all_data.onclick=function(){
    var keys=object.keys(localstorage);
    console.log(keys);

    for(var key of keys){
        console.log("key : "+key+" : Value : "+localstorage.getItem(key));
    }
}