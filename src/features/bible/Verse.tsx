import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface VerseProps {
    verse: number
    text: string
    book?: string
    chapter?: number
}

export default function Verse({ verse, text, book, chapter }: VerseProps) {
    return (
        <Card className="my-3 w-full max-w-lg px-4 py-4">
            <CardTitle>
                {book ? `${book} ` : ''}
                {chapter ? `Chapter ${chapter.toString()} ` : ''}Verse {verse}
            </CardTitle>
            <CardContent className="text-justify italic">{text}</CardContent>
        </Card>
    )
}
