import React, { Component } from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StayVisible = styled.div`
    position:absolute;
    margin-left:${(props) => (props.open) ? `${props.width}px` : 'none'};
    transition:margin .2s;
`

export class NavToggleButton extends Component{
    
    render(){
        return(
            <StayVisible 
            open={this.props.open}
            width={this.props.width}
            >
                <FloatingActionButton
                onTouchTap={this.props.toggle}>
                <Menu />
                </FloatingActionButton> 
            </StayVisible>
           
        )
    }
}
