import Home from '@/features/bible/Home'
import { expect, it } from 'vitest'
import { render } from 'vitest-browser-react'

it('shows random verse', async () => {
    const { getByText } = render(<Home />)

    const randomVerse = getByText('Random Ferse')

    await expect.element(randomVerse).toBeVisible()
})
