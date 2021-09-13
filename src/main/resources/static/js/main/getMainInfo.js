getHeader();

function getHeader() {
    fetch('http://localhost:8080/authorizedUser')
        .then(response => response.json())
        .then(user => {
            document.getElementById("headerLogin").innerHTML = user.login;
            let rolesList = document.createElement('ul');
            for (let i = 0; i < user.roles.length; i++) {
                let role = document.createElement('li');
                role.textContent = user.roles[i].role.substring(5) + " ";
                rolesList.appendChild(role);
            }
            document.getElementById("headerRoles").innerHTML = 'with roles: ' + rolesList.textContent;
        });
}

getUserInfo();

function getUserInfo(user) {
    fetch('http://localhost:8080/authorizedUser')
        .then(response => response.json())
        .then(user => {
            let tBody = document.getElementById("userInfo");
            tBody.innerHTML = "";
            let row = tBody.insertRow(0);
            let cell0 = row.insertCell(0);
            cell0.innerHTML = user.id;
            let cell1 = row.insertCell(1);
            cell1.innerHTML = user.name;
            let cell2 = row.insertCell(2);
            cell2.innerHTML = user.age;
            let cell3 = row.insertCell(3);
            cell3.innerHTML = user.email;
            let cell4 = row.insertCell(4);
            cell4.innerHTML = user.login;
            let cell5 = row.insertCell();
            cell5.innerHTML = getListRoles(user).textContent.replaceAll("ROLE_", "");
        });
}

function getListRoles(user) {
    let rolesList = document.createElement('ul');
    for (let i = 0; i < user.roles.length; i++) {
        let role = document.createElement('li');
        role.textContent = user.roles[i].role + " ";
        rolesList.appendChild(role);
    }
    return rolesList;
}