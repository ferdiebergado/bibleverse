import CardContentMain from '@/components/CardContentMain'
import CardMain from '@/components/CardMain'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { useVersesQuery, type VersesRouteParams } from '@/features/verse'
import VerseList from '@/features/verse/VerseList'
import { type FC } from 'react'
import { useParams } from 'react-router'

const VersesPage: FC = () => {
    const { bookId, chapter } = useParams<VersesRouteParams>()
    const { data: verses } = useVersesQuery(bookId, chapter)
    const { book: currentBook, chapter: currentChapter } = verses[0]

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">
                    {currentBook} Chapter {currentChapter}
                </CardTitle>
            </CardHeader>
            <CardContentMain>
                <VerseList verses={verses} />
            </CardContentMain>
        </CardMain>
    )
}

export default VersesPage
