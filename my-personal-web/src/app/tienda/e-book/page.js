"use client"

import Navbar from "@/app/components/Navbar";

export default function EbookPage() {
    return (
        <>
        <main className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32 mt-10">
            {/* Headline principal */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-body text-foreground mb-4">
                    ¿Te perdés en tu aprendizaje musical y no sabés si vas por buen camino?
                </h1>
                <div className="mt-6">
                    <h2 className="text-2xl md:text-3xl font-body text-foreground mb-2">Aprendizaje Musical Funcional</h2>
                    <p className="text-lg text-foreground/80 italic">Guía para Autodidactas</p>
                </div>
            </div>

            {/* Sección imagen + descripción inicial */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
                <div className="flex-shrink-0">
                    <img
                        src="/ebook-mockup.png"
                        alt="Mockup del ebook Aprendizaje musical"
                        className="max-w-xs w-full h-auto object-contain rounded-xl shadow-lg"

                    />
                </div>

                <div className="font-body text-foreground">
                    <div className="mb-8">
                        <p className="mb-4">
                            Aprender música por tu cuenta puede ser emocionante… pero también confuso sin
                             una dirección clara entre tanto contenido disponible.
                        </p>
                        <p className="mb-4">
                            Este e-book te ayuda a organizar tu proceso, basándote en lo que vos necesitás, 
                            con lo que ya tenés y al ritmo que puedas.
                        </p>
                    </div>

                    {/* Precio y CTA */}
                    <div className="pt-6">
                        <p className="text-2xl font-body text-foreground mb-4">$9.99 USD</p>
                        <button
                            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg font-body w-full md:w-auto"
                            onClick={() => alert('Compra proximamente')}
                        >
                            Comprar e-book ahora
                        </button>
                    </div>
                </div>
            </div>

            {/* contenido centrado - ancho completo */}
            <div className="max-w-4xl mx-auto">
                
                {/* Beneficios detallados */}
                <div className="mb-16">
                    <h3 className="text-2xl font-body mb-8 text-center">✅ Lo que vas a lograr:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                🎯 <span>Decisiones con Sentido</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Dejá de saltar de tutorial en tutorial sin rumbo</li>
                                <li>Armá tu propio plan de estudio personalizado</li>
                                <li>Priorizá lo que realmente necesitás aprender ahora</li>
                            </ul>
                        </div>
                        
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                🎵 <span>Enfoque Efectivo</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Identificá qué elementos estudiar primero en cada canción</li>
                                <li>Organizá tu práctica para obtener resultados más rápido</li>
                                <li>Evitá perderte en detalles que no son prioritarios ahora</li>
                            </ul>
                        </div>
                        
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                🧠 <span>Recursos Inteligentes</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Aprovechá al máximo el tiempo que tenés disponible</li>
                                <li>Convertí cualquier canción en tu material de estudio</li>
                                <li>Usá la tecnología a tu favor, no en tu contra</li>
                            </ul>
                        </div>
                        
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                💪 <span>Motivación Sostenible</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Manejá las expectativas de forma realista</li>
                                <li>Celebrá tus avances aunque sean pequeños</li>
                                <li>Mantenete motivado/a en los momentos difíciles</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sección de calificación */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-16">
                    <h3 className="text-2xl font-body mb-6 text-center">Este e-book es para vos si:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-body text-xl">✓</span>
                            <span>Aprendés música por tu cuenta</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-bodi text-xl">✓</span>
                            <span>Te sentís perdido/a entre tanta información</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-body text-xl">✓</span>
                            <span>Querés un método que se adapte a tu ritmo</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-body text-xl">✓</span>
                            <span>Necesitás organizar tu proceso de aprendizaje</span>
                        </div>
                    </div>
                </div>

                {/* CTA central */}
                <div className="text-center mb-16">
                    <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
                        <p className="text-3xl font-body text-foreground mb-6">$9.99 USD</p>
                        <button
                            className="bg-primary text-white px-12 py-4 rounded-lg hover:bg-primary-dark transition text-xl font-body shadow-lg"
                            onClick={() => alert('Compra proximamente')}
                        >
                            Comprar e-book ahora
                        </button>
                    </div>
                </div>

                {/* Mención del workbook */}
                <div className="bg-gradient-to-r from-foreground/5 to-transparent border-l-4 border-primary rounded-r-xl p-8 mb-12">
                    <h3 className="text-xl font-body mb-3">¿Querés llevar tu aprendizaje un paso más allá?</h3>
                    <p className="text-foreground/90 mb-4">
                        Si querés profundizar y aplicar con más ejercicios, también está disponible un {' '}
                        <strong>Workbook con ejercicios específicos</strong> que complementa perfectamente esta guía. 
                    </p>
                    <a href="#" className="text-primary hover:underline font-medium text-lg">
                        Conocé el Workbook aquí →
                    </a>
                </div>

                {/* P.S. final */}
                <div className="text-center bg-foreground/5 rounded-xl p-6">
                    <p className="text-foreground/80 italic text-lg">
                        <strong>P.S.</strong> La música no tiene que ser complicada. Con el enfoque correcto, 
                        podés disfrutar del proceso desde el primer día y ver resultados reales en tu aprendizaje.
                    </p>
                </div>
            </div>
        </main>
        <Navbar />
        </>
    );
}