import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Friends = (props) => (
  <div>
    <div>
      <img src={"ron.png"}/><h5>Ron Li : Offline</h5><button>View Profile</button>
    </div>
    <p><button onClick={() => props.viewMap()}>View Map</button></p>
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
