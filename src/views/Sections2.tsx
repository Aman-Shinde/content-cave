import React from "react";
import { styled } from "styled-components";
import brandIndetity from "../BrandIdentity";
import ResponsiveArticleCard from "./ResponsiveArticleCard";
import SectionHeader from "./SectionHeader";

const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 24px;
grid-row-gap: 24px;
padding-top: 48px;
padding-bottom: 48px;

@media ${brandIndetity.mediaQuaries.mdD} {
    grid-template-columns: auto;
    grid-template-rows: repeat(12, 1fr);
  }
`;

const GridItem = styled.div`
    grid-column : span 3;
    justify-self: center;
    padding: 0px 8px;
    @media ${brandIndetity.mediaQuaries.mdD} {
        grid-column : span 1;
        grid-row : span 3;
        padding: 0px;
    }
`;

const Sections2 = () => {
    return (
        <>
            <SectionHeader sectionHeader={"Channel-2"} />
            <GridWrapper>

                <GridItem>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} />
                </GridItem>
                <GridItem>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} />
                </GridItem>
                <GridItem>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} />
                </GridItem>
                <GridItem>
                    <ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} />
                </GridItem>

            </GridWrapper>
        </>
    )
}

export default Sections2;