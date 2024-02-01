import Item from "./Item";

const List = (props) => {
    const {tasks, setTasks} = props;

    const handleDelete = (id) =>{
        const newTasks = tasks.filter((item) => item.id !== id);
        setTasks(newTasks);
    };

    return (
        <ul className="p-4 border mt-2">
            {
                tasks.map((task)=>
                    <Item key={task.id} task={task} handleDelete={handleDelete}/>
                )
            }
        </ul>
    )
}

export default List