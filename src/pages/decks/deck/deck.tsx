import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import s from './pack.module.scss'

import {CardsTable} from "@/pages/cards/ui/cards-table/cards-table";
import {BackButton} from "@/components/ui/back-button/BackButton";
import {Typography} from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {TextField} from "@/components/ui/textField";
import {useGetCardsQuery} from "@/pages/cards/api";

export const Pack = () => {
    const { packId, currentPage, pageSize, setCurrentPage, setPageSize, searchName, setSearchName } =
        usePackData()

    const navigate = useNavigate()

    const { data: pack, isLoading: packLoading } = useGetDeckInfoQuery({ id: packId })

    const { data } = useGetCardsQuery({
        id: packId as string,
        params: {
            question: debouncedSearchName,
            orderBy: sortedString,
            currentPage,
            itemsPerPage: pageSize,
        },
    })

    const [editIsOpen, setEditIsOpen] = useState(false)

    if (packLoading) return <p>Loading...</p>

    return (
        <section className={s.root}>
            <BackButton />
            <div className={s.header}>
                <div className={s.top}>
                    <Typography as="h1" variant="h1" className={s.title}>
                        {pack?.name}
                    </Typography>
                            <Button as={Link} to={'/'}>
                                Learn Cards
                            </Button>
                </div>
                {pack?.cover && <img src={pack.cover} alt="Cover" className={s.cover} />}
                <TextField
                    type="search"
                    value={searchName}
                    placeholder="Search by question"
                    onChange={e => setSearchName(e.currentTarget.value)}
                />
            </div>
            {data?.items && (
                <CardsTable cards={data.items} isMyPack={isMyPack} sort={sort} onSort={setSort} />
            )}
            <Pagination
                totalCount={data?.pagination.totalItems}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                pageSize={pageSize}
                onPageSizeChange={setPageSize}
                className={s.pagination}
            />
        </section>
    )
}