function editUser() {

    let form = window.formEditUser.editRoles;
    let newRoles = [];

    let rolesList = document.createElement('ul');

    for (let i = 0; i < form.length; i++) {
        let option = form.options[i];
        if (option.selected) {
            newRoles.push(option.value)
        }
    }

    let id = window.formEditUser.editID.value;

    fetch('http://localhost:8080/admin/update?currentRoles=' + newRoles, {
        method: 'PUT',
        body: JSON.stringify({
            id: window.formEditUser.editID.value,
            name: window.formEditUser.editName.value,
            age: window.formEditUser.editAge.value,
            email: window.formEditUser.editEmail.value,
            login: window.formEditUser.editLogin.value,
            password: window.formEditUser.editPassword.value,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            window.getAllUsers()

            $('#' + id).replaceWith('<tr id=' + id + '>' +
                '<td>' + id + '</td>' +
                '<td>' + window.formEditUser.editName.value + '</td>' +
                '<td>' + window.formEditUser.editAge.value + '</td>' +
                '<td>' + window.formEditUser.editEmail.value + '</td>' +
                '<td>' + window.formEditUser.editLogin.value + '</td>' +
                '<td>' + rolesList.textContent + '</td>' +
                '<td> <button type="button" onclick="getModalEdit(' + id + ')" ' +
                'class="btn btn-primary btn-sm">Edit</button> </td>' +
                '<td> <button type="button" onclick="getModalDelete(' + id + ')" ' +
                'class="btn btn-danger btn-sm">Delete</button> </td>' +
                '</tr>');
        });
}