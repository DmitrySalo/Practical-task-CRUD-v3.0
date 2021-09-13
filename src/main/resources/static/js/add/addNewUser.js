function addNewUser() {

    let form = window.formNewUser.newRoles;
    let newUserRoles = [];

    let rolesList = document.createElement('ul');

    for (let i = 0; i < form.length; i++) {
        let option = form.options[i];
        if (option.selected) {
            newUserRoles.push(option.value);
        }
    }

    fetch('http://localhost:8080/admin/create?newRoles=' + newUserRoles, {
        method: 'POST',
        body: JSON.stringify({
            name: window.formNewUser.newName.value,
            age: window.formNewUser.newAge.value,
            email: window.formNewUser.newEmail.value,
            login: window.formNewUser.newLogin.value,
            password: window.formNewUser.newPassword.value,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(user => {
            window.getAllUsers()

            $('#tBody tr:last').after('<tr id=' + user.id + '>' +
                '<td>' + user.id + '</td>' +
                '<td>' + window.formNewUser.newName.value + '</td>' +
                '<td>' + window.formNewUser.newAge.value + '</td>' +
                '<td>' + window.formNewUser.newEmail.value + '</td>' +
                '<td>' + window.formNewUser.newLogin.value + '</td>' +
                '<td>' + rolesList.textContent + '</td>' +
                '<td> <button type="button" onclick="getModalEdit(' + user.id + ')" ' +
                'class="btn btn-primary btn-sm">Edit</button> </td>' +
                '<td> <button type="button" onclick="getModalDelete(' + user.id + ')" ' +
                'class="btn btn-danger btn-sm">Delete</button> </td>' +
                '</tr>');

            window.formNewUser.newName.value = "";
            window.formNewUser.newAge.value = "";
            window.formNewUser.newEmail.value = "";
            window.formNewUser.newLogin.value = "";
            window.formNewUser.newPassword.value = "";
            window.formNewUser.newRoles.value = "";

            const users_table = document.getElementById("usersTab");
            const new_user = document.getElementById("newUser");
            new_user.classList.remove("active");
            users_table.classList.add("active");

            const users_table_main = document.getElementById("users_table");
            const new_user_main = document.getElementById("new_user");
            new_user_main.classList.remove("active", "show");
            users_table_main.classList.add("active", "show");
        });
}