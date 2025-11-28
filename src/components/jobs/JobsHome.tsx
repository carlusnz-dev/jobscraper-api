import ButtonComponent from "../button/Button";
import Link from "next/link";

interface CardJob {
    id: number;
    name: string;
    companion: string;
    description: string[];
    link: string;
}

const cardJobsItems: CardJob[] = [
    {
        id: 1,
        name: "Desenvolvedor Front-end (React/TypeScript)",
        companion: "Remoto · CLT · Pleno",
        description: [
            "Desenvolvimento de interfaces com React e TypeScript",
            "Integração com APIs REST/GraphQL",
            "Testes unitários e revisão de código",
        ],
        link: "https://jobs.example.com/frontend-react-ts",
    },
    {
        id: 2,
        name: "Backend Engineer (Node.js)",
        companion: "Híbrido · PJ · Sênior",
        description: [
            "Criação de microserviços em Node.js/Express",
            "Modelagem de banco de dados SQL/NoSQL",
            "Automatização de deploys e monitoração",
        ],
        link: "https://jobs.example.com/backend-nodejs",
    },
    {
        id: 3,
        name: "Engenheiro(a) de Dados",
        companion: "Remoto · CLT · Pleno",
        description: [
            "ETL e pipelines com Airflow/DBT",
            "Modelagem e otimização de data warehouse",
            "Trabalho com Snowflake/BigQuery",
        ],
        link: "https://jobs.example.com/data-engineer",
    },
    {
        id: 4,
        name: "DevOps / SRE",
        companion: "Híbrido · PJ · Sênior",
        description: [
            "Infraestrutura em AWS (IaC com Terraform)",
            "CI/CD, monitoramento e resposta a incidentes",
            "Automatização e melhoria de processos",
        ],
        link: "https://jobs.example.com/devops-sre",
    },
    {
        id: 5,
        name: "Estágio em QA (Automação)",
        companion: "Presencial · Estágio · Júnior",
        description: [
            "Escrita de testes automatizados (Selenium/Cypress)",
            "Validação de funcionalidades e regressões",
            "Colaboração com times de produto e dev",
        ],
        link: "https://jobs.example.com/estagio-qa",
    },
    {
        id: 6,
        name: "Estágio em QA (Automação)",
        companion: "Presencial · Estágio · Júnior",
        description: [
            "Escrita de testes automatizados (Selenium/Cypress)",
            "Validação de funcionalidades e regressões",
            "Colaboração com times de produto e dev",
        ],
        link: "https://jobs.example.com/estagio-qa",
    },
];

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
        <div className="jobs-home container sm:px-8 lg:px-0 py-6 sm:py-12">
            <h1 className="w-fit text-2xl sm:text-4xl text-neutral-900 bg-white px-5 py-2">
                Vagas de empregos <span className="font-bold">recentes</span>
            </h1>
            <p className="lead my-2">
                Última atualização: {localizedDate} às {localizedHour}
            </p>

            {/* Card Job */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mt-12 sm:mt-16">
                {cardJobsItems &&
                    cardJobsItems.map((item) => (
                        <div
                            className="h-full sm:min-h-[300px] flex flex-col items-start p-8 sm:p-6 border border-neutral-100/30 rounded-2xl hover:rounded-none hover:border-2 hover:border-white transition-all"
                            key={item.id}
                        >
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                            <p className="lead">{item.companion}</p>

                            <p className="my-4 text-lg text-neutral-200">
                                {item.description}
                            </p>

                            <ButtonComponent
                                variant="primary"
                                className="mt-auto px-3 py-2"
                            >
                                <Link href={`/job/${item.id}`}>Ver mais</Link>
                            </ButtonComponent>
                        </div>
                    ))}
            </div>
        </div>
    );
}
