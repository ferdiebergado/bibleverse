import { Card, CardAction, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'

interface BookProps {
    id: string
    name: string
}

export default function Book({ name, id }: BookProps) {
    return (
        <Card className="mx-3 my-2 min-w-44 shrink px-4 py-3">
            <CardTitle>{name}</CardTitle>
            <CardAction>
                <Link to={`/${id.toLocaleLowerCase()}/chapters`}>Read</Link>
            </CardAction>
        </Card>
    )
}
