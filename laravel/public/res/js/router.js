(function() {
  Todos.Router.map(function() {
    return this.resource('todos', {
      path: '/'
    });
  });

  Todos.TodosRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('todo');
    }
  });

}).call(this);
