import AuthForm from '../components/AuthForm'

export default function SignUpPage() {
    return (
        <main className='min-h-screen flex items-center justify-center bg-gray-50'>
            <AuthForm type="signup" />
        </main>
    );
}