from flask import Flask, jsonify
from scraper import search_all_jobs_gupy

app = Flask(__name__)

# routes
@app.route("/scraper/<job_name>")
def scraper_job(job_name):
    jobs, total_pages = search_all_jobs_gupy(job_name)
    return jsonify(jobs)

if __name__ == "__main__":
    app.run(debug=True)