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

  console.log(`
Show todos as raw store:
`)
  showTodosRaw()

  console.log(`
Show todos as formatted store:
`)
  showTodos()

  console.log(`
Toggle favorite on id: 3
`)
  toggleFavoriteById(3)

  console.log(`
Show todos again:
`)
  showTodos()

  console.log(`
Delete todo of id: 2
`)
  deleteById(2)

  console.log(`
Show todos again after deletion:
`)
  showTodos()
}

const run = () => {
  showTodos()
}

// Run the entire app runners
runAll()

// Run only some runners
// run()
