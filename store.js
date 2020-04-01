let store = {
  nextTodoId: 3,
  todos: [
    {
      id: 1,
      text: 'Learn how to use the todo app',
      tags: ['important', 'writing'],
      isCompleted: true,
      isFavorited: true,
      createdAt: new Date('10 January 2020 9:00'),
      updatedAt: new Date('11 January 2020 10:30'),
      dueAt: new Date('12 January 2020 11:45')
    },
    {
      id: 2,
      text: 'Read a book about productivity',
      tags: ['knowledge', 'book'],
      isCompleted: false,
      isFavorited: true,
      createdAt: new Date('20 January 2020 14:00'),
      updatedAt: new Date('21 January 2020 15:30'),
      dueAt: new Date('22 January 2020 16:45')
    },
    {
      id: 3,
      text: 'Walk in the park for refreshing',
      tags: ['walk', 'nature'],
      isCompleted: false,
      isFavorited: false,
      createdAt: new Date('30 January 2020 20:00'),
      updatedAt: new Date('30 January 2020 21:30'),
      dueAt: new Date('31 January 2020 22:45')
    }
  ]
}
