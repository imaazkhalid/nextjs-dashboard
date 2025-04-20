import SignupForm from '@/app/ui/signup-form';
import AcmeLogo from '../ui/acme-logo';
import { Suspense } from 'react';

export default function SignupPage() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>
                <Suspense>
                    <SignupForm />
                </Suspense>
            </div>
        </main>
    );
}