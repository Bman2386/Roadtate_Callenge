import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menu1, setMenu1] = useState('');
  const [menu2, setMenu2] = useState('');
  const [menu3, setMenu3] = useState('');


  const handleMenu1 = (e) => {
      setMenu1(e.target.value)
  }
  const handleMenu2 = e => {
    setMenu2(e.target.value)
  }

  const handleMenu3 = e => {
    setMenu3(e.target.value)
  }
  const exclude = {
      '101': ['201', '202', '206', '302'],
      '102': ['201', '301'],
      '103': ['202'],
      '204': ['304'],
      '205': ['304']
    }
  const remove = (arr) => {
    const removeId = exclude[menu1];
    const removeId2 = menu2 ? exclude[menu2] ? exclude[menu2] : [] : [];
    const newArr = arr.map(item => {
      if (!removeId.includes(item) && !removeId2.includes(item)){
        return item
      }
    })
    return newArr
  }
  const secondRadio = () => {
  const items = {
    '201': "Cashew chicken",
    '202': "Sweet and sour pork",
    '203': "Stir fried Tofu",
    '204': "Vegetable fried rice",
    '205': "Pad Thai",
    '206': "Massaman beef"
  }
   const arr = remove(['201', '202', '203', '204', '205', '206']);
      const menu = arr.map(item => {
        if (item !== undefined){
          return (
            <div key={item}>
            <input
              type="radio"
              value={item}
              onChange={handleMenu2}
              checked={menu2 === item}>
        </input>
        <label>{items[item]}</label>
          </div>
          )    
        }
      })
   return (
     <div>
       <form>
         <p>Main Course</p>
         {menu}
       </form>
     </div>
   ) 
  }

  const thirdRadio = () => {
    const items = {
      '301': "Peanut sauce",
      '302': "Oyster sauce",
      '303': "Vegetable spring rolls",
      '304': "Steamed rice",
    }
    const arr = remove(['301', '302', '303', '304']);
    const menu = arr.map(item => {
      if (item !== undefined) {
        return (
          <div key={item}>
            <input
              type="radio"
              value={item}
              onChange={handleMenu3}
              checked={menu3 === item}>
            </input>
            <label>{items[item]}</label>
          </div>
        )
      }
    })
    return (
      <div>
        <form>
          <p>Side</p>
          {menu}
        </form>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Menu</h1>
      <p>Please select 1 of the following</p>
      <form>
        <input
          type="radio"
          value={101}
          onChange={handleMenu1}
          checked={menu1 === '101'}>
        </input>
        <label>Vegetarian</label>
        <input
          type="radio"
          value={102}
          onChange={handleMenu1}
          checked={menu1 === '102'}>
        </input>
        <label>Nut Allergy</label>
        <input
          type="radio"
          value={103}
          onChange={handleMenu1}
          checked={menu1 === '103'}>
        </input>
        <label>Halal</label>
      </form>
      {menu1 ? secondRadio() : ''}
      {menu2 ? thirdRadio() : ''}
    </div>
  );
}

export default App;
