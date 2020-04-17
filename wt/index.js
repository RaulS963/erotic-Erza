// var database = firebase.database();

// database.ref("users/2").set({
//     name: "lucy",
//     age: 17
// });

// var ref = database.ref("users");
// ref.on('value', gotData, errorData);

// function gotData(data) {
//     console.log("+------+")
//     let scores = data.val();
//     var keys = Object.keys(scores);
//     console.log(keys)
//     console.log(scores[0].name)



// }

// function errorData(err) {
//     console.log("error");
//     console.log(err);
// }

var div = new Tag("div", "root");
div.css({
    height: '100px',
    width: '100px',
    backgroundColor: 'red'
})

var imageURL;

const imageFile = document.getElementById("image-file");
imageFile.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            //console.log(reader.result);
            imageURL = reader.result
            document.getElementById("image-holder").src = imageURL;
            
        }
        reader.readAsDataURL(file);
    }

});

console.log("---");

function push(){
    var database = firebase.database();
    database.ref("imagesrc").push(imageURL)
}

function get(){
    var database = firebase.database();
    var ref = database.ref("imagesrc");
    ref.on('value', function(data){
        let items = data.val();
        let keys = Object.keys(items);
        for(let i=0;i<keys.length;i++){
            let k = keys[i];
            let image = new Tag("img","img_id"+i.toString(),"root");
            image.attrib({
                src: items[k]
            });
            image.css({
                maxWidth:'100%'            
            });
        }

    }, function(err){
        console.log(err);
    });


}

// function selectImage(event){
//     let file = event.target.files[0];
//     console.log(file);
//     const reader = new FileReader();
//     reader.onload = () => {
//         this.setState({
//             src: reader.result
//         });
//         console.log(reader.result);
//     }
//     reader.readAsDataURL(file);
// }
