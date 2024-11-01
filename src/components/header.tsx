'use client'
import { FC, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dark } from './dark';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import { signIn, useSession, signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuShortcut } from './ui/dropdown-menu';
import { useRouter } from 'next/navigation';

type HeaderProps = object

const Header: FC<HeaderProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { data: session } = useSession()
    const router = useRouter();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const renderNavItems = (mobile: boolean = false) => (
        navItems.map((item, index) => (
            <motion.li
                key={item.href}
                initial={mobile ? { opacity: 0, y: 20 } : {}}
                animate={mobile ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * (index + 1) }}
            >
                <Link
                    href={item.href}
                    className={`transition-all duration-300 ${mobile ? 'text-lg font-medium hover:underline hover:opacity-80 dark:text-white' : 'text-base md:text-lg hover:underline hover:opacity-80'} cursor-pointer`}
                    onClick={mobile ? () => setIsMobileMenuOpen(false) : undefined}
                >
                    {item.label}
                </Link>
            </motion.li>
        ))
    );

    const handleSignIn = async () => {
        await signIn("google", { callbackUrl: window.location.origin + window.location.pathname });
    };

    const handleSignOut = async () => {
        await signOut({ redirect: false });
        router.refresh();
    };

    const renderAuthButton = (mobile: boolean = false) => (
        !session ? (
            <Button
                variant="outline"
                className={`transition-all duration-300 hover:scale-105 hover:shadow-md ${mobile ? 'w-full dark:text-white dark:border-white' : 'hidden md:block'} cursor-pointer`}
                onClick={handleSignIn}
            >
                Sign In
            </Button>
        ) : mobile ? (
            <Button
                variant="outline"
                className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md dark:text-white dark:border-white cursor-pointer"
                onClick={handleSignOut}
            >
                Logout
            </Button>
        ) : (
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src={session.user?.image || undefined} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                        Logout
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    );

    return (
        <header className="shadow-xl dark:shadow-slate-500">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex flex-col items-center">
                    <Link href="/" className="gradient-text text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer">
                        Stabel Image
                    </Link>
                    <span className="text-xs md:text-sm text-gray-500 text-center">Generate amazing images using AI with Stable Image</span>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4 md:space-x-6">
                        {renderNavItems()}
                    </ul>
                </nav>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <Dark />
                    {renderAuthButton()}
                    <button className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center`}
                initial={{ x: '-100%' }}
                animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className="container mx-auto px-6 relative h-full flex flex-col justify-center">
                    <button
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </button>
                    <div className="flex flex-col items-center mb-6">
                        <Link href="/" className="gradient-text text-3xl md:text-4xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer">
                            Stabel Image
                        </Link>
                        <span className="text-xs md:text-sm text-gray-500 text-center">Generate amazing images using AI with Stable Image</span>
                    </div>
                    <ul className="flex flex-col items-center space-y-4">
                        {renderNavItems(true)}
                        <motion.li
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {renderAuthButton(true)}
                        </motion.li>
                    </ul>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
