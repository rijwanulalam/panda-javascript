const headings = document.getElementsByTagName("h2");
for(const heading of headings){
    heading.style.color = "lightblue";
}

const backPack = document.getElementById('backpack').style.backgroundColor = "tomato ";

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.padding = "30px";
}

// document.getElementById("shoes-container").addEventListener("click", function(){
//     // console.log(event.target)
//     // event.target.parentNode.removeChild(event.target);
//     // event.target.parentNode.removeChild(event.target);
//     document
// })
// document.getElementById("remove-btn").addEventListener("click", function(event){
//     // const container = document.getElementById("shoes-container");
//     // container.removeChild()
//     const remove = event.target.parentNode.parentNode.parentNode;
//     remove.parentNode.removeChild(remove);
// })


// reomoving card from section
function removecard(event){
    // const removeBtn = document.getElementsByClassName('btn');
    // console.log(removeBtn)
    const removeBtn = event.target.parentNode.parentNode.parentNode;
    removeBtn.parentNode.removeChild(removeBtn);
    // const remove = event.target.parentNode.parentNode.parentNode;
    // remove.parentNode.removeChild(remove);
}

// disable button
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text = event.target.value;
    if(text === "email"){
        document.getElementById("disable-btn").removeAttribute("disabled", false);
    }
    else{
        document.getElementById('disable-btn').setAttribute('disabled', true);
    }
})

// change image
// function changeImg(event){
//     const img = event.target.innerText;
//     console.log(img)
// }

// double click event

const colorChange = document.getElementById("color-change");
colorChange.addEventListener("dblclick", function(){
    colorChange.style.backgroundColor = "tomato";
})