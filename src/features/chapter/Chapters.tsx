import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { chaptersLoader, chaptersQuery, type ChapterRouteParams } from '.'
import Chapter from './Chapter'

export default function Chapters() {
    const initialData =
        useLoaderData<Awaited<ReturnType<typeof chaptersLoader>>>()
    const { bookId } = useParams<ChapterRouteParams>()
    const { data: chapters } = useQuery({
        ...chaptersQuery(bookId),
        initialData,
    })
    const [filteredChapters, setFilteredChapters] = useState(chapters)
    const [search, setSearch] = useState('')

    function searchChapters() {
        if (search === '') {
            setFilteredChapters(chapters)
            return
        }

        const filteredChapters = chapters.filter(
            ({ chapter }) => chapter.toString() == search
        )
        setFilteredChapters(filteredChapters)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const searchTerm = e.target.value
        if (searchTerm === '') {
            setFilteredChapters(chapters)
            return
        }

        setSearch(searchTerm)
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key == 'Enter') searchChapters()
    }

    return (
        <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">
            <CardTitle className="text-3xl">
                {filteredChapters[0].book}
            </CardTitle>

            <CardAction>
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input
                        type="search"
                        placeholder="Search for a chapter"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        type="button"
                        variant="outline"
                        onClick={searchChapters}
                    >
                        Search
                    </Button>
                </div>
            </CardAction>

            <CardContent className="flex flex-wrap gap-3 px-0">
                {filteredChapters.length === 0
                    ? 'No results found.'
                    : filteredChapters.map(({ chapter, book_id }) => (
                          <Chapter
                              bookId={book_id}
                              chapter={chapter}
                              key={chapter}
                          />
                      ))}
            </CardContent>
        </Card>
    )
}
