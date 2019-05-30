  import * as React from 'react'
  import LocationOn from '@material-ui/icons/LocationOn'
  import FilterDrama from '@material-ui/icons/FilterDrama'
  import Whatshot from '@material-ui/icons/Whatshot'

  const icons = {
    First: FilterDrama,
    Second: LocationOn,
    Third: Whatshot,
  }

  export const TitleIcon = ({ name }) => {
    const Icon = icons[name];
    return Icon ? (
      <React.Fragment>
    <Icon />  {name}
    </React.Fragment>
    ) : null;
  }

  