import React from "react";
import { styled } from "styled-components";
import brandIndetity from "../BrandIdentity";

interface SectionHeaderProps {
    sectionHeader : string;
}

const SectionHeaderWrapper = styled.div`
    width: 100%;
    padding: 24px 0px;
    // margin-bottom: 48px;
    border-top: ${({ theme }) => `1px solid ${theme?.invertedBackgroundColor || 'black'}`};
    border-bottom: ${({ theme }) => `1px solid ${theme?.invertedBackgroundColor || 'black'}`};
    text-align: left;
    color: ${({theme}) => theme?.fontColor || 'black'};
    @media ${brandIndetity.mediaQuaries.mdD} {
        margin-bottom: 0px;
        padding: 16px 0px;
    }
    @media ${brandIndetity.mediaQuaries.smD} {
        padding: 12px 0px;
    }
`;

const Heading = styled.h2`
font-family: ${brandIndetity.typography.headings.fontFamily};
font-size: ${brandIndetity.typography.headings.fontSize};
font-weight: ${brandIndetity.typography.headings.fontWeight};
line-height: ${brandIndetity.typography.headings.lineHeight};

@media ${brandIndetity.mediaQuaries.smD} {
    font-size: ${brandIndetity.typography.headings.smFontSize}
}
`;

function SectionHeader({sectionHeader} : SectionHeaderProps) {
    return (
        <>
            <SectionHeaderWrapper> <Heading>{sectionHeader}</Heading> </SectionHeaderWrapper>
        </>
    )
}

export default SectionHeader
