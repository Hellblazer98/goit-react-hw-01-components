import styled from "styled-components";

export const Table = styled.table`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;
`;

export const Headers = styled.thead`
    background-color: #01bcd5;
    color: #ffff;
    text-transform: uppercase;
`;

export const Header = styled.th`
    padding: 15px;
    width: 270px;
`;

export const Rows = styled.tr`
    text-align: center;
    font-size: 14px;
    color: #959ca4;
    background-color: #fff;

    :nth-child(2n+1) {
        background-color: #ecf1f4;
    }
`;

export const ItemsRow = styled.td`
    padding: 15px;
`