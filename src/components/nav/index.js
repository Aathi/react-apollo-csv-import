import React, { Component } from 'react';
import { AppBar, Drawer, ListItem } from 'material-ui';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    componentWillMount() {
        this.setState({ 
            drawerOpen: false 
        });
    }

    handleOpen = () => { 
        this.setState({
            drawerOpen: true 
        }); 
    };

    handleClose = () => { 
        this.setState({
            drawerOpen: false 
        }); 
    };
 
    render() {
        return (
            <div>
                <Drawer
                    docked={ false }
                    open={ this.state.drawerOpen }
                    containerStyle={ { top: 64 } }
                    onRequestChange={ this.handleClose }
                >
                    <ListItem
                        key='0'
                        primaryText="Home"
                        containerElement={<Link to="/" />}
                        onTouchTap={ this.handleClose }
                    />
                </Drawer>

                <AppBar
                    title="CRA"
                    onLeftIconButtonTouchTap={ this.handleOpen }
                />
            </div>
        )
    }
}