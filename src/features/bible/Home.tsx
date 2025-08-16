import SearchButton from '@/components/SearchButton'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { type ChangeEvent, type KeyboardEvent, useState } from 'react'
import { useSearchVerseQuery } from './home'
import RandomVerse from './RandomVerse'
import Verse from './Verse'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [inputValue, setInputValue] = useState('')

    const { data, isLoading } = useSearchVerseQuery(searchTerm)

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setInputValue(event.target.value)
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter') {
            setSearchTerm(inputValue)
        }
    }

    function handleClick() {
        setSearchTerm(inputValue)
    }

    return (
        <div className="flex flex-col items-center">
            <RandomVerse />
            <Card className="m-4 w-auto p-6 shadow-md md:m-8 md:w-3xl md:p-12">
                <CardTitle className="text-3xl">Verse Search</CardTitle>
                <CardAction className="flex gap-3">
                    <Input
                        type="search"
                        placeholder="e.g. John 3:16, matt 25:31-33,46"
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        value={inputValue}
                    />
                    <SearchButton
                        handleClick={handleClick}
                        isLoading={isLoading}
                    />
                </CardAction>

                <CardContent className="flex flex-wrap gap-3 px-0">
                    {data?.map((verse) => (
                        <Verse
                            verse={verse.verse}
                            text={verse.text}
                            key={verse.verse}
                        />
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
