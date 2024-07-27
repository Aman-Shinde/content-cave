import React from "react";
import { styled } from "styled-components";
import ResponsiveArticleCard from "./ResponsiveArticleCard";
import brandIndetity from "../BrandIdentity";
import SectionHeader from "./SectionHeader";

const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 24px;
grid-row-gap: 24px;
padding-top: 48px;
padding-bottom: 48px;

@media ${brandIndetity.mediaQuaries.mdD} {
    width: min(500px, 100%);
    margin: 0px auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const Cell1 = styled.div`
grid-area: 1 / 1 / 3 / 4;
justify-self: center;
@media ${brandIndetity.mediaQuaries.mdD} {
    width: 100%;
    grid-area: auto;
}
`;

const Cell2 = styled.div`
grid-area: 1 / 4 / 2 / 6;
justify-self: end;
@media ${brandIndetity.mediaQuaries.mdD} {
    width: 100%;
    grid-area: auto;
}
`;

const Cell3 = styled.div`
grid-area: 2 / 4 / 3 / 6;
justify-self: end;
@media ${brandIndetity.mediaQuaries.mdD} {
    width: 100%;
    grid-area: auto;
}
`;

const Section1: React.FC = () => {
    return (
        <>
            <SectionHeader sectionHeader={"Channel-1"} />
            <GridWrapper>
                <Cell1>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/1400x1300"} />
                </Cell1>
                <Cell2>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} />
                </Cell2>
                <Cell3>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/400x300"} />
                </Cell3>
            </GridWrapper>
        </>
    )
};

export default Section1;