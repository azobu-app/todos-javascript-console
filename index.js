const runAll = () => {
  console.log(`
Todos JavaScript Console

Example todo:
☑ (1) Learn how to use the todo app ★

Commands:
> showTodosRaw()
> showTodos()
> addTodo()

`)

  showTodosRaw()
  showTodos()
  toggleFavoriteById(3)
  showTodos()
  deleteById(2)
  showTodos()
}

const run = () => {
  showTodos()
}

// Run the entire app runners
runAll()

// Run only some runners
// run()
