import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface VerseProps {
    verse: number
    text: string
}

export default function Verse({ verse, text }: VerseProps) {
    return (
        <Card className="mx-3 my-2 w-full max-w-lg flex-1/2 px-4 py-3">
            <CardTitle>Verse {verse}</CardTitle>
            <CardContent>{text}</CardContent>
        </Card>
    )
}
