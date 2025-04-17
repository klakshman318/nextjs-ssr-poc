import '@/app/globals.css';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import { LoadingProvider } from '@/context/LoadingContext';

export const metadata: Metadata = {
  title: 'Next.js SSR POC App',
  description: 'Test SSR and Suspense Render',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <LoadingProvider>
          <Layout>
            {children}
          </Layout>
        </LoadingProvider>
      </body>
    </html>
  );
}
