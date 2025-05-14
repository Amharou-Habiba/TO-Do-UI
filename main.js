let userInput = document.getElementById("userInput");
let homeContent = document.getElementById("homeContent");
let error = document.getElementById("error");

let items = [];
displayItem();

function addItem() {
    let rgx = /^[A-Z][a-z]{1,}/;
    if (rgx.test(userInput.value)) {
        items.push(userInput.value);
        displayItem();
        userInput.value = ""; 
        error.style.display = "none"; 
        console.log(items);
    } else {
        error.style.display = "block"; 
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    displayItem();
}

function displayItem() {
    let cartona = ``;
    items.forEach((item, index) => {
        cartona += `
        <div class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
          <p id="item" class="m-0 p-0">${item}</p>
          <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${index})"></i>
        </div>`;
    });
    homeContent.innerHTML = cartona;
}
