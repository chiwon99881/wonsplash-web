import FeedContainer from "./FeedContainer";
import { connect } from "react-redux";
import { actionCreators as collectActions } from "src/Redux/Modules/collect";

const mapStateToProps = (state, ownProps) => {
  const {
    collect: { feedArray },
    router
  } = state;
  return {
    feedArray,
    router
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    feed: () => {
      dispatch(collectActions.feed());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
