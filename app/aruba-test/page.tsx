import ArubaChatRuntime from "@/components/ArubaAI/ArubaChatRuntime";

export default function ArubaTestPage() {
  return (
    <main className="min-h-screen bg-background p-4 text-foreground sm:p-8">
      <div className="mx-auto flex h-[85vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
        <header className="border-b border-border px-5 py-4">
          <p className="text-lg font-semibold">Aruba</p>
          <p className="text-sm text-muted-foreground">
            AI portfolio assistant · Test environment
          </p>
        </header>

        <div className="min-h-0 flex-1">
          <ArubaChatRuntime />
        </div>
      </div>
    </main>
  );
}
