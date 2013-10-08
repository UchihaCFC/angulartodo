/*
JS básico para gestión de controller, models y ng-click lista de tareas con Angular JS
Author: @UchihaCFC;
*/

function TodoControlador($scope) { // creamos el controlador de la APP

// Creamos un scope con las tareas de serie
	$scope.todos = [ 
		{text:'Aprender AngularJS', done:false} , 
		{text: 'Crear mi primera App', done:false}
	];

// Creamos un scope que gestione el count de las tareas getTotalTodos()
	$scope.getTotalTodos = function (){
		return $scope.todos.length;
	};

// Scope para borrar las tareas que tengamos pinchadas como finalizadas clearCompleted()
// asignado en el ng-click del button eliminar tareas completadas
	$scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.ok;
        });
    };

// Scope para agregar tareas pasandolas a través de text
// asignado en el ng-click del button añadir tarea
	$scope.addTodo = function () {
 		$scope.todos.push({text:$scope.formTodoText, done:false});
 		$scope.formTodoText = '';
	};
}