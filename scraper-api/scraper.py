from playwright.sync_api import sync_playwright, expect
from bs4 import BeautifulSoup
from time import sleep

# job_name = input('Qual o nome do emprego que busca?\n')

def search_all_jobs_gupy(job_name):
    base_url = f'https://portal.gupy.io/job-search/term={job_name}'
    
    # Mount page
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=50)
        page = browser.new_page()
        page.goto(f'{base_url}?page=1')
        current_page = 1
        jobs_list = []
        
        while True:
            try:
                page.wait_for_selector('ul.biBubC', timeout=5000)
            except:
                print('Não há a lista de empregos na página HTML construída')
                break
            
            # Soup
            list_jobs_html = page.inner_html('ul.biBubC')
            soup_job = BeautifulSoup(list_jobs_html, 'html.parser')
            jobs = soup_job.find_all('li')
            
            if not jobs:
                print('Não há empregos disponíveis')
                break
            
            for job in jobs:
                try:
                    new_job = {}
                    title = job.find('h3').text.strip()
                    companion = job.find('p', 'eJcDNr').text.strip()
                    link = job.find('a', 'IKqnq')['href']
                    desc = job.find_all('span', 'cezNaf')
                    new_desc = []
                        
                    for item in desc:
                        new_desc.append(item.text.strip())
                        
                    new_job['name_job'] = title
                    new_job['companion'] = companion
                    new_job['link'] = link
                    new_job['description'] = new_desc
                    jobs_list.append(new_job)
                except Exception as e:
                    print(f'Erro ao processar os dados: {e}')
                    continue
            
            page.wait_for_timeout(1000)
            next_page_btn = page.get_by_role('button', name='Próxima página')
            if not next_page_btn.is_visible():
                print(f'Botão invisível, encerrando.')
                break
            if next_page_btn.is_disabled():
                print("Botão desabilitado (fim da lista). Encerrando.")
                break
            
            try:
                next_page = current_page + 1
                expected_url = f'page={next_page}'
                next_page_btn.click()
                page.wait_for_url(f"**{expected_url}", timeout=10000)
                current_page += 1
            except Exception:
                print('Botão inclicável, encerrando')
                break
            
        browser.close()
        return jobs_list, current_page
                
        

if __name__ == '__main__':
    name_job = input('Digite o nome do emprego: ')
    jobs_search, pages_acessed = search_all_jobs_gupy(name_job)

    for job in jobs_search:
        print('\n\n-------------------------------')
        print(f'name - {job["name_job"]}')
        print(f'companion - {job["companion"]}')
        print(f'link - {job["link"]}')
        
        for i, item in enumerate(job["description"]):
            print(f'{i+1} - {item.text.strip()}')
        print('-------------------------------')
        
    print(f'\n\n\ntotal de empregos achados: {len(jobs_search)}\npáginas acessadas: {pages_acessed}')