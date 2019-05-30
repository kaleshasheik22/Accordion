import React from 'react';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import   {ExpansionPanel, ExpansionPanelSummary} from '../styles/collapse/collapseStyle'
import {TitleIcon} from '../icons/icon'

  class CollapseItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          panel: "",
       
        }
       
    }
    
  handleChange = panel => (event, isExpanded) => {
    this.setState({'panel': isExpanded ? panel : false})
  }

  
  render() {
  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  > 
  <Grid  item sm={3}>

     { this.props.items && this.props.items.data && this.props.items.data.length>0 && this.props.items.data.map((item, index) =>
       
         <ExpansionPanel key={index} expanded={this.state.panel === item.title} onChange={this.handleChange(item.title)}>
        <ExpansionPanelSummary>
          <Typography>
            <TitleIcon name={item.title} />
         </Typography>
        </ExpansionPanelSummary>
        <MuiExpansionPanelDetails>
          <Typography>
            {item.description}
          </Typography>
        </MuiExpansionPanelDetails>
      </ExpansionPanel>
     
    )
}</Grid>

    </Grid>
  );
}}

export default CollapseItem



