import React, {Component} from "react";
import classes from './Drawer.css'
import {NavLink} from 'react-router-dom'
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    {to:'/' , label:'list' , exact:true},
    {to:'/auth' , label:'authorization' , exact:false},
    {to:'/quiz-creator' , label:'quiz creator' , exact:false}
]

class Drawer extends Component {


    clickHandler=()=>{
        this.props.onClose();
    }
    renderLinks () {
        return links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeclassname={classes.active}
                            onClick={this.clickHandler}
                        >
                            {link.label.toUpperCase()}
                        </NavLink>
                    </li>
                )
            }

        )
    }

    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
<React.Fragment>
    <nav className={cls.join(' ')}>
        <ul> {this.renderLinks()}</ul>
    </nav>
    {this.props.isOpen?<Backdrop onCklick={this.props.onClose}/> :null}

</React.Fragment>


        )
    }
}

export default Drawer
