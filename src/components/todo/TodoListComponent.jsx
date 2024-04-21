export default function TodoListComponent() {
    const targetDate = new Date();
    const todos = [
        {
            id: 1,
            description: "Learn Java",
            done: false,
            targetDate: targetDate
        },
        {
            id: 2,
            description: "Learn Spring",
            done: false,
            targetDate: targetDate
        }
    ]
    return (
        <div className="container">
            <h1>
                Things you want to do!
            </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Is done?</td>
                        <td>Target date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}