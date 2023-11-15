from django.shortcuts import render, redirect
from .models import Pessoa
import requests
from .models import Formula, Registro
from .forms import FormulaForm
from django.http import JsonResponse
import random
import json

#login
from django.http import HttpResponse, HttpResponseRedirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
import pymongo
import certifi

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.mixins import LoginRequiredMixin
#sensor
from rest_framework import generics
from .models import Sensor

def home(request):
    pessoas = Pessoa.objects.all()
    return render(request, "index.html", {"pessoas": pessoas})

def salvar(request):
    vnome = request.POST.get("nome")
    Pessoa.objects.create(nome=vnome)
    pessoas = Pessoa.objects.all()
    return render(request, "index.html", {"pessoas": pessoas})

def editar(request, id):
    pessoa = Pessoa.objects.get(id=id)
    return render(request, "update.html", {"pessoa": pessoa})

def update(request, id):
    vnome = request.POST.get("nome")
    pessoa = Pessoa.objects.get(id=id)
    pessoa.nome = vnome
    pessoa.save()
    return redirect(home)

def delete(request, id):
    pessoa = Pessoa.objects.get(id=id)
    pessoa.delete()
    return redirect(home)


#codigo adicionado para previsão do tempo
def previsao_do_tempo(request):
    api_key = '8c7279779fb440ace1e2776f3e35d887'
    cidade = 'Londrina'
    unidade = 'metric'  # Celsius
    url = f'http://api.openweathermap.org/data/2.5/weather?q={cidade}&units={unidade}&appid={api_key}'

    response = requests.get(url)
    data = response.json()

    if response.status_code == 200:
        temperatura = data['main']['temp']
        descricao = data['weather'][0]['description']
    else:
        temperatura = 'N/A'
        descricao = 'N/A'

    context = {
        'temperatura': temperatura,
        'descricao': descricao,
    }
    return render(request, 'meu_app/previsao_do_tempo.html', context)
# termina aqui


#view formulário cadastrar_formula
def cadastrar_formula(request):
    if request.method == 'POST':
        form = FormulaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_formulas')
    else:
        form = FormulaForm()
    return render(request, 'app_useia/formulario_formula.html', {'form': form})

def listar_formulas(request):
    formulas = Formula.objects.all()
    return render(request, 'app_useia/lista_formulas.html', {'formulas': formulas})
#termina aqui


#tela de login
#class Index(LoginRequerido, View):
#    template = 'index.html'
#    login_url = '/login/'
#    
#    def get(self, request):
#        empregados = empregados.objects.all()
#        return render(request, self.template, {'empregados': empregados})


class Login(View):
    template = 'login.html'
    
    def get(self, request):
        form = AutenticacaoForm()
        return render(request, self.template, {'form': form})

    def post(self, request):
        form = AutenticacaoForm(request.POST)
        username = request.POST['username']
        password = request.POST['password']
        user = autenticado(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/')
        else:
            return render(request, self.template, {'form': form})
        
def get_docs_from_mongo(request):
    client = pymongo.MongoClient('mongodb+srv://classe:senai123@cluster0.hpvcvwz.mongodb.net/', tlsCAFile=certifi.where())
    
    dbname = client['therocks']
    collection = dbname['sensor_data']

    data = {
        "Sensor 1": [],
        "Sensor 2": [],
        "Sensor 3": [],
        "Sensor 4": [],
        "Sensor 5": [],
        "Sensor 6": [],
    }

    for document in collection.find():
        if document.get('Value') == 'YourSensorValue' or document.get('Value') is None:
            value = None
        else:
            value = document['Value']
        
        reg = Registro(
            timestamp=document.get('timestamp'),
            company_id=document.get('CompanyId'),
            machine_id=document.get('MachineId'),
            sensor_id=document.get('SensorId'),
            value=value
        )
        reg.save()

        # Convertendo para minúsculas
        sensor_id = f"sensor{document.get('SensorId')}".lower()
        data[sensor_id].append({
            "timestamp": document.get('timestamp'),
            "company_id": document.get('CompanyId'),
            "machine_id": document.get('MachineId'),
            "sensor_id": document.get('SensorId'),
            "value": value
        })

    client.close()

    return JsonResponse(data, safe=False)


def get_sensor_data(request):
    data = []
    registros = Registro.objects.all()

    for registro in registros:
        data.append({
            'timestamp': registro.timestamp,
            'company_id': registro.company_id,
            'machine_id': registro.machine_id,
            'sensor_id': registro.sensor_id,
            'value': registro.value,
        })

    return JsonResponse({'data': data})

from django.db.models import Q

def grafico_sensores(request):
    # Filtra registros para os sensores S01 a S06
    registros = Registro.objects.filter(
        Q(sensor_id='S01') | Q(sensor_id='S02') | Q(sensor_id='S03') |
        Q(sensor_id='S04') | Q(sensor_id='S05') | Q(sensor_id='S06')
    ).order_by('timestamp')

    # Estruturação dos dados
    data = {}
    for sensor_id in ['S01', 'S02', 'S03', 'S04', 'S05', 'S06']:
        data[sensor_id] = {
            'labels': [],
            'values': [],
        }

    for registro in registros:
        sensor_id = registro.sensor_id
        data[sensor_id]['labels'].append(registro.timestamp.strftime("%Y-%m-%d %H:%M:%S"))
        data[sensor_id]['values'].append(registro.value)

    # Retorna os dados estruturados para cada sensor
    return JsonResponse(data)

