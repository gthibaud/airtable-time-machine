import { useState } from 'react';
import toast from 'react-hot-toast';
import { TiltingContainer } from '../Container/Titling';

export const EmailForm = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a form data object
        const data = new FormData(e.target as HTMLFormElement);

        // Set loading state
        setLoading(true);

        // Post the email to Brevo
        fetch(process.env.GATSBY_EMAIL_FORM_API_URL || 'https://api.brevo.co/email-form', {
            method: 'POST',
            body: data,
        })
            .then((res) => {
                // Send a success message
                toast.success('Thanks, you will received an email very soon!');

                // Reset the form
                (e.target as HTMLFormElement).reset();

                // Reset loading state
                setLoading(false);
            })
            .catch((err) => {
                // Send an error message
                toast.error('An unexpected error occured. Please try again later.');

                // Reset loading state
                setLoading(false);
            })
            .finally(() => {
                // Redirect to page /subscribe
                window.location.href = '/subscribe';
            });
    };

    return (
        <form
            className="flex flex-col gap-4"
            name="EMAIL"
            data-type="subscription"
            onSubmit={handleSubmit}
        >
            <label
                htmlFor="EMAIL"
                className="flex flex-col gap-2"
            >
                <input
                    className="border-primary rounded-lg p-2 border-2 px-4"
                    type="email"
                    name="EMAIL"
                    id="EMAIL"
                    placeholder="Email address"
                    required
                />
            </label>
            {isLoading ? (
                <span className="text-primary">Loading...</span>
            ) : (
                <TiltingContainer>
                    <button
                        className="bg-textBody hover:bg-textBody text-white rounded-lg p-2 w-full"
                        disabled={isLoading}
                        type="submit"
                    >
                        Join the beta
                    </button>
                </TiltingContainer>
            )}
            <p className="text-sm text-gray-500">
                We will only use your email address to send you the early access notification.
                Please{' '}
                <u>
                    <a href="mailto:gregoire@creastel.com">contact-us</a>
                </u>{' '}
                for any data deletion request.
            </p>
        </form>
    );
};
