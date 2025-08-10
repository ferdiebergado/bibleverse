import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { NavLink } from 'react-router'
import { ModeToggle } from './ModeToggle'

export default function Header() {
    return (
        <header className="mb-16 px-12 py-3 shadow-md dark:shadow-gray-700/80">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-5">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <NavLink to="/books" end>
                                Books
                            </NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
