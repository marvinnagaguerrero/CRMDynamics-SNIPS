function CheckUserRole(roleName) {
    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
        var userRoleId = currentUserRoles[i];
         var userRoleName = GetRoleName(userRoleId);
         if (userRoleName == roleName) {
            return true;
         }
    }
    return false;
}