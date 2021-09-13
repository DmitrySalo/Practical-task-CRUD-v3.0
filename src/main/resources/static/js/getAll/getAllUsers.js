getAllUsers();

function getAllUsers() {
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = "";
    fetch('http://localhost:8080/admin/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(function (user) {
                let row = tBody.insertRow();
                row.setAttribute("id", user.id);
                let cell0 = row.insertCell();
                cell0.innerHTML = user.id;
                let cell1 = row.insertCell();
                cell1.innerHTML = user.name;
                let cell2 = row.insertCell();
                cell2.innerHTML = user.age;
                let cell3 = row.insertCell();
                cell3.innerHTML = user.email;
                let cell4 = row.insertCell();
                cell4.innerHTML = user.login;
                let cell5 = row.insertCell();
                cell5.innerHTML = getListRoles(user).textContent.replaceAll("ROLE_", "");
                let cell6 = row.insertCell();
                cell6.innerHTML =
                    '<button type="button" onclick="getModalEdit(' + user.id + ')" '
                    + 'class="btn btn-primary btn-sm">Edit</button>';
                let cell7 = row.insertCell();
                cell7.innerHTML =
                    '<button type="button" onclick="getModalDelete(' + user.id + ')" '
                    + 'class="btn btn-danger btn-sm">Delete</button>';
            })
        });
}