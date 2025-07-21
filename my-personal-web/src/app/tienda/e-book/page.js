"use client"

export default function EbookPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-body text-foreground mb-6">Aprendizaje musical funcional</h1>
            <div className="flex flex:col md:flex-row items-center md:items-start gap-8" >
                {/*image*/}
                <img
                src="/ebook-mockup.png"
                alt="Mockup del ebook Aprendizaje musical"
                className="w-full max-w-xs rounded-shadow"
                />
            </div>
        </main>
    );
}