'use client';

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

import { Button } from '@/components/animate-ui/primitives/buttons/button';

const EMAIL = 'rizkiarbi65@gmail.com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject || 'Pesan dari Website',
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputClass =
    'w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm text-neutral-800 transition outline-none focus:border-teal-500 dark:border-neutral-700 dark:text-neutral-200 dark:focus:border-teal-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>
      <input
        type="text"
        placeholder="Subjek"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className={inputClass}
      />
      <textarea
        required
        rows={5}
        placeholder="Tulis pesan Anda..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${inputClass} resize-none`}
      />
      <Button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
        hoverScale={1.02}
        tapScale={0.97}
      >
        <FiSend size={16} />
        Kirim Pesan
      </Button>
    </form>
  );
};

export default ContactForm;
