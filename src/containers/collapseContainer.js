import React from 'react'
import { connect } from 'react-redux'
import CollapseItem from '../components/collapseItem'
import {loadAccordionData} from '../actions/accordionActions'


 class CollapseContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      action: ''
    }
}

    componentDidMount(){
        this.props.loadAccordionData()
      
    }

     render() {
      
        return  (
           <React.Fragment>
          <CollapseItem items={this.props.data}/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
  
    return {
      data: state.accordionData.data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {

    return {
      loadAccordionData: () => {
        loadAccordionData(dispatch)
      }

    }
  }

const Collapse = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CollapseContainer)

  

  export default Collapse


