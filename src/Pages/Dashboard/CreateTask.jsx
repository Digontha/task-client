import React from 'react';

const CreateTask = () => {
    return (
       <>
       <div className=' flex flex-col gap-6 p-20 bg-gray-500'>
        <input className='border border-5 border-black px-14 py-7' placeholder='Add Your Task' type="text" />
        <input className='btn btn-neutral' type="submit" value="Add Task"/>
       </div>
       </>
    );
};

export default CreateTask;