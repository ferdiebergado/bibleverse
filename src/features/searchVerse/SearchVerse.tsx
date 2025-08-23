import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Verse from '@/features/verse/Verse'
import { type FC, useState } from 'react'
import { useSearchVerseQuery } from '.'
import Search from './Search'

const SearchVerse: FC = () => {
    const initialSearchTerm = ''
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

    const {
        data: searchResult,
        isError,
        error,
    } = useSearchVerseQuery(searchTerm)

    const handleSearch = (term: string) => {
        setSearchTerm(term)
    }

    const handleClear = () => {
        setSearchTerm(initialSearchTerm)
    }

    return (
        <div className="flex flex-col items-center">
            <Card className="m-4 w-auto p-6 shadow-md md:m-8 md:w-3xl md:p-12">
                <CardHeader>
                    <CardTitle className="text-3xl">Verse Search</CardTitle>
                    <CardAction className="flex gap-3">
                        <Search
                            placeHolder="e.g. John 3:16, matt 25:31-33,46"
                            onSearch={handleSearch}
                            onClear={handleClear}
                        />
                    </CardAction>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-3 px-0">
                    {isError ? (
                        <p className="text-red-500">Error: {error.message}</p>
                    ) : (
                        searchResult?.map(({ verse, text }) => (
                            <Verse verse={verse} text={text} key={verse} />
                        ))
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default SearchVerse
