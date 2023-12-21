import React from 'react';
import useTask from '../../Hooks/useTask';

const TodoList = () => {
    const [task] = useTask()
    console.log(task);

    return (
        <>
        <div className="overflow-y-auto bg-gray-500 text-white p-20">
    <table className="table">
        <thead>
            <tr className='text-xl font-bold text-white'>
                <th></th>
                <th>Task</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Priority</th>
            </tr>
        </thead>

        <tbody>
            {task.map((item, inx) => (
                <tr key={item._id}>
                    <td>{inx}</td>
                    <td>{item.tasks}</td>
                    <td>{item.description}</td>
                    <td>{item.deadline}</td>
                    <td>{item.priority}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </>
    );
};

export default TodoList;