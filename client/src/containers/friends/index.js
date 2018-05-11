import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './friends.css'

const Friends = (props) => (
  <div>
    <div className={"friendsWrapper"}>
      <h3 className={"friendsHeader"}>Friends</h3>
      <div>
        <img className={"inlineBlock"} src={"ron.png"} alt="profile"/>
        <div className={"inlineBlock playerName"}>Ron Li : Offline</div>
        <button className={"inlineBlock"}>View Profile</button>
      </div>
    </div>
    <div className={"viewMap"}>
      <button onClick={() => props.viewMap()}>View Map</button>
    </div>
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  viewMap: () => push('/map')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends)
