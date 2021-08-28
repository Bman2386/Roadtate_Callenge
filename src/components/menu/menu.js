import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import cc from '../../images/cc.jpg';
import ss from '../../images/ss.jpg';
import st from '../../images/st.jpg';
import vf from '../../images/vf.jpg';
import pt from '../../images/pt.jpg';
import mb from '../../images/mb.jpg';
import ps from '../../images/ps.jpg';
import os from '../../images/os.jpg';
import vsr from '../../images/vsr.jpg';
import sr from '../../images/sr.jpg';

function Menu() {
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
            if (!removeId.includes(item) && !removeId2.includes(item)) {
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
            if (item !== undefined) {
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

            <form>
                <h2>Main Course</h2>
                {menu}
            </form>
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

            <form>
                <h2>Side</h2>
                {menu}
            </form>

        )
    }

    const foodImage = () => {
        switch (menu2) {
            case '201':
                return (
                    <img src={cc} alt='cashew-chicken' className='img' />
                )
            case '202':
                return (
                    <img src={ss} alt='sweet-and-sour-pork' className='img' />
                )
            case '203':
                return (
                    <img src={st} alt='sweet-and-sour-pork' className='img' />
                )
            case '204':
                return (
                    <img src={vf} alt='sweet-and-sour-pork' className='img' />
                )
            case '205':
                return (
                    <img src={pt} alt='sweet-and-sour-pork' className='img' />
                )
            case '206':
                return (
                    <img src={mb} alt='sweet-and-sour-pork' className='img' />
                )
            default:
                return (
                    <div>
                    </div>
                )
        }
    }

    const side = () => {
        switch (menu3) {
            case '301':
                return (
                    <img src={ps} alt='sweet-and-sour-pork' className='img2' />
                )
            case '302':
                return (
                    <img src={os} alt='sweet-and-sour-pork' className='img2' />
                )
            case '303':
                return (
                    <img src={vsr} alt='sweet-and-sour-pork' className='img2' />
                )
            case '304':
                return (
                    <img src={sr} alt='sweet-and-sour-pork' className='img2' />
                )
            default:
                return (
                    <div>
                    </div>
                )
        }
    }

    const wipe = () => {
        setMenu1('');
        setMenu2('');
        setMenu3('');
    }

    const handleSubmit = () => {
        const order = {
            type: menu1,
            maincourse: menu2,
            sideDish: menu3
        }
    }

    return (
        <div className="App">
            {foodImage()}
            {side()}
            <h1>Menu</h1>
            <form>
                <div>
                    <input
                        type="radio"
                        value={101}
                        onChange={handleMenu1}
                        checked={menu1 === '101'}>
                    </input>
                    <label>Vegetarian</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value={102}
                        onChange={handleMenu1}
                        checked={menu1 === '102'}>
                    </input>
                    <label>Nut Allergy</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value={103}
                        onChange={handleMenu1}
                        checked={menu1 === '103'}>
                    </input>
                    <label>Halal</label>
                </div>
            </form>
            {menu1 ? secondRadio() : ''}
            {menu2 ? thirdRadio() : ''}
            <button onClick={wipe} className='reset'>Reset</button>
            {menu1 && menu2 && menu3 ? <Link onClick={handleSubmit} className='submit' to='/order'>Submit</Link> : ''}
        </div>
    );
}

export default Menu;
