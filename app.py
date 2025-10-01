from flask import Flask, jsonify
from scraper import scraper_gupy, scraper_infojob

JOB_SCRAPERS = {
    'gupy': scraper_gupy,
    'infojob': scraper_infojob,
}

app = Flask(__name__)

@app.route('/scrape/<job_company>/<name_job>')
def exec_scrap(name_job, job_company):
    print(f'Job search message received: {name_job} for company {job_company}')
    
    if job_company in JOB_SCRAPERS:
        scraper_function = JOB_SCRAPERS[job_company]
        data = scraper_function(name_job)
        return jsonify(data)
    else:
        return jsonify({
            'error:': 'Erro ao conectar ao serviço.',
            'avaliable_scrapers': list(JOB_SCRAPERS.keys())
        }), 404