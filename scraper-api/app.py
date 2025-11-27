from flask import Flask, jsonify, send_from_directory
from scraper import search_all_jobs_gupy
import os, json

api = Flask(__name__)
DIRECTORY = "/home/carlosantunes/Projetos/jobscraperapi/scraper-api/files"

# routes
@api.route("/files", methods=["GET"])
def get_files():
    files = []
    
    for file in os.listdir(DIRECTORY):
        file_url = os.path.join(DIRECTORY, file)    
        if os.path.isfile(file_url):
            files.append(file)
    
    return jsonify(files), 201

@api.route("/files/<file_name>", methods=["GET"])
def get_file(file_name):
    return send_from_directory(DIRECTORY, file_name), 201

@api.route("/scraper-gupy/<job_name>")
def scraper_job_gupy(job_name):
    jobs_file, total_pages = search_all_jobs_gupy(job_name)
    with open(os.path.join(DIRECTORY, f'{job_name}.json '), 'w', encoding='utf-8') as f:
        json.dump(jobs_file, f, ensure_ascii=False, indent=4)
    
    print('Arquivos salvos com sucesso!')
    return jsonify(jobs_file), 201
    

if __name__ == "__main__":
    api.run(debug=True)