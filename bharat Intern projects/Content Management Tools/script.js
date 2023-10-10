document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const fileInput = document.getElementById("file");
    const addContentButton = document.getElementById("add-content");
    const publishContentButton = document.getElementById("publish-content");
    const contentList = document.getElementById("content-list");

    addContentButton.addEventListener("click", () => {
        const title = titleInput.value;
        const content = contentInput.value;
        const file = fileInput.files[0]; // Get the selected file

        if (title.trim() !== "" && content.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
            `;

            if (file) {
                const fileType = file.type.startsWith('image') ? 'image' : 'video';
                const fileURL = URL.createObjectURL(file);

                if (fileType === 'image') {
                    listItem.innerHTML += `<img src="${fileURL}" alt="${title}" width="200">`;
                } else {
                    listItem.innerHTML += `<video width="320" height="240" controls>
                                             <source src="${fileURL}" type="${file.type}">
                                           </video>`;
                }
            }

            contentList.appendChild(listItem);

            // Clear input fields
            titleInput.value = "";
            contentInput.value = "";
            fileInput.value = ""; // Reset file input
        } else {
            alert("Please fill in both title and content.");
        }
    });

    publishContentButton.addEventListener("click", () => {
        const listItems = contentList.querySelectorAll("li");
        if (listItems.length === 0) {
            alert("There are no posts to publish.");
        } else {
            alert("Blog posts published!");
        }
    });
});
