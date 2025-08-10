import { Card, CardAction, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'

interface BookProps {
    id: string
    name: string
}

export default function Book({ name, id }: BookProps) {
    return (
        <Card className="my-2 w-full px-4 py-3 shadow-md md:w-2xs">
            <CardTitle>{name}</CardTitle>
            <CardAction>
                <Link to={`/books/${id.toLocaleLowerCase()}/chapters`}>
                    Read
                </Link>
            </CardAction>
        </Card>
    )
}
