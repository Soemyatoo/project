function selectButton(btn) {
  
    const buttonGroup = btn.parentElement;
  
  
    const buttons = buttonGroup.querySelectorAll('.date-btn');
    buttons.forEach(button => {
      if (button === btn && button.classList.contains('active')) {
        
        button.classList.remove('active');
      } else if (button === btn) {
        
        button.classList.add('active');
      } else {
       
        button.classList.remove('active');
      }
    });
}  


const seats = document.querySelectorAll('.seatbtnTwo');

seats.forEach(seat => {
     seat.addEventListener('click', () => {
        seat.classList.toggle('isOpened');
     })
})

const vipSeat = document.querySelectorAll('.vvip');

vipSeat.forEach(seats => {
     seats.addEventListener('click', () => {
        seats.classList.toggle('isOpened')
     })
})

const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".closeModal");
const modal = document.getElementById("modal");
const checkMarkTag  = document.querySelector(".checkMark");
const closeModalTagTwo = document.querySelector(".closeModalTag");

openBtn.addEventListener("click" , () => {
  modal.classList.add("open")
})

closeBtn.addEventListener("click" , () => {
  modal.classList.remove("open")
})
let htmlbutton = '';
closeModalTagTwo.addEventListener("click" , () => {
   
    modal.classList.remove("open")
    checkMarkTag.classList.add("opened")                 
})

document.querySelector('.js-cancelBtn').addEventListener('click' , () => { 
  if (document.querySelector('.closeModalTag').innerHTML.includes("Cancel")){
     document.querySelector('.closeModalTag').innerHTML= "Confirm"
     checkMarkTag.classList.add("remove")
  } else {
    document.querySelector('.closeModalTag').innerHTML= "Cancel"
         
  }
    

})
