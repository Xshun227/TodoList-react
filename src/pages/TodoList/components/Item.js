import React, { useState } from 'react';

const Item = ({ id, note, changeData }) => {
    const [Checked, setChecked] = useState(false);

    function deleteItem() {
        // 删除列表项
        changeData(prev => {
            console.log(prev);
            return prev.filter(item => item.id !== id);
        });
    }

    function checkboxChange() {
        setChecked(!Checked);
        changeData(prev =>
            prev.map(item => {
                if (item.id === id) {
                    item.Checked = !Checked;
                    // console.log(Checked);
                    return { ...item };
                } else {
                    return item;
                }
            })
        );
    }

    return (
        <div className='item'>
            <div className='blueBlock'></div>
            <label className='checkboxContainer'>
                <input type="checkbox" onChange={checkboxChange} checked={Checked}></input>
                <span className='checkmark'></span>
            </label>
            <div className='noteText'
                style={{
                    textDecoration: Checked ? 'line-through' : 'none',
                    color: Checked ? 'rgba(123,143,200,0.8)' : 'rgb(123,143,200)'
                }}
            > {note}</div>
            <button className='deletButton' onClick={deleteItem}></button>
        </div>
    );
}

export default Item;
