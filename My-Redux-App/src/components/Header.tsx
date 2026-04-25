
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { themeChanger } from '../features/theme/themeSlice';

export default function Header() {
    const theme = useSelector((state: RootState) => state.themeReducer.theme);
    const dispatch = useDispatch();
    return (
        <nav className={`sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md ${(theme === 'dark') ? 'dark:border-gray-800 dark:bg-gray-950/80' : ''}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">W</span>
                    </div>
                    <h1 className={`text-xl font-bold tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        MY<span className="text-indigo-600">WEB</span>APP
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:block">
                    <ul className={`flex items-center gap-8 text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}>
                        <li>
                            <a href="#" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-4">
                    <button onClick={() => dispatch(themeChanger())} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-transparent text-gray-600 transition-all hover:bg-gray-100 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900">
                        <span className="text-lg">{theme === 'light' ? '☀' : '🌙'}</span>
                    </button>

                    <button className="hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-indigo-500/25 active:scale-95 sm:block">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}