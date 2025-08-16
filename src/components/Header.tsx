import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from './Link'
import { ModeToggle } from './ModeToggle'

export default function Header() {
    return (
        <header className="mb-16 px-12 py-3 shadow-md dark:shadow-gray-700/80">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-5">
                    <NavigationMenuItem>
                        <Link to="/" end>
                            Home
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/books" end>
                            Books
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
