import { Card, CardAction, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'

interface ChapterProps {
    bookId: string
    chapter: number
}

export default function Chapter({ bookId, chapter }: ChapterProps) {
    return (
        <Card className="mx-3 my-2 min-w-44 shrink px-4 py-3">
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
