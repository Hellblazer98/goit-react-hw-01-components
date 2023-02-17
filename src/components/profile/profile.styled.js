import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 320px;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 4px 4px;

`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Image = styled.img`
    height: 100%;
    width: 170px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Title = styled.p`
    color: #122236;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    color: #82909e;
    font-size: 16px;
    margin-bottom: 10px;

`;

export const StaticList = styled.ul`
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
    border-top: 1px solid #EEEEEE;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-basis: calc(100% / 3);
    background-color: #f3f6f9;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-right: 1px solid #EEEEEE;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;

    font-size: 14px;
    color: #82909e;
    
`;

export const StatValue = styled.span`
    color: black;
    font-size: 16px;
    font-weight: 700;
`;

