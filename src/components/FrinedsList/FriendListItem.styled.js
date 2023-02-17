import styled from "styled-components";

export const ItemFriend = styled.li`
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    width: 270px;
    align-items: center;

    font-size: 16px;
    font-weight: 700;
`;

export const LabelOnline = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => {
        return props.isOnline ? 'green' : 'red';
    }};
`;