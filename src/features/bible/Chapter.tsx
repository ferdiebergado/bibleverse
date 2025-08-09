import { Card, CardAction, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'
import type { Chapter } from './chapters'

interface ChapterProps {
    chapter: Chapter
}

export default function Chapter({
    chapter: { book_id, chapter },
}: ChapterProps) {
    return (
        <Card className="mx-3 my-2 min-w-44 shrink px-4 py-3">
            <CardTitle>{chapter}</CardTitle>
            <CardAction>
                <Link
                    to={`/books/${book_id.toLocaleLowerCase()}/chapters/${chapter.toString()}`}
                >
                    View
                </Link>
            </CardAction>
        </Card>
    )
}
