const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'November',
  'December'
]

const formatDate = rawDateTime => {
  const date = rawDateTime.getDate()
  const month = months[rawDateTime.getMonth()]
  const year = rawDateTime.getFullYear()
  const hour = rawDateTime.getHours()
  const minute = rawDateTime
    .getMinutes()
    .toString()
    .padStart(2, '0')

  const formattedDate = `${date} ${month} ${year} ${hour}:${minute}`

  return formattedDate
}

// -----------------------------------------------------------------------------

const showTodosRaw = () => {
  console.log('SHOW TODOS RAW:')
  console.log(store)
}

// -----------------------------------------------------------------------------

const showTodos = () => {
  console.log('SHOW TODOS:')

  store.todos.forEach((todo, index) => {
    let todoString = ``

    // ☐ The todo text ★
    todoString += `${todo.id}. `
    todoString += todo.isCompleted ? `✅` : `🔲`
    todoString += ` ${todo.text} `
    todoString += todo.isFavorited ? `⭐` : ``
    todoString += ` ⏰ ${formatDate(todo.dueAt)}`

    console.log(todoString)
  })
  return true
}

// -----------------------------------------------------------------------------

const addTodo = () => {
  console.log('ADD TODO:')

  const newTodoText = prompt('What do you want to do?')

  if (newTodoText) {
    const currentId = store.nextTodoId + 1
    store.nextTodoId++

    store.todos.push({
      id: currentId,
      text: newTodoText,
      tags: [],
      isFavorited: false,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueAt: new Date()
    })
    return true
  } else {
    return false
  }
}

// -----------------------------------------------------------------------------

const searchText = textToSearch => {
  console.log('SEARCH TEXT:')

  const newTodos = store.todos.filter((todo, index) => {
    if (todo.text.toLowerCase().includes(textToSearch.toLowerCase())) {
      return todo
    }
  })

  console.log(newTodos)
}

// -----------------------------------------------------------------------------

const deleteById = idToDelete => {
  console.log('DELETE TODO BY ID:')

  if (idToDelete === undefined) return
  if (typeof idToDelete === 'string') return

  const newTodos = store.todos.filter((todo, index) => {
    if (todo.id !== idToDelete) {
      console.log('Todo deleted')
      return todo
    }
  })

  store.todos = newTodos
}

// -----------------------------------------------------------------------------

const toggleFavoriteById = idToFavorite => {
  console.log('FAVORITE TODO BY ID:')

  if (idToFavorite === undefined) return
  if (typeof idToFavorite === 'string') return

  const newTodos = store.todos.map((todo, index) => {
    if (todo.id === idToFavorite) {
      todo.isFavorited = !todo.isFavorited
    }
    return todo
  })

  store.todos = newTodos
}
