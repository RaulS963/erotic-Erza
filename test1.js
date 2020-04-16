window.onload = async function(){
    var response = await fetch("https://rauls963.github.io/rps2/data.json");
    var data = await response.json();
    console.log(data);

   data.map((item) => {
       var image = new Tag("img","root");
       image.attrib({
           src:item.src,
       });
       image.css({
           maxHeight:"100vh"
       })
   })

}


