import PropTypes from "prop-types";
import { Table } from "./TransactionHistory.styled";
import { Headers } from "./TransactionHistory.styled";
import { Header } from "./TransactionHistory.styled";
import { Rows } from "./TransactionHistory.styled";
import { ItemsRow } from "./TransactionHistory.styled";

export const TransactionSheet = ({ items }) => {
    return (
        <Table>
            <Headers>
                <tr>
                    <Header>Type</Header>
                    <Header>Amount</Header>
                    <Header>Currency</Header>
                </tr>
            </Headers>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <Rows key={id}>
                            <ItemsRow>{type}</ItemsRow>
                            <ItemsRow>{amount}</ItemsRow>
                            <ItemsRow>{currency}</ItemsRow>
                        </Rows>
                    );
                })}
            </tbody>
        </Table>
    )
}


TransactionSheet.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}