"use client"

import Navbar from "@/app/components/Navbar";

export default function EbookPage() {
    return (
        <>
        <main className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32 mt-10">
            {/* Headline principal */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-body text-foreground mb-4">
                    El cuaderno de trabajo que te ayudará a estructurar tu aprendizaje autodidacta paso a paso
                </h1>
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
                            Este workbook es la herramienta práctica que te acompaña para planificar, registrar y 
                            reflexionar sobre tu práctica musical día a día.
                            Con espacios diseñados para que personalices tu rutina, midas tu progreso y mantengas 
                            el foco en tus objetivos.
                        </p>

                        <p className="mb-4">
                            Como músic@s autodidactas, necesitamos:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-foreground/90">
                            <li>Un lugar donde organizar nuestros objetivos musicales</li>
                            <li>Herramientas para planificar nuestra práctica diaria</li>
                            <li>Espacios para reflexionar sobre nuestro progreso</li>
                            <li>Ejercicios que nos mantengan enfocad@s</li>
                        </ul>    
                    </div>

                    {/* Precio y CTA */}
                    <div className="pt-6">
                        <p className="text-2xl font-body text-foreground mb-4">$9.99 USD</p>
                        <button
                            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg font-body w-full md:w-auto"
                            onClick={() => alert('Compra proximamente')}
                        >
                            Comprar Workbook ahora
                        </button>
                    </div>
                </div>
            </div>

            {/* contenido centrado - ancho completo */}
            <div className="max-w-4xl mx-auto">
                
                {/* Beneficios detallados */}
                <div className="mb-16">
                    <h3 className="text-2xl font-body mb-8 text-center">✅ Lo que encontrarás dentro:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                🎯 <span>Autoconocimiento musical</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Diario de Motivación: Ejercicios para conectar con tu "por qué"</li>
                                <li>Perfil del estudiante: Identifica tu estilo de aprendizaje único</li>
                                <li>Diagnóstico de desafíos: Reconoce qué te está frenando realmente</li>
                            </ul>
                        </div>
                        
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                📋 <span>Planificación estratégica</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Plantillas para metas SMART: Espacios estructurados para definir objetivos claros</li>
                                <li>Ejercicios de enfoque: Aprende a concentrarte en el proceso, no solo en los resultado</li>
                                <li>Ejemplos aplicados: Casos prácticos para diferentes tipos de objetivos musicales</li>
                            </ul>
                        </div>
                        
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                🔍 <span>Organización de la práctica</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Autoevaluación de tu práctica actual: Diagnóstico honesto de cómo practicas hoy</li>
                                <li>Los 4 pilares fundamentales: Framework simple para estructurar cualquier sesión</li>
                                <li>Ejercicios de aplicación: Plantillas para aplicar estos pilares a tus metas</li>
                            </ul>
                        </div>
                        
                        <div className="bg-foreground/5 rounded-xl p-6">
                            <h4 className="font-body text-lg mb-3 flex items-center gap-2">
                                📅 <span>Planificación y seguimiento</span>
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>Diseñador de rutinas semanales: Plantillas para organizar tu tiempo de práctica</li>
                                <li>Calendarios de seguimiento: Herramientas visuales para mantener la constancia</li>
                                <li>Planes de sostenibilidad: Estrategias para mantener tu práctica a largo plazo</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sección de calificación */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-16">
                    <h3 className="text-2xl font-body mb-6 text-center">Este Workbook es para vos si:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-body text-xl">✓</span>
                            <span>Querés una forma concreta de organizar tu estudio musical</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-bodi text-xl">✓</span>
                            <span>Te cuesta convertir lo que aprendés en una práctica constante</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-body text-xl">✓</span>
                            <span>Necesitás un plan que puedas adaptar a tu propio proceso</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 font-body text-xl">✓</span>
                            <span>Querés claridad para saber qué practicar y cuándo</span>
                        </div>
                    </div>
                </div>

                {/* Mención del workbook */}
                <div className="bg-gradient-to-r from-foreground/5 to-transparent border-l-4 border-primary rounded-r-xl p-8 mb-12">
                    <h3 className="text-xl font-body mb-3">Formato y acceso</h3>
                    <ul className="list-style: none; padding-left: 0;">
                        <li><span className="text-green-600">✓</span> PDF digital editable – completalo directamente desde tu dispositivo</li>
                        <li><span className="text-green-600">✓</span> Acceso inmediato después de la compra</li>
                        <li><span className="text-green-600">✓</span> Opcional para imprimir – si preferís trabajar a mano</li>
                        <li><span className="text-green-600">✓</span> No requiere apps externas – solo un lector de PDF</li>
                    </ul>
                </div>
                {/* CTA central */}
                <div className="text-center mb-16">
                    <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
                        <p className="text-3xl font-body text-foreground mb-6">$9.99 USD</p>
                        <button
                            className="bg-primary text-white px-12 py-4 rounded-lg hover:bg-primary-dark transition text-xl font-body shadow-lg"
                            onClick={() => alert('Compra proximamente')}
                        >
                            Comprar Workbook ahora
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <Navbar />
        </>
    );
}