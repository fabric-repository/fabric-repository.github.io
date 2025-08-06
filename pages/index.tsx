import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-mono">
    <header className="flex flex-col items-start justify-center px-6 py-12 md:py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Fabric
        </h1>
      </header>

      <section className="px-6 py-16 md:py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">What does AI governance look like in practice?</h2>
          <p className="text-lg max-w-3xl text-gray-600">
                To address this question, we release Fabric, a public repository of AI system deployments in a soon to be published AAAI/ACM AIES 2025 conference paper. 
                The initial AI use cases were collected through semi-structured interviews with AI practitioners, 
                where we learned about the AI workflows, levels of oversight, and co-designed diagrams of the AI workflows.          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Key Resources</h2>
          <p className="text-lg max-w-3xl text-gray-600">
                Research Paper (coming soon) <br />
                Project Blog (coming soon) <br />
                Policy Brief (coming soon) <br />

         </p>
        </div>
      </section>

      <footer className="px-6 py-12 bg-gray-50 text-center text-sm text-gray-500">
        <p>© 2025 Fabric Repository.</p>
      </footer>
    </div>
  );
}