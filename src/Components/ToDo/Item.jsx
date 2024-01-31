const Item = (props) => {
  const { task } = props;

  return (
    <li className="py-0.5 p-2 even:bg-slate-200 flex justify-between">
      {task.content}
      <span className="material-symbols-outlined">delete</span>
    </li>
  );
};

export default Item;
