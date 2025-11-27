import ButtonComponent from "@/components/button/Button";
import JobsHome from "@/components/jobs/JobsHome";

export default function Home() {
    return (
        <main className="container px-8 sm:px-0">
            <section
                id="titleSect"
                className="min-h-screen flex flex-col items-center justify-center py-5 sm:py-12 gap-y-8 sm:gap-y-0 text-center"
            >
                <span className="px-5 py-2 border-2 border-zinc-600/50 rounded-full">
                    Uma aplicação web para procurar empregos +
                </span>

                <h1 className="my-3 sm:my-6 text-5xl sm:text-8xl font-bold">
                    JobScraper API
                </h1>
                <h3 className="mb-3 text-2xl font-light">
                    Aqui você acha, organiza e consegue sua vaga de emprego
                </h3>
                <span className="hidden sm:block px-3 py-1 text-zinc-900 bg-zinc-100 rounded-full">
                    Gupys.io, InfoJobs e (outros)
                </span>

                <div className="flex space-x-3 mt-12 sm:mt-16">
                    <ButtonComponent
                        variant="primary"
                        className="px-5 py-2 hover:px-8"
                    >
                        Saiba mais
                    </ButtonComponent>
                    <ButtonComponent
                        variant="secondary"
                        className="hidden sm:block px-5 py-2 hover:px-8"
                    >
                        Ver vagas existentes
                    </ButtonComponent>
                </div>
                <p className="mt-2 text-sm text-white/30">
                    Aqui, tudo organizado e catalogado para você.
                </p>
            </section>

            {/* Jobs */}
            <JobsHome />
        </main>
    );
}
