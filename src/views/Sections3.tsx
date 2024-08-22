import React from "react";
import { styled } from "styled-components";
import brandIndetity from "../BrandIdentity";
import ResponsiveArticleCard from "./ResponsiveArticleCard";
import SectionHeader from "./SectionHeader";

const GridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    padding-top: 48px;
    padding-bottom: 48px;
    max-width: 1350px;
    margin: 0px auto;

    @media ${brandIndetity.mediaQuaries.mdD} {
        grid-template-columns: auto;
    }
`;

const GridItem = styled.div`
    width: 100%;
    height: auto;
    grid-column: span 3;
    grid-row: span 4;
    padding: 0px 8px;

    justify-self: center;
    @media ${brandIndetity.mediaQuaries.mdD} {
        grid-column: span 1;
        grid-row: span 1;
        padding: 0px;
      }
`;

const Sections3 = () => {
    return (
        <>

            <SectionHeader sectionHeader={"Channel-3"} />

            <GridWrapper>

                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>
                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>
                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>
                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>

                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>
                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>
                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>
                <GridItem><ResponsiveArticleCard title={"The Future of Artificial Intelligence"} subtitle={"How AI is Transforming Industries and Everyday Life"} byline={"John Doe"} tag={"Technology"} imgurl={"https://via.placeholder.com/300x300"} /></GridItem>


            
            </GridWrapper>

        </>
    )
}

export default Sections3