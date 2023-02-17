import PropTypes from "prop-types";
import { Wrap } from "./Statistics.styled";
import { TitleStats } from "./Statistics.styled";
import { StatList } from "./Statistics.styled";
import { StatsElement } from "./Statistics.styled";
import { Percent } from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
    return (
        <Wrap>
            {title && (<TitleStats>{title}</TitleStats>)}
            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatsElement key={id}>
                            <span>{label}</span>
                            <Percent>{percentage}%</Percent>
                        </StatsElement>
                    );
                })}
            </StatList>
        </Wrap>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}
