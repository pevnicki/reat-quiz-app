import React, {Component} from "react";
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from "../../components/Navigation/Drawer/Drawer";
import classes from './Layout.css'


class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        console.log(this.state.menu)
        this.setState({
            menu: !this.state.menu
        })


    }

    menuCloseHandler=()=>{
        this.setState({
            menu: false
        })
    }

    render() {
        console.log(classes.Layout)
        return (
            <div className={classes.Layout}>
                <Drawer  isOpen={this.state.menu} onClose={this.menuCloseHandler}/>
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
