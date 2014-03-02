Todos.Router.map ->
    this.resource 'todos', { path: '/' }

Todos.TodosRoute = Ember.Route.extend {
    model: ->
        this.store.find 'todo'
}