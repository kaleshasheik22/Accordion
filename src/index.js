
import * as React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { store } from './store'
import CollapseContainer from './containers/collapseContainer'
import {appConstants} from './common/constants/app.const'


render(
    <Provider store={store}>
      <CollapseContainer/>
    </Provider>,
     document.getElementById(appConstants.APP)
  )
  