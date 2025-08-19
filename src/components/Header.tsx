import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from './ModeToggle'
import NavigationLink from './NavigationLink'

export default function Header() {
    return (
        <header className="mb-16 px-12 py-3 shadow-md dark:shadow-gray-700/80">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-5">
                    <NavigationMenuItem>
                        <NavigationLink to="/" end>
                            Home
                        </NavigationLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationLink to="/books" end>
                            Books
                        </NavigationLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
