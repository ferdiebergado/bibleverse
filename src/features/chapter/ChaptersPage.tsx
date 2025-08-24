import CardMain from '@/components/CardMain'
import { Search } from '@/components/Search'
import { SkeletonCard } from '@/components/SkeletonCard'
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useBook } from '@/features/book'
import type { ChaptersRouteParams } from '@/features/chapter'
import Chapters from '@/features/chapter/Chapters'
import { Suspense, useState, type FC } from 'react'
import { useParams } from 'react-router'

const ChaptersPage: FC = () => {
    const { bookId } = useParams<ChaptersRouteParams>()
    const book = useBook(bookId)

    const initialSearchTerm = ''
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
    const handleSearch = (term: string): void => {
        setSearchTerm(term)
    }
    const handleClear = (): void => {
        setSearchTerm(initialSearchTerm)
    }

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">{book.name}</CardTitle>
                <CardDescription>Chapters from this book</CardDescription>
            </CardHeader>
            <CardContent>
                <Search
                    placeHolder="Search chapters..."
                    onSearch={handleSearch}
                    onClear={handleClear}
                />
                <Suspense fallback={<SkeletonCard />}>
                    <Chapters bookId={bookId} searchTerm={searchTerm} />
                </Suspense>
            </CardContent>
        </CardMain>
    )
}

export default ChaptersPage
