
function deletePanel(panelIndex, subcatIndex = null) {
  if (subcatIndex !== null) {
    // Delete the subcategory  
    panels[panelIndex].subcategories.splice(subcatIndex, 1);
    // console.log(panels[panelIndex].subcategories.splice(subcatIndex, 1))                  
    // console.log(subcatIndex)
    // Update the UI for the subcategories
    const subCat = document.getElementById(`subCat-${panelIndex}`);
    subCat.innerHTML = panels[panelIndex].subcategories.map((subcat, index) => `
      <div class="accordion-item form-control">
        <h2 class="accordion-header " id="panelsStayOpen-heading-${panelIndex}-${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${index}">
            ${subcat.name}  
          </button>     
          <div class="accordion-delete-btn">
            <button class="btn btn-danger" type="button" onclick="deletePanel(${panelIndex},${index})">Delete</button>
          </div> 
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
  } else {
    // Delete the panel  
    panels.splice(panelIndex, 1);             
    
    // Update the UI for the panels
    const output = document.getElementById("output");
    output.innerHTML = panels.map((panel, panelIndex) => `
      <div class="accordion-item form-control">
        <h2 class="accordion-header " id="panelsStayOpen-heading-${panelIndex}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}">
            ${panel.header}
            <div class="accordion-delete-btn">
              <button class="btn btn-danger" type="button" onclick="deletePanel(${panelIndex})">Delete</button>
            </div>
          </button>
        </h2>
        <div id="panelsStayOpen-collapse-${panelIndex}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}">
          <div class="accordion-body">
            <div class="Add input-group mb-3">
              <label for="name1"></label>
              <input type="text" class="form-control" id="name1-${panelIndex}">
              <button class="btn btn-primary" onclick="addSubcategory(${panelIndex})">Add</button>
            </div>  
            <div id="subCat-${panelIndex}">   
            ${panel.subcategories ? (panel.subcategories.map(((subcat, index) => `
            <div class="accordion-item form-control">
            <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}-${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${index}">
            ${subcat.name}
            <div class="accordion-delete-btn">
            <button class="btn btn-danger" type="button" onclick="deletePanel(${panelIndex},${index})">Delete</button>
            </div>
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
            `)).join("")) : ""}          
            </div>
          </div>
        </div>  
      </div>
    `).join("");
  }
}

const panels = [];



function addSubcategory(panelIndex) {
  const name1 = document.getElementById(`name1-${panelIndex}`).value;
  if (!panels[panelIndex].subcategories) {
    // console.log(!panels[panelIndex].subcategories);
    panels[panelIndex].subcategories = [];
  }
  // console.log(Object.keys(panels[panelIndex].subcategories).length)
  // console.log(Object.keys(panels).length)
  panels[panelIndex].subcategories.push({ name: name1 });
  const subCat = document.getElementById(`subCat-${panelIndex}`)
  subCat.innerHTML = panels[panelIndex].subcategories.map((subcat, index) => `
    <div class="accordion-item form-control">
      <h2 class="accordion-header " id="panelsStayOpen-heading-${panelIndex}-${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${index}">
          ${subcat.name}
          <div class="accordion-delete
          -btn">
          <button class="btn btn-danger" type="button" onclick="deletePanel(${panelIndex},${index})">Delete</button>
          </div>
        </button>
      </h2>
      <div id="panelsStayOpen-collapse-${panelIndex}-${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}-${index}">
        <div class="accordion-body ">
          <div class="Add input-group mb-3"> 
            <label for="name1"></label>               
            <input type="text" class="form-control" id="name2-${panelIndex}-${index}">
            <button class="btn btn-primary" onclick="addSubcategory(${panelIndex})">Add</button>
          </div>
          <div id="subCat-${panelIndex}-${index}">
          </div>
        </div>
      </div>
    </div>
  `).join("");
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
        <h2 class="accordion-header " id="panelsStayOpen-heading-${panelIndex}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}">
        ${panel.header}
            <div class="accordion-delete-btn">
            <button class="btn btn-danger" type="button" onclick="deletePanel(${panelIndex})">Delete</button>
            </div>
          </button>
        </h2>
        <div id="panelsStayOpen-collapse-${panelIndex}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}">
          <div class="accordion-body">
            <div class="Add input-group mb-3">
              <label for="name1"></label>                
              <input type="text" class="form-control" id="name1-${panelIndex}">
              <button class="btn btn-primary" onclick="addSubcategory(${panelIndex})">Add</button>
            </div>  
            <div id="subCat-${panelIndex}">
             ${panel.subcategories ? (panel.subcategories.map(((subcat, index) => `
             <div class="accordion-item form-control">
             <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}-${index}">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${index}">
             ${subcat.name}
             <div class="accordion-delete-btn">
             <button class="btn btn-danger" type="button" onclick="deletePanel(${panelIndex},${index})">Delete</button>
             </div>
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
             `)).join("")) : ""}   
             </div>
            </div>
            </div>  
            </div>
            `).join("");
  document.getElementById("name").value = "";
}

               // function subSubcategory(panelIndex, subcatIndex) {
               //   const name2 = document.getElementById(`name2-${panelIndex}-${subcatIndex}`).value;
               //   if (!panels[panelIndex].subcategories[subcatIndex].subsubcategories) {
               //     panels[panelIndex].subcategories[subcatIndex].subsubcategories = [];
               //   }
               //   panels[panelIndex].subcategories[subcatIndex].subsubcategories.push({ name: name2 });
               //   const subSubCat = document.getElementById(`subSubCat-${panelIndex}-${subcatIndex}`)
               //   subSubCat.innerHTML = panels[panelIndex].subcategories[subcatIndex].subsubcategories.map((subsubcat, index) => `
               //     <div class="accordion-item form-control">
               //       <h2 class="accordion-header" id="panelsStayOpen-heading-${panelIndex}-${subcatIndex}-${index}">
               //         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${panelIndex}-${subcatIndex}-${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${panelIndex}-${subcatIndex}-${index}">
               //           ${subsubcat.name}
                         
               //         </button>
               //       </h2>
               //       <div id="panelsStayOpen-collapse-${panelIndex}-${subcatIndex}-${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading-${panelIndex}-${subcatIndex}-${index}">
               //         <div class="accordion-body">
               //           <div class="Add input-group mb-3">
               //             <label for="name2"></label>
               //             <input type="text" class="form-control" id="name2-${panelIndex}-${subcatIndex}-${index}">
               //             <button class="btn btn-primary" onclick="subSubcategory(${panelIndex}, ${subcatIndex})">Add</button>
               //           </div>
               //           <div id="subSubCat-${panelIndex}-${subcatIndex}-${index}">
               //           </div>
               //         </div>
               //       </div>
               
               //     </div>
               //   `).join("");
               //   document.getElementById(`name2-${panelIndex}-${subcatIndex}`).value = "";
               // }
