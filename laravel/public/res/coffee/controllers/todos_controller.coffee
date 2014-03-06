Todos.TodosController = Ember.ArrayController.extend {
    actions: {
        createTodo: ->
            # Get the todo title set by the "New Todo" text field
            title = this.get 'newTitle'
            if !title.trim()
                return;

            # Create the new Todo model
            todo = this.store.createRecord 'todo', {
                title: title,
                isCompleted: false
            }

            # Clear the "New Todo" text field
            this.set 'newTitle', ''

            # Save the new model
            todo.save();
    }
}