
const panels = {};
function displayInput() {
  const name = document.getElementById("name").value;
  const index = Object.keys(panels).length;
  panels[index] = {
    header: name    
  };
  // 
  const output = document.getElementById("output");
  output.innerHTML = Object.values(panels).map((panel, panelIndex) => `
  <div class="accordion-item form-control">
  <h2 class="accordion-header " id="panelsStayOpen-heading-${panelIndex}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}">
      ${panel.header}
    </button>
  </h2>
    <div id="panelsStayOpen-collapse-${panelIndex}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}">
      <div class="accordion-body">
        <div class="Add input-group mb-3">
          <label for="name"></label>                      
          <input type="text" class="form-control" id="name-${panelIndex}">
          <button class="btn btn-primary" onclick="displayInput(${panelIndex})">Add</button>
        </div>
      </div>
    </div>  
  </div>
      `).join("");
  document.getElementById("name").value = "";                                     
}   
