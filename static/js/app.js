// import the data from data.js
const tableData = data;

// Reference the HTML table using d3: Data-Driven Documents
//  tag "tbody": table body.
var tbody = d3.select("tbody");

function buildTable(data) {
    //  clear the table.
    tbody.html("");

    //  which line creates the table column header?
    data.forEach((dataRow) => {
        //  tag "tr": table row.
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            //  tag "td": table data (cell).
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

//  Keep track of all filter criteria
//  for what? who needs them?
//  note: match syntex used in index.html.
var filterCriteria = {
    datetime: "",
    city: "",
    state: "",
    country: "",
    shape: ""
};

//  update filterCriteria.
function updateCriteria() {
    for (let key in filterCriteria) {
        filterCriteria[key] = d3.select("#" + key).property("value");;
    }
}

function filterTable() {
    //  default includes all.
    let filteredData = tableData;
    for (let key in filterCriteria) {
        if (filterCriteria[key]) {
            filteredData = filteredData.filter(row => row[key] === filterCriteria[key]);
        }
    }

    //  rebuilt the table
    buildTable(filteredData);
}

//  anything could be different between the two?
//  form change only triggers this one.
function filterChange() {
    updateCriteria();
    filterTable();
}

//  filter botton click trigger this one.
function handleClick() {
    updateCriteria();
    filterTable();
}

//  select / selectAll
d3.selectAll("#form-input").on("change", filterChange);
d3.selectAll("#filter-btn").on("click", handleClick);

//  build the table when the page loads
buildTable(tableData);
