import React from "react";
import HeaderPresenter from "./HeaderPresenter";

interface IProps {
  username: string;
  my: object;
  pathname: string;
  profile: (username: any) => void;
  goSearch: (term: string) => void;
}
interface IState {
  term: string;
  loading: boolean;
}
class HeaderContainer extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      loading: true
    };
  }

  public componentDidMount() {
    const { profile, username } = this.props;
    profile(username);
  }

  // will deprecated funtion at v17~
  public UNSAFE_componentWillReceiveProps(nextProps, prevState) {
    if (nextProps && nextProps.my) {
      this.setState({ loading: false });
    }
  }

  public onChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    } as any);
  };

  public handleKeyPress = e => {
    const { term } = this.state;
    const { goSearch } = this.props;
    if (e.key === "Enter") {
      e.preventDefault();
      goSearch(term);
    }
  };

  public render() {
    const { pathname } = this.props;
    const { term, loading } = this.state;
    if (loading) {
      return null;
    } else {
      const { my } = this.props;
      return (
        <HeaderPresenter
          term={term}
          onChange={this.onChange}
          handleKeyPress={this.handleKeyPress}
          my={my}
          pathname={pathname}
        />
      );
    }
  }
}

export default HeaderContainer;
