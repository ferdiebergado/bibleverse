import { Card, CardAction, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router'

interface BookProps {
    id: string
    name: string
}

export default function Book({ name, id }: BookProps) {
    return (
        <Card className="my-2 min-w-xs px-4 py-6 shadow-md">
            <CardHeader className="flex items-center justify-between">
                <CardTitle>{name}</CardTitle>
                <CardAction>
                    <Link
                        className="bg-primary text-primary-foreground rounded-lg px-3 py-1"
                        to={`/books/${id.toLocaleLowerCase()}/chapters`}
                    >
                        Read
                    </Link>
                </CardAction>
            </CardHeader>
        </Card>
    )
}
