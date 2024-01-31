import Item from "./Item";

const List = (props) => {
    const {tasks} = props;

    return (
        <ul className="p-4 border mt-2">
            {
                tasks.map((task)=>
                    <Item key={task.id} task={task}/>
                )
            }
        </ul>
    )
}

export default List