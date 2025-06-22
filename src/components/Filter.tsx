
import { FILTER_BUTTONS } from "../consts";
import type { FilterValue } from "../types"


interface Props {
    filterSelected: FilterValue;
    onFilterChange: (filter: FilterValue) => void;

}


export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

    return (
        <ul className="filters">
            {
                Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
                    const isSelected = filterSelected === key;
                    const classNameSelected = isSelected ? 'selected' : '';
                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={classNameSelected}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onFilterChange(key as FilterValue)}
                                }
                            >
                                {literal}
                            </a>


                        </li>
                    )
                })
            }
        </ul>
    )
}
