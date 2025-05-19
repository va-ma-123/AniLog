"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Input from './Input';

interface AuthFormProps {
    type: 'login' | 'signup';
}


export default function AuthForm({ type }: AuthFormProps) {
    const router = useRouter();
    const [form, setForm] = useState({ email: '', password: ''});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try{
            if (type === 'signup') {
                router.push('/login')
            } else {
                router.push('/')
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto mt-12'>
            <h2 className='text-2xl font-bold mb-6 text-center capitalize'>
                {type === 'signup' ? 'Sign up' : 'Log in'}
            </h2>
            <Input 
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <Input 
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <button
                type='submit'
                disabled={loading}
                className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4 disabled:opacity-50'
            >
                {loading ? 'Processing...' : type === 'login' ? 'Login' : 'Sign Up'}
            </button>
        </form>
    );
}