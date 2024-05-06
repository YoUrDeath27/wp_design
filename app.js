const text = document.querySelector('#inspiring h1');
const inside = text.innerHTML.split("");
const list = [];

(() => {
    for(let i = 0; i < inside.length; i++){
        if(inside[i] == '.'){
            inside.splice(i ++, 1, ".<br>");  
            list.push(i)
        }
    }
    inside.splice(0, 0, '"')
    inside.splice(list[list.length - 1] , 1 , '."');
    
    text.innerHTML = inside.join('');
    })();  //this function calls itself once 

function scroll_to_Featured () {
    window.scroll({
    top: 1230,
    left: 0,
    behavior: "smooth",
    });
}

function scroll_to_Historic () {
    window.scroll({
    top: 2600,
    left: 0,
    behavior: "smooth",
    });
}

//for formular \/

const formular = document.querySelector("#alert").style

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.querySelector("#nume").value 
        ? document.querySelector("#nume").value 
        : "Doe" ;

    let surname = document.querySelector("#prenume").value 
        ? document.querySelector("#prenume").value
        : "John" ; 

    let number =  document.querySelector("#telefon").value 
        ? document.querySelector("#telefon").value 
        : "(346) 366-7385" ;

    let message = document.querySelector("#mesaj").value
        ? document.querySelector("#mesaj").value
        : "No mesage sent, Phue";

    formular.display="none"
    setTimeout(() => { window.alert(surname + " ;  " +
                                    name + " ;  " +
                                    number + " ;  " + 
                                    message) }, "100");
    
    form.reset() // to reset the values
});

function PopUp() {
    
    switch(formular.display){
        case "none":
            formular.display = "block";
            break;
        case "block":
            formular.display = "none";
            break;
        default:
            document.querySelector("#alert").style.display = "block";
            // for the first time
    }
}


//for carousell \/ ☺ :(

// the classes i am supposed to add
// and some buttons to control how they interact
// done, now the functionaity

// left middle right
// left to middle ; left to right
// right to left ; right to middle
// middle to left ; middle to right

// create where the images will show
const Podium = document.createElement('div');
Podium.id = "images_podium";

// create button for rolling to left
const leftButton = document.createElement('button');
leftButton.id = 'button_left';
leftButton.innerHTML = '<';
Podium.appendChild(leftButton);

// create button for rolling to right
const rightButton = document.createElement('button');
rightButton.id = 'button_right';
rightButton.innerHTML = '>';
Podium.appendChild(rightButton);

// create button for exiting the image viewer
const exit = document.createElement('button');
exit.innerHTML = "X";
exit.setAttribute('id', 'exit')
Podium.appendChild(exit);

// creating the images
const image1 = document.createElement('img');
const image2 = document.createElement('img');
const image3 = document.createElement('img');

// adding an EventListener for every image in the projects div
const Images = document.querySelectorAll("#projects img");
Images.forEach(function(element) {
    element.addEventListener("click", function(event) {
        const image = event.target;

        if (image.parentElement.id.includes("parent")) {

            image1.setAttribute('src', image.src );
            image2.setAttribute('src', image.parentElement.children[1].children[0].src);
            image3.setAttribute('src', image.parentElement.children[1].children[1].src);

            image1.id = 'middle';
            image2.id = 'right';
            image3.id = 'left';

        } else {
            console.log("alt: " + image.alt);

            image1.setAttribute('src', image.parentElement.parentElement.children[0].src);
            image2.setAttribute('src', image.parentElement.children[0].src);
            image3.setAttribute('src', image.parentElement.children[1].src);

            // debugger;

            if(image.parentElement.children[0] == image){
                image1.id = 'left';
                image2.id = 'middle';
                image3.id ='right';
            }
            else{
                image1.id = 'right';
                image2.id = 'left';
                image3.id = 'middle';
            }

        }


        Podium.append(image1);
        Podium.append(image2)
        Podium.append(image3)

        
        Podium.classList.add('entering');
        document.body.appendChild(Podium);
        setTimeout(() => {Podium.classList.remove('entering')}, 500)

    });
});

// making the left and right buttons functionality
leftButton.addEventListener("click", function(){
    document.getElementById('left').id = 'leftToMiddle';
    document.getElementById('middle').id =  'middleToRight';
    document.getElementById('right').id = 'rightToLeft';

    setTimeout(()=> {
        document.getElementById('leftToMiddle').id = 'middle';
        document.getElementById('middleToRight').id = 'right';
        document.getElementById('rightToLeft').id = 'left';
    },1000)
})

rightButton.addEventListener("click", function(){
    document.getElementById('left').id = 'leftToRight';
    document.getElementById('middle').id =  'middleToLeft';
    document.getElementById('right').id = 'rightToMiddle';

    setTimeout(()=> {
        document.getElementById('rightToMiddle').id = 'middle';
        document.getElementById('leftToRight').id = 'right';
        document.getElementById('middleToLeft').id = 'left';
    },1000)
})




// Event listener for the exit button
exit.addEventListener("click", function() {

    Podium.classList.add('leaving')
    setTimeout(() => {
        Podium.classList.remove('leaving')
        Podium.remove()
    }, 500)
    
    
});

    