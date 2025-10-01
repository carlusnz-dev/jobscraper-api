import time
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup

# infojobs
def scraper_infojob(name_job):
    return print('scraper is infojob company')

# gupy.io
def scraper_gupy(name_job):
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Firefox(options=options)
    pag = 1
    vagas_encontradas = []
    
    while True:
        print(f'Buscando vagas na página {pag}')
        url = f'https://portal.gupy.io/en/job-search/term={name_job}?page={pag}'
        
        driver.get(url)
        time.sleep(2) # 2s para carregar a pag
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        lista_vagas = soup.find_all('a', class_='IKqnq') # o link que deve ser buscado
        
        if not lista_vagas:
            print('Fim das vagas. Encerrando busca...')
            break
        
        for vaga in lista_vagas:
            tag = vaga.find('h3')
            titulo = tag.text.strip()
            link = vaga['href']
            vagas_encontradas.append({'titulo': titulo, 'link': link})
        pag += 1
    driver.quit()
    
    return vagas_encontradas