import SearchButton from '@/components/SearchButton'
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Verse from '@/features/verse/Verse'
import { type ChangeEvent, type FC, type KeyboardEvent, useState } from 'react'
import { useSearchVerseQuery } from '.'

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [inputValue, setInputValue] = useState('')

    const { data, isPending, isError, error } = useSearchVerseQuery(searchTerm)

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
            <Card className="m-4 w-auto p-6 shadow-md md:m-8 md:w-3xl md:p-12">
                <CardHeader>
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
                            isLoading={isPending}
                        />
                    </CardAction>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-3 px-0">
                    {isError ? (
                        <p className="text-red-500">Error: {error.message}</p>
                    ) : (
                        data?.map(({ verse, text }) => (
                            <Verse verse={verse} text={text} key={verse} />
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default Search
