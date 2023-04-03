function addDiv() {
    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
  
    // Add an input field to the div
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter some text";
    // input.classList.add("form-control");
  
    newDiv.appendChild(input);
    // Add a button to the div that will add a new div when clicked
    var addButton = document.createElement("button");
    addButton.innerHTML = "Add";
    addButton.classList.add("btn", "btn-primary");
    addButton.onclick = function () {
      addDivTo(newDiv);
    };
    
    // const child = createAccordion(input,addButton);
    // newDiv.appendChild(child);
  
    newDiv.appendChild(addButton);
                 
    // Add a button to the div that will add a new div when clicked
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.onclick = function () {
      newDiv.remove();
    };
    newDiv.appendChild(deleteButton);
    // Append the new div to the container
    document.getElementById("container").appendChild(newDiv);
  }
  
  function addDivTo(parentDiv) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
  
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter some text";
    // input.classList.add("form-control");
    newDiv.appendChild(input);
  
    var addButton = document.createElement("button");
    addButton.innerHTML = "Add";
    addButton.classList.add("btn", "btn-primary");
    addButton.onclick = function () {
      addDivTo(newDiv);
    };
    newDiv.appendChild(addButton);
  
    // Add a button to the div that will delete the div when clicked
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.onclick = function () {
      newDiv.remove();
    };
    newDiv.appendChild(deleteButton);
  
  
    parentDiv.appendChild(newDiv);
  }