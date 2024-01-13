
import React, { useEffect, useState } from 'react';

const FinishSort = ({ listData ,onSwitchChange  }) => {
    const [switchState, setSwitch] = useState(false);

//   useEffect(() => {
//     if (switchState) {
//         console.log(`switchState=${switchState}`)        
     
//      listData.sort((a, b) => (a.Checked ? 1 : -1) - (b.Checked ? 1 : -1));
//      console.log('sort1:', JSON.stringify(listData, null, 2));
//         // return sortListData; 
        

//     }else{
//         console.log(`switchState=${switchState}`)    
//       listData.sort((a, b) => a.originalOrder - b.originalOrder);

//       console.log('sort2:', JSON.stringify(listData, null, 2));       
//         // onSortChange (sortedList)
//     }
//   }, [switchState, listData]);
//傳遞是排序狀態
  const toggleSwitch = () => {
   const newState=!switchState;
    setSwitch(newState);
    onSwitchChange(newState);
  };

  return (
    <div className='sortContainer checkbox-wrapper-2'>
      <label>Move done things to end?</label>
      <input className='sortCheckbox sc-gJwTLC ikxBAC ' type="checkbox" onChange={toggleSwitch} />
    </div>
  );
};

export default FinishSort;
