import React from 'react';
import ItemAdd from './addItems';
import ItemShow from './showItems';

export default function TheStall() {
    return (
            <div>
                <header>
                    <ItemAdd />
                </header>


                <main className='mt-4'>
                    <ItemShow/>
                </main>
            </div>
    )
}
