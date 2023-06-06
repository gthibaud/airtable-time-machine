import { Link } from 'gatsby';

export const Footer = () => {
    return (
        <footer className="bg-surfaceSecondary flex w-full mx-auto items-center justify-between p-0 px-4 lg:px-8 py-8 text-textLink flex-col gap-4 sm:flex-row mt-16">
            <div className="flex flex-1">© Creastel Labs – {new Date().getFullYear()}</div>
            <div className="flex gap-6 items-center text-center">
                <a
                    href="mailto:gregoire@creastel.com"
                    className="hover:underline"
                >
                    Contact
                </a>
                <Link
                    to="/"
                    className="hover:underline"
                >
                    Terms of Service
                </Link>
                <a
                    href="https://creastel.com"
                    target="_blank"
                    className="hover:underline"
                >
                    Creastel
                </a>
            </div>
        </footer>
    );
};
