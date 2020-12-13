import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

interface ownProps {
  [key: string]: any
  filter: string
}

const mapStateToProps = (state: any, ownProps: ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: any, ownProps: ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
