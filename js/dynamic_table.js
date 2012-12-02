//  declare counter

var counter = 0;


//  add contact


function addContact()

{
	
    // get input

	
	var inputName = document.getElementById('name').value;
	
	
	var inputEmail = document.getElementById('email').value;
	
	
	var inputPhone = document.getElementById('phone').value;
	
	
	// create new html row
	
	var contactRow = document.createElement("tr");
	
	
	var idRow = document.createElement("td");

	var nameRow = document.createElement("td");
	
	var emailRow = document.createElement("td");
	

	var phoneRow = document.createElement("td");
	

	var removeButtonRow = document.createElement("td");
	
	
	
	//  set row value
	
	
	idRow.innerHTML = counter+1;
	
	
	
	//  set input value
	
	
	nameRow.innerHTML = inputName;

	emailRow.innerHTML = inputEmail;
	

	phoneRow.innerHTML = inputPhone;

	
	
	
	//  set remove button
	
	removeButtonRow.innerHTML= '<button onclick = 
		
		"removeContact(this.parentNode.parentNode.rowIndex);">
	
	
	
	Delete</button>';
	
	
	//  add table cells to thee table row
	
	contactRow.appendChild(idRow);
	contactRow.appendChild(nameRow);
	
	contactRow.appendChild(emailRow);
	contactRow.appendChild(phoneRow);
	
	contactRow.appendChild(removeButtonRow);
	
	// add tble row to table
	
	document.getElementById('contacts').appendChild(contactRow);
	
	
	
	
	//  incremtn counter
	
	  counter++;


} // end add contact  function



// delete contact
   function removeContact(i)  {
	   
	   
	   document.getElementById('contacts').deleteRow(i);
	   
	   
   } // end delete Contact function



