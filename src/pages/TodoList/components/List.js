import React, {useEffect,useState } from 'react';
import Item from './Item';
import Progress from './Progress';
import FinishSort from './FinishSort';



const List = ({ listData, changeData }) => {

  const [sortedListData, setSortedListData] = useState(listData);
  useEffect(() => {
    setSortedListData(listData);
  }, [listData]);
  const handleSwitchChange = (newState) => {
    console.log(`switchState=${newState}`)
    if (newState) {
      //當打勾時排序
      const sortedList = [...listData].sort((a, b) => (a.Checked ? 1 : -1) - (b.Checked ? 1 : -1));
      setSortedListData(sortedList);
    } else {
      //沒打勾時恢復原排序
      const sortedList = [...listData].sort((a, b) => a.originalOrder - b.originalOrder);
      setSortedListData(sortedList);
    }
  // const handleSwitchChange=(newState)=>{
  //   if (newState) {
  //       console.log(`switchState=${newState}`)        
     
  //    listData.sort((a, b) => (a.Checked ? 1 : -1) - (b.Checked ? 1 : -1));
  //    console.log('sort1:', JSON.stringify(listData, null, 2));
  //       // return sortListData; 
        

  //   }else{
  //       console.log(`switchState=${newState}`)    
  //     listData.sort((a, b) => a.originalOrder - b.originalOrder);

  //     console.log('sort2:', JSON.stringify(listData, null, 2));       
  //       // onSortChange (sortedList)
  //   }
   };

  return (
    <div className="list">
      <div>
        <Progress listData={listData} />
          {sortedListData.map((item) => {
            const { note, id } = item;

            return (
              <div key={id}>
                <Item
                  id={id}
                  note={note}
                  changeData={changeData}
              
                />
              </div>
            );
          })}
      </div>

      <FinishSort
      listData={listData}
      onSwitchChange={handleSwitchChange} 
     />
    </div>
  );
};

export default List;

