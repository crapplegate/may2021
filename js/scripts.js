// find our element
const actionButton = document.getElementById("action-btn");

//Listen for the button to be clicked, and then perform the action.
actionButton.addEventListener("click", performActionClick)

//Perform this action when the button is clicked.
function performActionClick() {
    console.log(`TEST ON BUTTON`);
}