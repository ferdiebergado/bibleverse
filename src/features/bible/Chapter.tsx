import { Card, CardAction, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'

interface ChapterProps {
    bookId: string
    chapter: number
}

export default function Chapter({ bookId, chapter }: ChapterProps) {
    return (
        <Card className="my-2 w-full px-4 py-3 shadow-md md:w-2xs">
            <CardTitle>Chapter {chapter}</CardTitle>
            <CardAction>
                <Link
                    to={`/books/${bookId.toLocaleLowerCase()}/chapters/${chapter.toString()}`}
                >
                    Read
                </Link>
            </CardAction>
        </Card>
    )
}
