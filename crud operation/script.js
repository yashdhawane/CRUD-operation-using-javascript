var selectedRow = null
function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        console.log(formData);
        console.log(selectedRow);
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["Username"] = document.getElementById("username").value;
    
    formData["age"] = document.getElementById("age").value;
   
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Username;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.age;
    
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function resetForm() {
    document.getElementById("username").value = '';
    
    document.getElementById("age").value = '';
    
    selectedRow = null;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    console.log(selectedRow);
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
   
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Username;
    
    selectedRow.cells[1].innerHTML = formData.age;
    
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}