import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { useLoaderData } from 'react-router'
import Chapter from './Chapter'
import { chaptersLoader } from './chapters'

export default function Chapters() {
    const chapters = useLoaderData<Awaited<ReturnType<typeof chaptersLoader>>>()
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
        <Card className="m-8 p-12">
            <CardTitle className="text-3xl">{chapters[0].book}</CardTitle>

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

            <CardContent className="flex flex-wrap gap-3">
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
