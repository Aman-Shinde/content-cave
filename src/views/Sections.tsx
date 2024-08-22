import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import brandIndetity from '../BrandIdentity';

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  padding-bottom: 48px;
  max-width: 1350px;
  margin: 0px auto;

  @media ${brandIndetity.mediaQuaries.mdD} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const Cell1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
      grid-area: auto;
  }
`;

const Cell2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  justify-self: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    grid-area: auto;
}
`;

const Cell3 = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  justify-self: center;
  align-self: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    grid-area: auto;
}
`;

const Cell4 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  justify-self: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    grid-area: auto;
}
`;

const Cell5 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  justify-self: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    grid-area: auto;
}
`;

const Sections: React.FC = () => {
  return (
    <GridContainer>
      <Cell1> <ArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} /> </Cell1>
      <Cell2> <ArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} /> </Cell2>
      <Cell3> <ArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} /> </Cell3>
      <Cell4> <ArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} /> </Cell4>
      <Cell5> <ArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} /> </Cell5>
    </GridContainer>
  );
};

export default Sections;
