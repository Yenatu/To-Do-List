var taskCounter = 0; // Variable to keep track of task numbers

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        taskCounter++; // Increment task counter
        li.textContent = taskCounter + " " + taskInput.value; // Display task number
        li.style.backgroundColor = getRandomColor(); // Set random background color
        taskList.appendChild(li);
        taskInput.value = "";
        
        // Add event listener to delete the task when clicked
        li.addEventListener("click", function() {
            this.parentNode.removeChild(this);
            taskCounter--; // Decrement task counter when task is deleted
        });
    } 
    else {
        alert("Please enter a task first!");
    }
}

// Add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
