# JobScraper Web & Desktop (Job Aggregator) - Em desenvolvimento

## Visão geral
JobScraper centraliza buscas de vagas (Gupy, InfoJobs, etc.) e retorna resultados em JSON. Dois componentes: API (scraping + processamento) e app desktop (consome a API).

## Estrutura
- **jobscraper-back** — Backend (Flask + Selenium)
- **jobscraper-front** — Frontend Desktop (Angular + Electron)
- **Banco:** PostgreSQL (via Docker)

## Tecnologias
- **Backend:** Python, Flask, Selenium
- **Frontend:** Angular, Electron
- **DB:** PostgreSQL (Docker)

## Como executar (mínimo)
1. **Banco (via Docker)**
```bash
docker run --name jobscraper-postgres -e POSTGRES_PASSWORD=SEU_PASSWORD -p 5432:5432 -d postgres:latest
```

2. **API (backend)**
```bash
cd jobscraper-back/
pip install -r requiriments.txt
python app.py
``` 

3. **App Desktop (frontend)** 
```bash
# O Electron nao foi construído, então rode o Angular direto.
cd jobscraper-front/
# npm ci
# npm run electron-start
ng serve
```

## Endpoint principal
```php-templates
GET /scrape/scraper_<sites>/<termo>
```

Exemplo -> ``` curl "http://localhost:5000/scrape/scraper_gupy/desenvolvedor%20backend" ```

## Observações
- Configure variáveis de ambiente (PORT, DATABASE_URL) conforme o necessário
- Use venv para o backend se desejar isolamento

## Licença
Licenciado sob MIT. Mantenha o aviso de copyright no arquivo **LICENSE**
