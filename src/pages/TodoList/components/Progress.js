
import React, { useEffect, useState } from 'react';

const Progress = ({ listData }) => {
  const [checkPercent, setCheckPercent] = useState(0);

  useEffect(() => {
    //計算百分比

    const newCheckedCount = listData.filter(item => item.Checked).length;
    // console.log(`listData.length=${listData.length}`);

    const newPercent = Math.round((newCheckedCount / listData.length) * 100);
    setCheckPercent(newPercent);
  }, [listData]);
  const progressStyle = {
    width: `${checkPercent}%`,
    height: '15px',
    backgroundColor: 'rgba(147, 171, 251,0.9)',
    borderRadius:'50px',
    transition: 'width 0.3s ease',  
  };

  return (
    <div className='progress'>
      <div style={{ }}>{`${checkPercent>0 ? checkPercent:0}%`}</div>
      <div className='progressBar' >
        <div style={progressStyle}></div>
      </div>
    </div>
  );
};

export default Progress;