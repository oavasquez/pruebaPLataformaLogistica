/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import CustomTabs from "../../components/CustomTabs/CustomTabs";


import ImportExport from "@material-ui/icons/ImportExport";
import Email from "@material-ui/icons/Email";
import Chat from "@material-ui/icons/Chat";
import ChatPage from './ChatPage'
import ShowMessageList from './ShowMessageList';




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
        this.state = {        };
        this.lertTimeout = null;
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
                                    <ShowMessageList />


                                )
                            },
                            {
                                tabName: "Chat",
                                tabIcon: Chat,
                                tabContent: (
                                    <ChatPage />


                                )
                            },
                            {
                                tabName: "Exportar",
                                tabIcon: ImportExport,
                                tabContent: (
                                    <div>
                                    </div>


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
