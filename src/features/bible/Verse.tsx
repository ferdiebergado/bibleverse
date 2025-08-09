import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface VerseProps {
    verse: number
    text: string
}

export default function Verse({ verse, text }: VerseProps) {
    return (
        <Card className="my-2 w-full max-w-lg px-4 py-3">
            <CardTitle>Verse {verse}</CardTitle>
            <CardContent>{text}</CardContent>
        </Card>
    )
}
