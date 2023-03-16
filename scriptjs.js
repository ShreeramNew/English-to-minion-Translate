
var button_click = document.querySelector(".button");
var input_area = document.querySelector(".input_text");
var output_Text = document.querySelector(".output_text");
var out_title=document.querySelector(".h3");
var visible="visible"; 

button_click.addEventListener("click", ()=>{
    console.log("Jai Shreeram bhakth Hanuman");
    output_Text.innerHTML="";
    var input_text = input_area.value;
    input_area.style.placeholder="Loading...";
    var api_url = "https://api.funtranslations.com/translate/minion.json";
    var final_url = api_url + "?text=" + input_text;
    fetch(final_url)
    .then(promise=>promise.json())
    .then(jsonResult=>{
        out_title.style.visibility=visible;
        output_Text.style.visibility=visible;
        output_Text.innerHTML=jsonResult.contents.translated;
    });    
});
input_area.addEventListener("onCha")
