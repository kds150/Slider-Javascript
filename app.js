let image = document.querySelector('.image');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let smallImg = document.querySelector('.small-img');
let smallImage = document.getElementsByClassName('small-image');
let currentValue = document.querySelector('#current-value');
let index = 0;



let voitures = [
"https://i.gaw.to/content/photos/40/08/400834_Tesla.jpg",
"https://blobsvc.wort.lu/picture/a527e42e6f1dd983d13a542dc51333f7/1600/600/crop/0/500/3149/1684/wortv3/2009f95e9ac603756226a06cd33d32b7157de876",
"https://i.ibb.co/NtqFpxs/medium.jpg",
"https://i.ibb.co/cyPMJvL/ms-homepage-social.jpg",
"https://i.ibb.co/pnXrN99/MX-Social.jpg",
"https://cdn.motor1.com/images/mgl/P3GwKL/s3/foto-tesla-model-2-il-render-di-motor1-com.jpg",
"https://i.ibb.co/Q9m9FTy/tesla-model-s-retard.jpg",
"https://cap.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcap.2F2022.2F03.2F11.2Fc1798db4-0dde-4782-8ab1-a9b32d8d46b7.2Ejpeg/1200x630/background-color/ffffff/focus-point/1206%2C777/quality/70/tesla-le-prix-de-la-model-3-bondit-en-une-nuit-1430852.jpg",
"https://d500.epimg.net/cincodias/imagenes/2021/05/06/motor/1620314670_167195_1620316112_rrss_normal.jpg"

]

function showcurrentValue (){
currentValue.innerHTML = `${index+ 1}  / ${voitures.length}`
}

console.log(index);

for ( let i=0; i < (voitures.length); i++) {
smallImg.innerHTML += `<img src="${voitures[i]}" class="small-image ${i == 0 ? 'active': ''}" id="${i}"/>`
}



function removeClasslist () {
for(let j = 0; j< smallImage.length; j++){
    smallImage[j].classList.remove('active');
}
}



for(let i = 0; i< smallImage.length; i++){
smallImage[i].addEventListener('click',function(){
    // console.log(this);
       index = Number(this.id);
       console.log(index)
       image.src = voitures[index];
       removeClasslist ();
       this.classList.add('active');
       showcurrentValue ()
        
    });
}

// Button précédent
prevBtn.addEventListener('click', () => {

if (index == 0){
    index = voitures.length - 1;
} else {
    index--;
}
image.src = voitures[index];
removeClasslist ();
smallImage[index].classList.add('active');
showcurrentValue ();
console.log(index)

})

// Button suivant
nextBtn.addEventListener('click', () => {

if (index == (voitures.length - 1)){
    index = 0;
} else {
    index++;
}
image.src = voitures[index];
removeClasslist ();
smallImage[index].classList.add('active');
showcurrentValue ();
console.log(index)
})



setInterval( () => {
image.src = voitures[index];
removeClasslist ();
smallImage[index].classList.add('active');
;
showcurrentValue ();
// console.log(index);
if( index == (voitures.length - 1) ){
    index = 0;
} else {
    index++;
}

}, 1000);