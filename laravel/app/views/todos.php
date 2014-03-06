<!DOCTYPE html>
<html>
    <link rel="stylesheet" type="text/css" href="/res/css/app.css">
    <script type="text/x-handlebars" data-template-name="todos">
        <body>
            <section id="todoapp">
                <header id="header">
                    <h1>todos</h1>
                    {{input type="text" id="new-todo" placeholder="What needs to be done?" value=newTitle action="createTodo"}}
                </header>

                <section id="main">
                    <ul id="todo-list">
                        {{#each}}
                        <li {{bind-attr class="isCompleted:completed"}}>
                            <input type="checkbox" class="toggle">
                            <label>{{title}}</label><button class="destroy"></button>
                        </li>
                        {{/each}}
                    </ul>

                    <input type="checkbox" id="toggle-all">
                </section>

                <footer id="footer">
                    <span id="todo-count">
                        <strong>2</strong> todos left
                    </span>
                    <ul id="filters">
                        <li><a href="all" class="selected">All</a></li>
                        <li><a href="active">Active</a></li>
                        <li><a href="completed">Completed</a></li>
                    </ul>

                    <button id="clear-completed">
                        Clear completed (1)
                    </button>
                </footer>
            </section>

            <footer id="info">
                <p>Double-click to edit a todo</p>
            </footer>
        </body>
    </script>
    <script type="text/javascript" src="/res/bower_components/jquery/jquery.js"></script>
    <script type="text/javascript" src="/res/bower_components/handlebars/handlebars.js"></script>
    <script type="text/javascript" src="/res/bower_components/ember/ember.js"></script>
    <script type="text/javascript" src="/res/bower_components/ember-data/ember-data.js"></script>
    <script type="text/javascript" src="/res/js/application.js"></script>
    <script type="text/javascript" src="/res/js/router.js"></script>
    <script type="text/javascript" src="/res/js/models/todo.js"></script>
    <script type="text/javascript" src="/res/js/controllers/todos_controller.js"></script>
</html>
