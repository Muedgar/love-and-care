import React from 'react';


export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="news-layout">
            <main className="news-content">{children}</main>
            <footer className="news-footer">
                <p>&copy; {new Date().getFullYear()} Love and Care</p>
            </footer>
        </div>
    );
}