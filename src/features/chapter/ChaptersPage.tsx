import CardMain from '@/components/CardMain'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useChaptersQuery, type ChaptersRouteParams } from '@/features/chapter'
import ChapterList from '@/features/chapter/ChapterList'
import { type FC } from 'react'
import { useParams } from 'react-router'

const ChaptersPage: FC = () => {
    const { bookId } = useParams<ChaptersRouteParams>()
    const { data: chapters } = useChaptersQuery(bookId)

    return (
        <CardMain>
            <CardHeader>
                <CardTitle className="text-3xl">{chapters[0].book}</CardTitle>
            </CardHeader>
            <CardContent>
                <ChapterList chapters={chapters} />
            </CardContent>
        </CardMain>
    )
}

export default ChaptersPage
