const runAll = () => {
  console.log(
    '%c%s',
    'color: #333; font-size: 1.5em;',
    'Todos JavaScript Console'
  )
  console.log(`
Example todo:
☑ (1) Learn how to use the todo app ★

Commands:
> showTodosRaw()
> showTodos()
> addTodo()

`)

  showTodosRaw()
  console.log('')
  showTodos()
  console.log('')
  toggleFavoriteById(3)
  console.log('')
  showTodos()
  console.log('')
  deleteById(2)
  console.log('')
  showTodos()
  console.log('')
}

const run = () => {
  showTodos()
}

// Run the entire app runners
runAll()

// Run only some runners
// run()
