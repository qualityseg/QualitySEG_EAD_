import os
import json

# Obter o caminho absoluto do diretório atual
diretorio_atual = os.path.dirname(os.path.abspath(__file__))

# Construir o caminho absoluto para o arquivo "cursos.json"
caminho_arquivo_json = os.path.join(diretorio_atual, 'cursos.json')

# Carregar o arquivo JSON
with open(caminho_arquivo_json, 'r', encoding='utf-8') as file:
    cursos = json.load(file)

# Listas de cursos sem preço e cursos do arquivo JSON
cursos_sem_preco = [
    "Jogo de Percepção de Riscos",
    "NR17 - Levantamento e Transporte Manual de Cargas",
    "NR17 - Teleatendimento",
    "Primeiros Socorros - Ênfase na Lei Lucas 13.722",
    "Simulador - Desafio dos EPIs - NR10",
    "Simulador - Preenchimento de APR",
    "Técnicas de Abandono de Área"
]

# Remover cursos sem preço do arquivo JSON
cursos = [curso for curso in cursos if curso['titulo'] not in cursos_sem_preco]

# Atualizar o valor de id de todos os cursos
for index, curso in enumerate(cursos):
    curso['id'] = index + 1

# Adicionar valor aos cursos da segunda lista
valor_adicionado = "R$ 129,90"
for curso in cursos:
    if curso['titulo'] in cursos_sem_preco:
        curso['valor'] = valor_adicionado

# Salvar as alterações de volta no arquivo JSON
with open('cursos.json', 'w') as file:
    json.dump(cursos, file, indent=4)
