import React, { useState } from 'react';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            // Replace with your API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage('If an account with that email exists, a reset link has been sent.');
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                    style={{ width: '100%', padding: 8, margin: '8px 0 16px 0', boxSizing: 'border-box' }}
                />
                <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
            {message && <div style={{ marginTop: 16 }}>{message}</div>}
        </div>
    );
};

export default ResetPassword;
