function getModalDelete(id) {

    fetch('http://localhost:8080/admin/users/' + id)
        .then(response => response.json())
        .then(user => {

            let adminSelect = "";
            let userSelect = "";

            for (let i = 0; i < user.roles.length; i++) {
                if (user.roles[i].roleName === "ADMIN") {
                    adminSelect = "selected";
                }
                if (user.roles[i].roleName === "USER") {
                    userSelect = "selected";
                }
            }

            let modal = document.getElementById('modalWindow');
            modal.innerHTML =
                '<div id="modalDelete" ' +
                '     class="modal fade" ' +
                '     tabindex="-1" ' +
                '     role="dialog"' +
                '     aria-labelledby="TitleModalLabel" ' +
                '     aria-hidden="true" ' +
                '     data-backdrop="static" ' +
                '     data-keyboard="false">' +
                '    <div class="modal-dialog modal-dialog-scrollable">' +
                '        <div class="modal-content">' +
                '            <div class="modal-header">' +
                '                <h5 class="modal-title" id="TitleModalLabel">Delete user</h5>' +
                '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '                    <span aria-hidden="true">&times;</span>' +
                '                </button>' +
                '            </div>' +
                '            <div class="modal-body bg-white">' +
                '                <form id="formEditUser" style="width: 200px;" ' +
                '                       class="form-signin mx-auto font-weight-bold text-center">' +
                '                    <p>' +
                '                        <label>ID</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="number"' +
                '                               value="' + user.id + '" ' +
                '                               disabled>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Name</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="text"' +
                '                               value="' + user.name + '" ' +
                '                               disabled>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Age</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="number"' +
                '                               value="' + user.age + '" ' +
                '                               disabled>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Email</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="email"' +
                '                               value="' + user.email + '" ' +
                '                               disabled>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Login</label>' +
                '                        <input class="form-control form-control-md" ' +
                '                               type="text"' +
                '                               value="' + user.login + '" ' +
                '                               disabled>' +
                '                    </p>' +
                '                    <p>' +
                '                        <label>Role</label>' +
                '                        <select class="form-control form-control-md" ' +
                '                                multiple size="2" ' +
                '                                disabled>' +
                '                            <option value="ROLE_ADMIN"' + adminSelect + ' >ADMIN</option>' +
                '                            <option value="ROLE_USER"' + userSelect + '>USER</option>' +
                '                        </select>' +
                '                    </p>' +
                '                </form>' +
                '            </div>' +
                '            <div class="modal-footer">' +
                '                <button type="button" ' +
                '                        class="btn btn-secondary"' +
                '                        data-dismiss="modal">Close</button>' +
                '                <button class="btn btn-danger" ' +
                '                        data-dismiss="modal"' +
                '                        onclick="deleteUser(' + user.id + ')">Delete</button>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
            $("#modalDelete").modal();
        });
}