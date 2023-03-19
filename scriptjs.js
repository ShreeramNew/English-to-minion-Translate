
var button_click = document.querySelector(".button");
var input_area = document.querySelector(".input_text");
var output_Text = document.querySelector(".output_text");
// var out_title = document.querySelector(".out-title");
var visible = "visible";


button_click.addEventListener("click", () => {

    console.log("Jai Shreeram bhakth Hanuman");
    if (input_area.value=="") {
        alert("Please Enter some text");
        return;
    }
    output_Text.innerHTML="";
   
    var input_text = input_area.value;
    var final_url = "https://api.funtranslations.com/translate/minion.json"+ "?text=" + input_text;
    fetch(final_url)
    .then(promise=>promise.json())
    .then(jsonResult=>{
        // out_title.style.visibility=visible;
        output_Text.style.visibility=visible;
        output_Text.innerText=jsonResult.contents.translated;
    })
    .catch(()=>
    alert("Something went wrong!Please check your network connection"));

});
