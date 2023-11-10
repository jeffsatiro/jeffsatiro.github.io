var App = angular.module('App', []).controller('AppController', function($scope) {
    
    $(function() {
        $(document).on("keyup", function(ev) {
            if (ev.keyCode==27) {
                $('.popup').fadeOut(200);
            }
        });

        Mousetrap.bind(['command+s', 'ctrl+s'], function(e) {
            $scope.save();
            return false;
        });
        
        Mousetrap.bind(['command+z', 'ctrl+z'], function(e) {
            window.history.back();
            $scope.project = $scope.data();
            $scope.save();
            return false;
        });
    });
    
    
    $scope.save = function() {
        location.hash = JSON.stringify($scope.project);
        $.bootstrapGrowl("Dados salvos", {type:"success"});
    };

    $scope.data = function() {
        var hash = location.hash || '{}';
        hash = hash.charAt(0)==='#'? hash.slice( 1 ): hash;
        try { eval('var data = '+hash+';'); }
        catch(e) {var data = {};}
        return data;
    }

    $scope.download = function() {
        var filedata = "data:application/octet-stream,"+ encodeURI(JSON.stringify($scope.project));
        var link = document.createElement('a');
        link.href = filedata;
        link.download = ($scope.project.title||"download") +'.cine';    
        document.body.appendChild(link);
        link.click();
    };

    $scope.upload = function(el) {
        var file = $(el)[0].files[0]||false;
        if (file) {
            var fr = new FileReader();
            fr.readAsText(file);
            fr.onload = function (ev) {
                $scope.project = JSON.parse(ev.target.result);
                $scope.$apply();
                $scope.save();
            };
        }
    };
    
    $scope.modalToggle = function(modal_sel) {
        $(modal_sel).fadeToggle(200);
        $(modal_sel).off("click").on("click", function(ev) {
            if (ev.target==this) {
                $(this).fadeOut(200);
            }
        });
    };


    /**
    * STAFF
    * Ações para adicionar/remover membros da equipe de filmagem
    */

    $scope.staffForm = {};

    $scope.staffAdd = function(obj) {
        obj = typeof obj=="object"? obj: {};

        obj.id = Math.round(Math.random()*99999);
        obj.name = "Staff "+ obj.id;

        $scope.project.staff = $scope.project.staff||[];
        $scope.project.staff.push(obj);
        $scope.save();
    };

    $scope.staffEdit = function(obj) {
        $scope.staffForm = obj;
    };

    $scope.staffRemove = function(index) {
        if (confirm("Tem certeza que deseja remover este membro da equipe?")) {
            $scope.project.staff.splice(index, 1);
            $scope.save();
        }
    };

    $scope.staffRoleAdd = function() {
        var role = {};
        role.id = Math.round(Math.random()*99999);
        role.name = "Role "+ role.id;

        $scope.staffForm.roles = $scope.staffForm.roles||[];
        $scope.staffForm.roles.push(role);
    };

    $scope.staffRoleRemove = function(index) {
        $scope.staffForm.roles.splice(index, 1);
        $scope.save();
    };

    $scope.staffContactAdd = function() {
        var contact = {};
        contact.id = Math.round(Math.random()*99999);
        contact.name = "E-mail";
        contact.value = "user-"+ contact.id +"@mail.com";

        $scope.staffForm.contacts = $scope.staffForm.contacts||[];
        $scope.staffForm.contacts.push(contact);
    };

    $scope.staffContactRemove = function(index) {
        $scope.staffForm.contacts.splice(index, 1);
        $scope.save();
    };


    $scope.staffProfileData = {};
    $scope.staffProfile = function(data) {
        $scope.staffProfileData = data;
        $scope.modalToggle('#modal_profile');
    };




    /**
    * EQUIPAMENTS
    * Ações para adicionar/remover equipamentos do set
    */
    
    $scope.equipmentForm = {};

    $scope.equipmentAdd = function(obj) {
        obj = typeof obj=="object"? obj: {};

        obj.id = Math.round(Math.random()*99999);
        obj.name = "Equipment "+ obj.id;

        $scope.project.equipments = $scope.project.equipments||[];
        $scope.project.equipments.push(obj);
        $scope.save();
    };

    $scope.equipmentEdit = function(obj) {
        $scope.equipmentForm = obj;
    };

    $scope.equipmentRemove = function(index) {
        if (confirm("Tem certeza que deseja remover este equipmento?")) {
            $scope.project.equipments.splice(index, 1);
            $scope.save();
        }
    };

    
    // Preenche data
    $scope.project = $scope.data();
});