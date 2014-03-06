(function() {
  Todos.TodosController = Ember.ArrayController.extend({
    actions: {
      createTodo: function() {
        var title, todo;
        title = this.get('newTitle');
        if (!title.trim()) {
          return;
        }
        todo = this.store.createRecord('todo', {
          title: title,
          isCompleted: false
        });
        this.set('newTitle', '');
        return todo.save();
      }
    }
  });

}).call(this);
