"use client";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  open?: boolean;
  square?: boolean;
  style?: React.CSSProperties;
  summary?: React.ReactNode;
  details?: React.ReactNode;
  defaultExpanded?: boolean;
  children?: React.ReactNode;
}

export default function Accordion({
  open,
  square = true,
  style,
  summary,
  details,
  defaultExpanded = true,
}: Props) {
  return (
    <CustomAccordion
      disableGutters
      square={square}
      defaultExpanded={defaultExpanded}
      expanded={open}
      style={style}
    >
      <CustomAccordionSummary
        expandIcon={
          <Image
            src={
              "https://image.thetak.net/asset/product/images/arrow_down_gray_25.svg"
            }
            alt="accordion-arrow"
            width={15}
            height={15}
          />
        }
      >
        <SummaryContainer>{summary}</SummaryContainer>
      </CustomAccordionSummary>
      {details}
    </CustomAccordion>
  );
}

const CustomAccordion = styled(MuiAccordion)`
  background-color: transparent;
  box-shadow: none;

  ::before {
    height: 0px;
  }
`;

export const CustomAccordionSummary = styled(AccordionSummary)`
  & .MuiAccordionSummary-content {
    margin: 0;
  }

  &.MuiAccordionSummary-root {
    padding: 0;
    min-height: 0;
  }

  &.Mui-focusVisible {
    background-color: transparent;
  }
  .MuiAccordionSummary-expandIconWrapper {
    margin-right: 24px !important;
  }
`;

const SummaryContainer = styled.div`
  cursor: default;
`;

export const CustomAccordionDetails = styled(AccordionDetails)`
  &.MuiAccordionDetails-root {
    padding: 0;
  }
`;
