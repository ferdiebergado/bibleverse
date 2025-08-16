import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { versesLoader, versesQuery, type VersesRouteParams } from '.'
import Verse from './Verse'

export default function Verses() {
    const initialData =
        useLoaderData<Awaited<ReturnType<typeof versesLoader>>>()
    const { bookId, chapter } = useParams<VersesRouteParams>()
    const { data: verses } = useQuery({
        ...versesQuery(bookId, chapter),
        initialData,
    })
    const [filteredVerses, setFilteredVerses] = useState(verses)
    const [search, setSearch] = useState('')

    function searchVerses() {
        if (search === '') {
            setFilteredVerses(verses)
            return
        }

        const filteredVerses = verses.filter(({ text }) =>
            text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        setFilteredVerses(filteredVerses)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const searchTerm = e.target.value
        if (searchTerm === '') {
            setFilteredVerses(verses)
            return
        }

        setSearch(searchTerm)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key == 'Enter') searchVerses()
    }

    return (
        <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">
            <CardTitle className="text-3xl">
                {verses[0].book} Chapter {filteredVerses[0].chapter}
            </CardTitle>
            <CardAction className="flex w-full max-w-sm items-center gap-2">
                <Input
                    type="search"
                    placeholder="Search for a verse"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Button type="button" variant="outline" onClick={searchVerses}>
                    Search
                </Button>
            </CardAction>
            <CardContent className="flex flex-wrap gap-3 px-0">
                {filteredVerses.length === 0
                    ? 'No results found.'
                    : filteredVerses.map(({ verse, text }) => (
                          <Verse verse={verse} text={text} key={verse} />
                      ))}
            </CardContent>
        </Card>
    )
}
