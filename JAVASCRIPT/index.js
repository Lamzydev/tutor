// const btn = document.getElementById("btn");
// const title = document.getElementById("title");
// const description = document.getElementsByClassName("description")
// const heading = document.getElementsByTagName("h2");
// const job = document.querySelector(".job");
// const jhn = document.querySelector("#jhn");
// const h2 = document.querySelector("h2");
// jhn.innerText = "Hello Nigeria";
// // document.querySelector("#btn").setAttribute("disabled", true);

//const well = document.querySelector("#well");
//well.style.color = "green";

//const handleclick = () => {
    //alert("You clicked me");
//}

// console.log(title.innerText);
// console.log(description[0].innerText);
// console.log(heading[0].innerText);
// console.log(job.innerText);
// console.log(jhn.innerText);
// console.log(h2.innerText); 

// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     alert("welcome");
// } );


// const change = document.querySelector("#change");
// const para = document.querySelector("p");


// change.addEventListener("click", function () {
//     para.style.color = "red";  
// } );


// const newLamzy = document.createElement("h1");
// newLamzy.innerText = "I am a new Student";
// document.body.appendChild(newLamzy);

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     const newElement = document.createElement("div");
//     newElement.className = "cart";
// newElement.innerText = "product add to cart";
// document.body.appendChild(newElement);

// } );

// const newELement = document.createElement("ul");
// const li1 = document.createElement("li");
// li1.innerText = "Home";
// const li2 = document.createElement("li");
// li2.innerText = "About";
// const li3 = document.createElement("li");
// li3.innerText = "Contact";
// document.body.appendChild(newELement);
// newELement.appendChild(li1);
// newELement.appendChild(li2);
// newELement.appendChild(li3);

// const increement = document.querySelector("#increement");
// const span = document.querySelector("span");
// let count = 0;
// increement.addEventListener("click", function () {
//     if (count < 10) {
//         count++;
//         span.innerText = count;
//     }
// });

// const decreement = document.querySelector("#decreement");
// decreement.addEventListener("click", function () {
//     if (count > 0) {
//         count--;
//         span.innerText = count;
//     }
// });

// // const reset = document.querySelector("#reset");
// reset.addEventListener("click", function () {
//     count = 0;
//     span.innerText = count;
// });

//const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const email = document.querySelector("#email");
// btn.addEventListener("click", function () {
//     const inputValue = input.value;
//     const emailValue = email.value;
//     console.log(inputValue);
//     console.log(emailValue);
    
    

//     if (inputValue =="" || emailValue =="") {
//         alert("Pls enter a valid value")
//     }
// });

// const input = document.getElementById("todoInput");
// const addBtn = document.getElementById("addBtn");
// const list = document.getElementById("todoList");

// addBtn.addEventListener("click", function () {
//   const task = input.value.trim();
//   if (task === "") {
//     alert("enter valid input");
//     return;
//   }

//   const li = document.createElement("li");
//   li.textContent = task;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";

//   li.appendChild(deleteBtn);
//   list.appendChild(li);

//   input.value = "";

//   li.addEventListener("click", function () {
//     li.classList.toggle("completed");
//   });

//   deleteBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     li.remove();
//   });
// });