
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rollNo = document.getElementById('rollNo').value;
    const grade = document.getElementById('grade').value;

    if (name && email && rollNo && grade) {
        addStudent(name, email, rollNo, grade);
        document.getElementById('studentForm').reset();
    }
});

function addStudent(name, email, rollNo, grade) {
    const studentList = document.getElementById('studentList');
    const li = document.createElement('li');
    li.textContent = `${name} - Email: ${email} - Roll No: ${rollNo} - Grade: ${grade}`;

 // Create a delete button
 const deleteButton = document.createElement('button');
 deleteButton.textContent = 'Delete';
 deleteButton.className = 'delete-button';
 
 // Add an event listener to the delete button
 deleteButton.addEventListener('click', function() {
     studentList.removeChild(li);
 });

 // Append the delete button to the list item
 li.appendChild(deleteButton);
 studentList.appendChild(li);

    studentList.appendChild(li);
}

