import Item from './Item'
const List = ({ listData }) => {
 

  return (
    <div className="list">
      {listData.map((item, index) => {
        const {note,id} = item;
        // const note = item;
        // console.log(item);
        // console.log(note);

        return (
          <Item key={id} note={note} />


        );
      })}
    </div>
  );
};

export default List