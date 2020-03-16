import React from 'react';
import '../../assets/scss/categories.scss';
import { Link } from 'react-router-dom';

class Categories extends React.Component
{
    state = {
        visible: true
    }
    render()
    {
        return (
            <div className="categories">
                <p>CATEGORIES</p>
                <div className="linkz">
                    <ul>
                        <li style={{ borderRight: "1px solid #cecece", paddingTop: "10px" }}><Link to='/products'>Masks</Link></li>
                        <li><Link to='/kits'>Detection Kits</Link></li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Categories;