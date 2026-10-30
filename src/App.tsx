import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SYSTEM_META } from './data/navigation';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface font-body-md text-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        {/* Top telemetry protocol indicator */}
        <div className="hidden xl:flex items-center justify-between px-margin py-1 bg-surface-container-lowest border-b border-outline-variant/30 text-[11px] font-label-caps text-outline">
          <div className="flex items-center gap-space-xs text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>{SYSTEM_META.telemetry.nominalText}</span>
          </div>
          <div>{SYSTEM_META.challenge}</div>
          <div>{SYSTEM_META.telemetry.syncText}</div>
        </div>

        {/* Global application routes */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-full flex-1 flex flex-col items-center justify-center p-space-xl">
                <div className="max-w-[720px] text-center flex flex-col items-center gap-space-md">
                  <div className="px-space-md py-1 rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-widest">
                    {SYSTEM_META.protocol}
                  </div>
                  <h1 className="font-display-xl text-display-xl tracking-tight text-on-surface uppercase select-none">
                    {SYSTEM_META.appName}
                  </h1>
                  <p className="font-display-lg text-display-lg text-primary italic -mt-2">
                    The Architecture of a Mind.
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    “{SYSTEM_META.architect.manifesto}”
                  </p>
                  <div className="pt-space-md flex items-center gap-space-sm font-label-caps text-label-caps text-outline">
                    <span>ARCHITECT: {SYSTEM_META.architect.name}</span>
                    <span>•</span>
                    <span className="text-secondary">{SYSTEM_META.architect.role}</span>
                  </div>
                </div>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
