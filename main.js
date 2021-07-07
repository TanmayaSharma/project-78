var photos=["Ishu.JPG","Mummy.JPG","Papa.JPG"];
var names=["Tanmaya","Nisha" ,"Bhavya"];
var i=0;
function next_page()
{
    document.getElementById("img1").src=photos[i];
    document.getElementById("name1").innerHTML=names[i];
    i++;
}