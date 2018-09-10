/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import SnackbarContent from "../../components/Snackbar/SnackbarContent.jsx";
import Snackbar from "../../components/Snackbar/Snackbar.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import Tasks from "../../components/Tasks/Tasks";
import Email from "@material-ui/icons/Email";
import Chat from "@material-ui/icons/Chat";
import ChatPage from './ChatPage'





import { bugs, website, server } from "../../variables/general";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

class Mail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tl: false,
            tc: false,
            tr: false,
            bl: false,
            bc: false,
            br: false
        };
        this.lertTimeout = null;
    }
    componentWillUnmount() {
        this.clearAlertTimeout();
    }
    clearAlertTimeout() {
        if (this.alertTimeout !== null) {
            clearTimeout(this.alertTimeout);
        }
    }
    showNotification(place) {
        var x = [];
        x[place] = true;
        this.setState(x);
        this.clearAlertTimeout();
        this.alertTimeout = setTimeout(
            function () {
                x[place] = false;
                this.setState(x);
            }.bind(this),
            6000
        );
    }
    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomTabs
                    
                        headerColor="danger"
                        tabs={[
                            {
                                tabName: "Mensajes sin leer",
                                tabIcon: Email,
                                tabContent: (
                                    <Tasks
                                    checkedIndexes={[1]}
                                    tasksIndexes={[0, 1, 2]}
                                    tasks={server}
                                />
                                   

                                )
                            },
                            {
                                tabName: "Chat",
                                tabIcon: Chat,
                                tabContent: (
                                    <ChatPage />


                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(Mail);
