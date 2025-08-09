import { Card, CardAction, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'
import type { Book } from './books'

interface BookProps {
    book: Book
}

export default function Book({ book: { name, id } }: BookProps) {
    return (
        <Card className="mx-3 my-2 min-w-44 shrink px-4 py-3">
            <CardTitle>{name}</CardTitle>
            <CardAction>
                <Link to={`/books/${id.toLocaleLowerCase()}/chapters`}>
                    View
                </Link>
            </CardAction>
        </Card>
    )
}
