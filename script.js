const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("button");
const namesSet = new Set();

function addName(name) {
    if (name !== "" && !namesSet.has(name)) {
        namesSet.add(name);
        const nameList = document.getElementById("nameList");
        const nameItem = document.createElement("li");
        nameItem.innerText = name;
        nameList.appendChild(nameItem);
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    addName(name);
    nameInput.value = "";
    console.log(...namesSet);
});
//exe 2
const posts = [
    {
        id: 1,
        title: "my post 1",
        description: "my post 1",
    },
    {
        id: 2,
        title: "my post 2",
        description: "my post 2",
    },
    {
        id: 3,
        title: "my post 3",
        description: "my post 3",
    },
];

for (let post of posts) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.id = `post-${post.id}`;

    const titleElement = document.createElement("h1");
    titleElement.textContent = post.title;
    postDiv.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = post.description;
    postDiv.appendChild(descriptionElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
        postDiv.remove();
    });
    postDiv.appendChild(deleteButton);

    document.body.appendChild(postDiv);
}
//exe3
const posts2 = [
    {
        id: 1,
        title: "my post 1",
        description: "my post 1",
    },
    {
        id: 2,
        title: "my post 2",
        description: "my post 2",
    },
    {
        id: 3,
        title: "my post 3",
        description: "my post 3",
    },
];

const body = document.querySelector("body");

posts2.forEach((post) => {
    const postContainer = document.createElement("div");
    const postTitle = document.createElement("h1");
    const postDescription = document.createElement("input");
    const deleteButton = document.createElement("button");

    postTitle.innerText = post.title;
    postDescription.value = post.description;
    deleteButton.innerText = "delete";

    deleteButton.addEventListener("click", () => {
        const index = posts2.findIndex((p) => p.id === post.id);
        posts2.splice(index, 1);
        postContainer.remove();
    });

    postDescription.addEventListener("change", () => {
        post.description = postDescription.value;
        console.log(posts2);
    });

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postDescription);
    postContainer.appendChild(deleteButton);

    body.appendChild(postContainer);
});
