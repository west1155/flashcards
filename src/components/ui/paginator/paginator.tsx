import {FC, memo} from "react";
import {clsx} from "clsx";
import {usePagination} from "./usePagination";
import s from "./paginator.module.scss";
import {NavigationBlock} from "./navigation-block/navigation-block";
import {Typography} from "../typography";
import {PageSizeSelect} from "./page-size-selector/page-size-select";

export type PaginationProps = {
    totalCount?: number
    currentPage: number
    onPageChange: (newPage: number) => void
    pageSize: number
    onPageSizeChange: (newPageSize: number) => void
    siblingCount?: number
    className?: string
}

export const Pagination: FC<PaginationProps> = memo(
    ({
         totalCount = 10,
         currentPage,
         onPageChange,
         pageSize,
         onPageSizeChange,
         siblingCount,
         className,
     }) => {
        const classes = clsx(s.root, className)

        const paginationRange = usePagination({
            currentPage,
            totalCount,
            siblingCount,
            pageSize,
        })

        if (currentPage === 0 || paginationRange.length < 2) {
            return null
        }

        return (
            <div className={classes}>
                <NavigationBlock
                    paginationRange={paginationRange}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
                <div className={s.selectBlock}>
                    <Typography variant="body2">Show</Typography>
                    <PageSizeSelect pageSize={pageSize} onPageSizeChange={onPageSizeChange} />
                    <Typography variant="body2">on the page</Typography>
                </div>
            </div>
        )
    }
)
