import MyContainer from "./MyContainer";
import { connect } from "react-redux";
import { actionCreators as userActions } from "src/Redux/Modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { username, who, myLikePhotos }
  } = state;
  return {
    username,
    who,
    myLikePhotos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    myProfile: (username: string) => {
      dispatch(userActions.profile(username));
    },
    myLikes: () => {
      dispatch(userActions.myLikes());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContainer);