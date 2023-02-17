import styled from "styled-components";
import { getRandomHexColor } from "helpers/getRandomColor";


export const Wrap = styled.section`
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const TitleStats = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
`;

export const StatList = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0;
`;

export const StatsElement = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${getRandomHexColor};
    padding: 20px;
    color: white;
    font-size: 16px;
`;

export const Percent = styled.span`
    font-size: 30px;
    font-weight: 500;
`;