const panels = [];
// console.log(typeof(panels))
function subSubcategory() {

}
function addSubcategory(panelIndex) {
  const name1 = document.getElementById(`name1-${panelIndex}`).value;
  if (!panels[panelIndex].subcategories ) {
    panels[panelIndex].subcategories = [];
  }
  // console.log(Object.keys(panels[panelIndex].subcategories).length)
  // console.log(Object.keys(panels).length)
  panels[panelIndex].subcategories.push({ name: name1 });
  const subCat = document.getElementById(`subCat-${panelIndex}`)
  subCat.innerHTML = panels[panelIndex].subcategories.map((subcat, index) => `
    <div class="accordion-item form-control">
      <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}-${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${index}">
          ${subcat.name}
        </button>
      </h2>
      <div id="panelsStayOpen-collapse-${panelIndex}-${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}-${index}">
        <div class="accordion-body ">
          <div class="Add input-group mb-3"> 
            <label for="name1"></label>
            <input type="text" class="form-control" id="name1-${panelIndex}-${index}">
            <button class="btn btn-primary" onclick="addSubcategory(${panelIndex})">Add</button>
          </div>
          <div id="subCat-${panelIndex}-${index}">
          </div>
        </div>
      </div>
    </div>
  `).join("");
  // panels[panelIndex].previousSubcategories = panels[panelIndex].subcategories;
  
  document.getElementById(`name1-${panelIndex}`).value = "";
}
function displayInput() {                              
  const name = document.getElementById("name").value;        
  panels.push({
    header: name
  });          
  // console.log(typeof(panels))
  const output = document.getElementById("output");
  output.innerHTML = panels.map((panel, panelIndex) => `
      <div class="accordion-item form-control">
        <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}">
            ${panel.header}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse-${panelIndex}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}">
          <div class="accordion-body">
            <div class="Add input-group mb-3">
              <label for="name1"></label>
              <input type="text" class="form-control" id="name1-${panelIndex}">
              <button class="btn btn-primary" onclick="addSubcategory(${panelIndex})">Add</button>
            </div>  
            <div id="subCat-${panelIndex}"></div>
            </div>
            </div>  
        </div>
      `).join("");
      document.getElementById("name").value = "";
    }
    // ${(console.log(panelIndex))}
    
    // ${subCat.map((panelIndex,index)=>
    // <div id="subCat-${panelIndex}-${index}"></div>
    //  )}













