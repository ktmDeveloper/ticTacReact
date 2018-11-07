import React, { Component } from 'react'
import {Link} from 'react-router'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {NavToggleButton} from '../styled/NavDrawer';

export default class NavDrawer extends Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            width:260
        }
    }
    toggle=() => {
        this.setState((prevState, props) => {
            return{
                open:!prevState.open
            }
        })
    }
    render(){
        return(
            <div>
               <NavToggleButton 
                open={this.state.open}
                toggle={this.toggle}
                width={this.state.width}/>

                <Drawer 
                open={this.state.open}>
                    <Divider/>
                    <Link to={'/'}>
                    <MenuItem 
                        onClick={this.toggle}
                        primaryText={'Play'}
                        />
                    </Link>

                    <Link to={'/profile'}>
                    <MenuItem 
                            onClick={this.toggle}
                            primaryText={'Profile'}
                            />
                    </Link>
                    
                        
                </Drawer>
            </div>
        )
    }
}