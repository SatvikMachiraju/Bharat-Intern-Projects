
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const assignedTo = document.getElementById("assignedTo").value;

        if (!title || !description || !assignedTo) {
            alert("All fields are required.");
            return;
        }

        createTask({ title, description, assignedTo });
        taskForm.reset();
    });

    function createTask({ title, description, assignedTo }) {
        const task = document.createElement("div");
        task.classList.add("task");

        task.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <p>Assigned to: ${assignedTo}</p>
        `;

        taskList.appendChild(task);
    }
});
