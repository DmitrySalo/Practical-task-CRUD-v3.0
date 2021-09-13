function getModalEdit(id) {

    fetch('http://localhost:8080/admin/users/' + id)
        .then(response => response.json())
        .then(user => {
            let adminSelect = "";
            let userSelect = "";

            for (let i = 0; i < user.roles.length; i++) {
                if (user.roles[i].roles === "ADMIN") {
                    adminSelect = "selected";
                }
                if (user.roles[i].roles === "USER") {
                    userSelect = "selected";
                }
            }

            let modal = document.getElementById('modalWindow');
            modal.innerHTML =
                '<div id="modalEdit"' +
                '     class="modal fade" ' +
                '     tabindex="-1" role="dialog"' +
                '     aria-labelledby="TitleModalLabel" ' +
                '     aria-hidden="true"' +
                '     data-backdrop="static" ' +
                '     data-keyboard="false">' +
                '    <div class="modal-dialog modal-dialog-scrollable">' +
                '        <div class="modal-content">' +
                '            <div class="modal-header">' +
                '                <h5 class="modal-title" id="TitleModalLabel">Edit user</h5>' +
                '                <button type="button" ' +
                '                        class="close" ' +
                '                        data-dismiss="modal" ' +
                '                        aria-label="Close">' +
                '                    <span aria-hidden="true">&times;</span>' +
                '                </button>' +
                '            </div>' +
                '            <div class="modal-body bg-white">' +
                '                <form id="formEditUser" style="width: 200px;"' +
                '                       class="form-signin mx-auto font-weight-bold text-center">' +
                '                    <p>' +
                '                        <label>ID</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="text"' +
                '                               id="editID" ' +
                '                               name="id" ' +
                '                               value="' + user.id + '" ' +
                '                               disabled>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Name</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="text"' +
                '                               id="editName" ' +
                '                               value="' + user.name + '"' +
                '                               placeholder="Name" ' +
                '                               aria-describedby="nameHelpInline" ' +
                '                               autofocus required> ' +
                '                         <small id="nameHelpInline" class="text-muted">' +
                '                               This field must match the "Name" pattern.' +
                '                         </small>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Age</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="number"' +
                '                               id="editAge" ' +
                '                               value="' + user.age + '" ' +
                '                               placeholder="Age" ' +
                '                               autofocus required>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Email</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="email"' +
                '                               id="editEmail" ' +
                '                               value="' + user.email + '" ' +
                '                               placeholder="Email" ' +
                '                               autofocus required>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Login</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="text"' +
                '                               id="editLogin" ' +
                '                               value="' + user.login + '"' +
                '                               placeholder="Login" ' +
                '                               autofocus required>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Password</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="password"' +
                '                               id="editPassword" value="' + user.password + '" ' +
                '                               placeholder="Password">' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Role</label>' +
                '                        <select id="editRoles" ' +
                '                               name="roles" ' +
                '                               multiple size="2" ' +
                '                               class="form-control form-control-md" ' +
                '                               required>' +
                '                            <option value="ROLE_ADMIN" >ADMIN</option>' +
                '                            <option value="ROLE_USER"' + userSelect + ' selected>USER</option>' +
                '                        </select>' +
                '                    </p>' +
                '                </form>' +
                '            </div>' +
                '            <div class="modal-footer">' +
                '                <button type="button" ' +
                '                        class="btn btn-secondary"' +
                '                        data-dismiss="modal">Close</button>' +
                '                <button class="btn btn-primary" ' +
                '                        data-dismiss="modal"' +
                '                        onclick="editUser()">Edit</button>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
            $("#modalEdit").modal();
        });
}