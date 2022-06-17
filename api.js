// let process = document.querySelector(".cat-list");

// async function catApi() {
//     let data;
//     for (let i = 1; i <= 10; i++) {
//         data = await fetch("https://thatcopy.pw/catapi/rest/")
//         let response = await data.json();
//         displayResult(response);
//     }

// }
// catApi();

// async function displayResult(response) {
//     process.innerHTML += `<div>
//         <img  class="img-container" src="${await response.url}"/>        
//         </div>`
// }
// let reload = () => {
//     process.innerHTML = ""
//     catApi();
// }
const fox_btn = document.getElementById('fox_btn');

const fox_result = document.getElementById('fox_result');


fox_btn.addEventListener('click', getFox);


function getFox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}