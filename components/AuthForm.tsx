"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Input from './Input';
import { useAuth } from '@/lib/context/AuthContext';

interface AuthFormProps {
    type: 'login' | 'signup';
}


export default function AuthForm({ type }: AuthFormProps) {
    const router = useRouter();
    const { login, register } = useAuth();
    const [form, setForm] = useState({ username: '', email: '', password: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try{
            if (type === 'signup') {
                if (!form.username) {
                    setError('Username is required');
                    setLoading(false);
                    return;
                }
                const success = await register(form.username, form.email, form.password);
                if(success) {
                    router.push('/');
                } else {
                    setError('Registration failed. Please try again.');
                }
            } else {
                const success = await login(form.email, form.password);
                if (success) {
                    router.push('/');
                } else {
                    setError('Invalid email or password. Login failed.');
                }
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto mt-12'>
            <h2 className='text-2xl font-bold mb-6 text-center capitalize'>
                {type === 'signup' ? 'Sign up' : 'Log in'}
            </h2>

            {type === 'signup' && (
                <Input 
                    label='Username'
                    name="username"
                    type='text'
                    value={form.username}
                    onChange={handleChange}
                    required
                />
            )}

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

            {error && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                    {error}
                </div>
            )}

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