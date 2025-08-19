import { Button } from '@/components/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useParams } from 'react-router'
import { useVersesQuery, type VersesRouteParams } from '.'
import Verse from './Verse'

export default function Verses() {
    const { bookId, chapter } = useParams<VersesRouteParams>()
    const { data: verses } = useVersesQuery(bookId, chapter)
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
            <CardHeader>
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
                    <Button type="button" onClick={searchVerses}>
                        Search
                    </Button>
                </CardAction>
            </CardHeader>
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
