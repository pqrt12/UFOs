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

function handleClick() {
    //  '#' -> signify HTML id.
    let date = d3.select("#datatime").property("value");

    //  default includes all.
    let filteredData = tableData;
    if (date) {
        //  triple "===": strict equality.
        //  array.filter(function(cur, [index, [arr]]), thisValue).
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //  why not inside if ?
    //  rebuilt the table
    buildTable(filteredData);    
}

//  select / selectAll
d3.select("#filter-btn").on("click", handleClick);

//  build the table when the page loads
buildTable(tableData);
