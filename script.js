let body = document.body;
let inputTags = document.querySelectorAll("input");
inputTags.forEach((input) => {
  input.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
  });
  console.log(input);
});
let submit=document.querySelector("button");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(event)
})