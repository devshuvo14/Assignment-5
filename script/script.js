


// document.addEventListener("DOMContentLoaded", function () {
//     const taskContainer = document.getElementById("task-container");
//     const activityLog = document.getElementById("activity-log");
//     const clearHistoryBtn = document.getElementById("clear-history");

//     // Fix: Make sure these elements exist in your HTML
//     const taskCountElement = document.querySelector(".task-count");
//     const headerCountElement = document.querySelector(".header-task-count");

//     if (!taskContainer || !activityLog || !clearHistoryBtn) {
//         console.error("Error: One or more required elements are missing.");
//         return;
//     }

//     taskContainer.addEventListener("click", function (event) {
//         if (event.target.classList.contains("complete-btn")) {
//             const taskCard = event.target.closest(".task-card");
//             if (taskCard) {
//                 const taskName = taskCard.getAttribute("data-task");
//                 const completeButton = event.target;

//                 // Change button style
//                 completeButton.classList.remove("bg-blue-500");
//                 completeButton.classList.add("bg-gray-400");
//                 completeButton.textContent = "Completed ✅";
//                 completeButton.disabled = true;

//                 // Update activity log
//                 addActivityLog(`You completed the task: <b>${taskName}</b>`);

//                 // Show alert
//                 alert("Board updated successfully!");

//                 // Update task counts if elements exist
//                 if (taskCountElement && headerCountElement) {
//                     updateTaskCounts();
//                 }
//             }
//         }
//     });

//     clearHistoryBtn.addEventListener("click", function () {
//         activityLog.innerHTML = "";
//     });

//     function addActivityLog(message) {
//         const logEntry = document.createElement("div");
//         logEntry.className = "bg-white text-black p-3 rounded-lg mt-2";
//         logEntry.innerHTML = message;

//         // Limit activity log to 10 items.
//         if (activityLog.children.length >= 10) {
//             activityLog.removeChild(activityLog.firstChild);
//         }
//         activityLog.appendChild(logEntry);
//     }

//     function updateTaskCounts() {
//         let taskCount = taskCountElement ? parseInt(taskCountElement.textContent) || 0 : 0;
//         let headerCount = headerCountElement ? parseInt(headerCountElement.textContent) || 0 : 0;

//         if (taskCount > 0) {
//             taskCountElement.textContent = taskCount - 1;
//         }
//         headerCountElement.textContent = headerCount + 1;
//     }
// });



document.addEventListener("DOMContentLoaded", function () {
    const taskContainer = document.getElementById("task-container");
    const activityLog = document.getElementById("activity-log");
    const clearHistoryBtn = document.getElementById("clear-history");
    
    // Fix: Make sure these elements exist in your HTML
    const taskCountElement = document.querySelector(".task-count");
    const headerCountElement = document.querySelector(".header-task-count");
    
    if (!taskContainer || !activityLog || !clearHistoryBtn) {
        console.error("Error: One or more required elements are missing.");
        return;
    }
    
    taskContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("complete-btn")) {
            const taskCard = event.target.closest(".task-card");
            if (taskCard) {
                const taskName = taskCard.getAttribute("data-task");
                const completeButton = event.target;
                
                // Change button style
                completeButton.classList.remove("bg-blue-500");
                completeButton.classList.add("bg-gray-400");
                completeButton.textContent = "Completed ";
                completeButton.disabled = true;
                
                // Update activity log with time
                addActivityLog(`You completed the task: <b>${taskName}</b>`);
                
                // Show alert
                alert("Board updated successfully!");
                
                // Update task counts if elements exist
                if (taskCountElement && headerCountElement) {
                    updateTaskCounts();
                }
            }
        }
    });
    
    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = "";
    });
    
    function addActivityLog(message) {
        const logEntry = document.createElement("div");
        logEntry.className = "bg-white text-black p-3 rounded-lg mt-2";
        
        // Get current time
        const now = new Date();
        const formattedTime = now.toLocaleTimeString(); // Example: "2:30:45 PM"
        
        logEntry.innerHTML = `${message} <span class="text-gray-500 text-sm">(${formattedTime})</span>`;
        
        // Limit activity log to 10 items.
        if (activityLog.children.length >= 10) {
            activityLog.removeChild(activityLog.firstChild);
        }
        activityLog.appendChild(logEntry);
    }
    
    function updateTaskCounts() {
        let taskCount = taskCountElement ? parseInt(taskCountElement.textContent) || 0 : 0;
        let headerCount = headerCountElement ? parseInt(headerCountElement.textContent) || 0 : 0;
        
        if (taskCount > 0) {
            taskCountElement.textContent = taskCount - 1;
        }
        headerCountElement.textContent = headerCount + 1;
    }
});

