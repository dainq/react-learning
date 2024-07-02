const mockupData = {
    user: {
        id: 1,
        username: "johndoe",
        email: "johndoe@example.com",
        created_at: "2024-07-02T12:34:56Z"
    },
    todos: [
        {
            id: 1,
            title: "Buy groceries",
            description: "Milk, Bread, Eggs, Cheese",
            due_date: "2024-07-03T10:00:00Z",
            completed: false,
            created_at: "2024-07-01T09:00:00Z",
            updated_at: "2024-07-01T09:00:00Z"
        },
        {
            id: 2,
            title: "Finish project report",
            description: "Complete the final draft of the project report and submit it to the manager.",
            due_date: "2024-07-05T17:00:00Z",
            completed: false,
            created_at: "2024-07-01T09:30:00Z",
            updated_at: "2024-07-01T09:30:00Z"
        },
        {
            id: 3,
            title: "Gym workout",
            description: "Complete the scheduled workout routine.",
            due_date: "2024-07-02T18:00:00Z",
            completed: true,
            created_at: "2024-07-01T10:00:00Z",
            updated_at: "2024-07-01T10:00:00Z"
        }
    ]
};

async function getTodos() {
    // Mockup object representing the response data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockupData);
        }, 500); // Simulating network delay
    });
}

// Function to create a to-do item
async function createTodo(newTodo) {
    // Mockup object representing the created to-do item
    const createdTodo = {
        id: 4,
        title: newTodo.title,
        description: newTodo.description,
        due_date: newTodo.due_date,
        completed: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(createdTodo);
        }, 500); // Simulating network delay
    });
}

// Function to update a to-do item
async function updateTodo(todoId, updatedTodo) {
    // Mockup object representing the updated to-do item
    const updatedTodoItem = {
        id: todoId,
        title: updatedTodo.title,
        description: updatedTodo.description,
        due_date: updatedTodo.due_date,
        completed: updatedTodo.completed,
        created_at: "2024-07-01T09:00:00Z", // Using the original created_at timestamp
        updated_at: new Date().toISOString()
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(updatedTodoItem);
        }, 500); // Simulating network delay
    });
}

// Exporting the functions for use in other modules
module.exports = {
    getTodos,
    createTodo,
    updateTodo
};
