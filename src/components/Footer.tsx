import type { FilterValue } from "../types";
import { Filter } from "./Filter"

interface Props {
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue;
    onClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    onClearCompleted,
    handleFilterChange
}) => {
    return (
        <footer className="footer">

            <span className="todo-count">
                <strong> {activeCount} </strong> Pending Todos
            </span>
            <Filter
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Clear completed
                    </button>
                )
            }

        </footer>
    )
}
