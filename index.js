let text = "Let's start the game...";
console.log(text.length);
let i = 0;
let speed = 100;

function type(){
    if (i< text.length){
        document.querySelector('#par').textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
    }
}

type();

const input = document.querySelector("#guess");
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*30) +1;

input.addEventListener ('keypress', function(e){
    if (e.keyCode === 13){
    play();}
})

button.addEventListener('click',play);

function play (){
    const userNumber = document.querySelector("#guess").value;
    if(userNumber < 1 || userNumber > 30){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Try again! Enter number from 1 to 30!',
            })
        }
    
    else if (isNaN (userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number please!',
        })
    }
    else {
        if( userNumber < answer){
            Swal.fire('Enter a number above. The computer is winning...',
            )}
        else if (userNumber > answer){
            Swal.fire('Enter a number below. The computer is winning...',
            )}
        else{
            Swal.fire({
                title: 'Win!',
                imageUrl: 'https://images.unsplash.com/photo-1603899122406-e7eb957f9fd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
                imageWidth: 600,
                imageHeight: 400,
                
            })
            }
        }
        }