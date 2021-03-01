import styled, { css } from 'styled-components';

import { fontFamily, fontWeight } from './font';

export const heading1 = css`
  font-family: ${fontFamily.primary};
  font-weight: ${fontWeight.bold};
  font-size: 39px;
  line-height: 43px;
`;

export const heading2 = css`
  ${heading1};
  font-size: 31px;
  line-height: 43px;
`;

export const heading3 = css`
  ${heading1};
  font-size: 25px;
  line-height: 35px;
`;

export const heading4 = css`
  ${heading1};
  font-size: 20px;
  line-height: 28px;
`;

export const paragraph = css`
  font-family: ${fontFamily.primary};
  font-size: 16px;
  line-height: 22px;
`;

export const paragraphBold = css`
  ${paragraph};
  font-weight: ${fontWeight.bold};
`;

export const label = css`
  font-family: ${fontFamily.primary};
  font-size: 13px;
  line-height: 18px;
`;

export const labelBold = css`
  ${label};
  font-weight: ${fontWeight.bold};
`;

export const microlabel = css`
  font-family: ${fontFamily.primary};
  font-size: 10px;
  line-height: 14px;
`;

export const ultraMicrolabel = css`
  font-family: ${fontFamily.primary};
  font-size: 8px;
  line-height: 10px;
`;

export const H1 = styled.h1`
  ${heading1}
`;
export const H2 = styled.h2`
  ${heading2}
`;
export const H3 = styled.h3`
  ${heading3}
`;
export const H4 = styled.h4`
  ${heading4}
`;
export const Paragraph = styled.p`
  ${paragraph}
`;
export const ParagraphBold = styled.p`
  ${paragraphBold}
`;
export const Label = styled.label`
  ${label}
`;
export const MicroLabel = styled.label`
  ${microlabel}
`;
export const UltraMicroLabel = styled.label`
  ${ultraMicrolabel}
`;
