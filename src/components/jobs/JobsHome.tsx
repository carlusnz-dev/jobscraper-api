interface CardJob {
    id: number;
    name: string;
    companion: string;
    description: string[];
    link: string;
}

const cardJobsItems: CardJob[] = [];

export default function JobsHome() {
    const dateNow = new Date();
    const localizedDate = dateNow.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
    const localizedHour = dateNow.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="jobs-home container py-6 sm:py-12">
            <h1 className="w-fit text-4xl text-neutral-900 bg-white px-5 py-2">
                Vagas de empregos <span className="font-bold">recentes</span>
            </h1>
            <p className="lead my-2">
                Última atualização: {localizedDate} às {localizedHour}
            </p>

            {/* Card Job */}
        </div>
    );
}
