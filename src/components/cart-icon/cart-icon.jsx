import React from 'react';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = disptch => ({
    toggleCartHidden: () => disptch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);