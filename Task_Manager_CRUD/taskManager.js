const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="taskText">${taskText}</span>
    <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </div>
  `;

  // Mark complete on click
  li.querySelector(".taskText").addEventListener("click", () => {
    li.querySelector(".taskText").classList.toggle("completed");
  });

  // Delete
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // Edit
  li.querySelector(".edit-btn").addEventListener("click", () => {
    editTask(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}

function editTask(li) {
  const taskSpan = li.querySelector(".taskText");
  const oldText = taskSpan.textContent;

  li.innerHTML = `
    <input value="${oldText}" class="editInput">
    <div class="actions">
        <button class="save-btn">Save</button>
        <button class="cancel-btn">Cancel</button>
    </div>
  `;

  // Save updated task
  li.querySelector(".save-btn").addEventListener("click", () => {
    const newText = li.querySelector(".editInput").value.trim();
    if (newText === "") return;

    li.innerHTML = `
      <span class="taskText">${newText}</span>
      <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
      </div>
    `;

    // Reattach events
    li.querySelector(".taskText").addEventListener("click", () => {
      li.querySelector(".taskText").classList.toggle("completed");
    });
    li.querySelector(".delete-btn").addEventListener("click", () =>
      li.remove()
    );
    li.querySelector(".edit-btn").addEventListener("click", () => editTask(li));
  });

  // Cancel edit
  li.querySelector(".cancel-btn").addEventListener("click", () => {
    li.innerHTML = `
      <span class="taskText">${oldText}</span>
      <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
      </div>
    `;

    li.querySelector(".taskText").addEventListener("click", () => {
      li.querySelector(".taskText").classList.toggle("completed");
    });
    li.querySelector(".delete-btn").addEventListener("click", () =>
      li.remove()
    );
    li.querySelector(".edit-btn").addEventListener("click", () => editTask(li));
  });
}
