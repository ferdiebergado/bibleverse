import { Card, CardAction, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'

interface ChapterProps {
    bookId: string
    chapter: number
}

export default function Chapter({ bookId, chapter }: ChapterProps) {
    return (
        <Card className="my-2 min-w-xs px-4 py-6 shadow-md">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>Chapter {chapter}</CardTitle>
                <CardAction>
                    <Link
                        className="underline underline-offset-4"
                        to={`/books/${bookId.toLocaleLowerCase()}/${chapter.toString()}`}
                    >
                        Read
                    </Link>
                </CardAction>
            </CardHeader>
        </Card>
    )
}
