import CardContentMain from '@/components/CardContentMain'
import CardMain from '@/components/CardMain'
import ErrorMessage from '@/components/ErrorMessage'
import { SkeletonCard } from '@/components/SkeletonCard'
import { CardAction, CardHeader, CardTitle } from '@/components/ui/card'
import { useSearchVerseQuery } from '@/features/searchVerse'
import Search from '@/features/searchVerse/Search'
import Verse from '@/features/verse/Verse'
import { type FC, useState } from 'react'

const SearchVerse: FC = () => {
    const initialSearchTerm = ''
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

    const {
        data: searchResult,
        isPending,
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
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">Verse Search</CardTitle>
                <CardAction>
                    <Search
                        placeHolder="e.g. John 3:16, matt 25:31-33,46"
                        onSearch={handleSearch}
                        onClear={handleClear}
                    />
                </CardAction>
            </CardHeader>

            <CardContentMain>
                {isPending ? (
                    <SkeletonCard />
                ) : isError ? (
                    <ErrorMessage message={error.message} />
                ) : (
                    searchResult.map(({ verse, text }) => (
                        <Verse verse={verse} text={text} key={verse} />
                    ))
                )}
            </CardContentMain>
        </CardMain>
    )
}

export default SearchVerse
