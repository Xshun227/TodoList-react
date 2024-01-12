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
        <div>
            <div></div>
            <input type="checkbox" onChange={checkboxChange} checked={Checked}></input>
            <label
                style={{
                    textDecoration: Checked ? 'line-through' : 'none'
                }}
            > {note}</label>
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

export default Item;
