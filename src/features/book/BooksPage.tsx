import CardContentMain from '@/components/CardContentMain'
import CardMain from '@/components/CardMain'
import { SkeletonCard } from '@/components/SkeletonCard'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Books from '@/features/book/Books'
import { Suspense, type FC } from 'react'

const BooksPage: FC = () => {
    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">Books</CardTitle>
                <CardDescription>Books of the Bible</CardDescription>
            </CardHeader>
            <CardContentMain>
                <Suspense fallback={<SkeletonCard />}>
                    <Books />
                </Suspense>
            </CardContentMain>
        </CardMain>
    )
}

export default BooksPage
