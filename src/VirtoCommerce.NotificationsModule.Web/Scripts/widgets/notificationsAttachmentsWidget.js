angular.module('virtoCommerce.notificationsModule')
    .controller('virtoCommerce.notificationsModule.notificationsAttachmentsWidgetController', ['$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
	var blade = $scope.widget.blade;

	blade.showAttachments = function () {
                // Non implemented correctly yet. Disable to avoid user confusing.
                /*
		var objectId = blade.currentEntity.id;
    var objectTypeId = 'Notifications';
		var newBlade = {
			id: 'notificationLogWidgetChild',
            title: 'notifications.widgets.notificationsAttachmentsWidget.blade-title',
			titleValues: { id: blade.currentEntity.id },
			objectId: objectId,
			objectTypeId: objectTypeId,
			languages: blade.currentEntity.languages,
            subtitle: 'notifications.widgets.notificationsAttachmentsWidget.blade-subtitle',
            controller: 'virtoCommerce.notificationsModule.notificationsAttachmentsController',
			template: 'Modules/$(VirtoCommerce.Notifications)/Scripts/blades/notifications-attachments.tpl.html'
		};
		bladeNavigationService.showBlade(newBlade, blade);
                */
	};
}]);
