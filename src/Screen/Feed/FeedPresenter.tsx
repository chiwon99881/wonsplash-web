import React from "react";
import styled from "styled-components";
import Theme from "src/Styles/Theme";
import Input from "../../Components/Input";
import Photo from "../../Components/Photo";

const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InnerBox = styled.div`
  min-width: 700px;
  max-width: 1500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin: 80px 0;
`;
const BottomBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Creator = styled.span`
  font-size: 13px;
  color: ${Theme.greyFontColor};
`;
const Bold = styled.span`
  font-size: 46px;
  font-weight: 600;
  margin-bottom: 40px;
  color: ${Theme.whiteFontColor};
`;
const Text = styled.span`
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
  color: ${Theme.whiteFontColor};
`;
const InputColumn = styled.div`
  margin-top: 40px;
  display: flex;
`;
const ExInput = styled(Input)`
  width: 700px;
  padding: 15px;
  background-color: ${Theme.lightGreyColor};
  &:focus {
    outline: none;
    box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
      0 10px 10px rgba(255, 255, 255, 0.22);
    background-color: ${Theme.whiteFontColor};
  }
  &::placeholder {
    font-size: 15px;
  }
`;
const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(400px, auto);
  margin: 60px auto;
  min-height: 500px;
  max-width: ${Theme.photoMaxWidth};
`;
interface IProps {
  term: string;
  feedArray: any;
  onKeyPress: (e) => void;
  onChange: (e) => void;
}
const FeedPresenter: React.SFC<IProps> = ({
  term,
  onChange,
  feedArray,
  onKeyPress
}) => {
  return (
    <>
      <Background>
        <InnerBox>
          <Bold>Wonsplash</Bold>
          <Text>The internet’s source of freely useable images.</Text>
          <Text>Powered by creators everywhere.</Text>
          <InputColumn>
            <ExInput
              name={"term"}
              value={term}
              onKeyPress={onKeyPress}
              placeholder={"Search free high-resolution photos"}
              onChange={onChange}
              customWidth={"200px"}
            />
          </InputColumn>
        </InnerBox>
        <BottomBox>
          <Creator>Created by 원이</Creator>
        </BottomBox>
      </Background>
      <FeedContainer>
        {feedArray.map(collect => (
          <Photo
            key={collect.id}
            id={collect.id}
            file={collect.file}
            isLiked={collect.is_liked}
            likeCount={collect.like_count}
            createdAt={collect.natural_time}
            tags={collect.tags}
            views={collect.views}
            creator={collect.creator}
          />
        ))}
      </FeedContainer>
    </>
  );
};

export default FeedPresenter;
