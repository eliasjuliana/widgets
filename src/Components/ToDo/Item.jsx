const Item = (props) => {
  const { task, handleDelete } = props;

  return (
    <li className="py-0.5 p-2 even:bg-slate-200 flex justify-between">
      {task.content}
      <button>
      <span onClick={()=>handleDelete(task.id)} className="material-symbols-outlined">delete</span>
      </button>

    </li>
  );
};

export default Item;
