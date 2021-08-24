let mainSectionEl = document.getElementById("mainSection");
let homeSectionEl = document.getElementById("homeSection");
let userDataPageContainer = document.getElementById("userDataPageSection");
userDataPageContainer.classList.add("d-flex", "flex-column", "justify-content-center", "text-center", "mb-4", "mt-4");
let anchorElement = document.getElementById("getUsersAnchor");
let spinnerEl = document.getElementById("spinner");

function createAndAppend(singleUser) {
    //userData container
    let userDataContainer = document.createElement("div");
    userDataContainer.classList.add("eachUser-container", "d-flex", "flex-column", "justify-content-center");
    userDataPageContainer.appendChild(userDataContainer);

    //userData avatar
    let {
        avatar
    } = singleUser;
    let userDataImg = document.createElement("img");
    userDataImg.src = avatar;
    userDataImg.classList.add("imageElement-image");
    userDataContainer.appendChild(userDataImg);

    //userData Name
    let {
        first_name,
        last_name
    } = singleUser;
    let userDataNameEl = document.createElement("h1");
    userDataNameEl.classList.add("image-name");
    userDataNameEl.textContent = "Name : " + first_name + " " + last_name;
    userDataContainer.appendChild(userDataNameEl);

    //userData email
    let {
        email
    } = singleUser;
    let userDataEmailEl = document.createElement("p");
    userDataEmailEl.classList.add("image-mail");
    userDataEmailEl.textContent = "Mail : " + email;
    userDataContainer.appendChild(userDataEmailEl);

    //userData id
    let {
        id
    } = singleUser;
    let userDataIdEl = document.createElement("p");
    userDataIdEl.classList.add("image-id");
    userDataIdEl.textContent = "Id : " + id;
    userDataContainer.appendChild(userDataIdEl);
}

function searchEachUser() {
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://reqres.in/api/users?page=1", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                data
            } = jsonData;
            displayEachUser(data);
        });
}

function displayEachUser(data) {
    mainSectionEl.textContent = "";
    spinnerEl.classList.add("d-none");
    let headingEl = document.createElement("h1")
    headingEl.classList.add("heading");
    headingEl.textContent = "User Data";
    userDataPageContainer.appendChild(headingEl);
    
    for (let singleUser of data) {
        createAndAppend(singleUser);
    }
}
anchorElement.addEventListener("click", searchEachUser);