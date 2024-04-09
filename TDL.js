// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
        
        // Add event listener to delete the task when clicked
        li.addEventListener("click", function() {
            this.parentNode.removeChild(this);
        });
    } else {
        alert("Please enter a task!");
    }
}

// Add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
