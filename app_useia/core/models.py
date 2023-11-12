from django.db import models
from django.http import JsonResponse
from django.views.decorators.http import require_GET
import random 
import json
#from core.models import Sensor 
#from .models import LeituraSensorNivel


# Create your models here./Entidades
class Pessoa(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    

class Formula(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Empregado(models.Model):
    nome = models.CharField(max_length=150)
    cargo = models.CharField(max_length=150)
    setor = models.CharField(max_length=150)
    data_inicio = models.DateField()

    def __str__(self):
        return self.name

class Usina(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Produto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Secador(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Silo_Armazenagem1(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Silo_Armazenagem2(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Silo_Armazenagem3(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Silo_Armazenagem4(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Pesagem(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Elevador2(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Moega1(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Misturador(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Silo_Produto_Acabado(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Silo_de_Combustivel(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Alimentacao_Asfalto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
    
class Sistema_Aditivo(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome

class Esteira(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    conteudo = models.TextField()

    def __str__(self):
        return self.nome
#USIPAV/Entidades
#Moegas
#Secador de Agregados
#Sistema de Pesagem
#Misturador
#Silo de Armazenamento de Mistura Pronta
#Sistema de Alimentação de Asfalto
#Sistema de Abastecimento de Combustível
#Sistema de Aditivos
#Elevador
#Esteira
#Sensor de Nível
#Sensor de Peso
#Sensor de Temperatura
#Célula de Carga
#Sensor de Fluxo
#Sensor de Velocidade


class Registro(models.Model):
    # mongo_id = models.BigIntegerField()
    timestamp = models.DateTimeField(null=True)
    company_id = models.CharField(max_length=128, null=True)
    machine_id = models.CharField(max_length=128, null=True)
    sensor_id = models.CharField(max_length=128, null=True)
    value = models.FloatField(null=True)

def previsao_do_tempo(request):
    
    temperatura = obter_temperatura()
    descricao = obter_descricao()

    contexto = {'temperatura': temperatura, 'descricao': descricao}

    return render(request, 'caminho_do_template/previsao_do_tempo.html', contexto)

class Sensor(models.Model):
    nome = models.CharField(max_length=255)

class LeituraSensorNivel(models.Model):
    tempo = models.DateTimeField()
    valor = models.FloatField()

def grafico_sensor_s01(request):
    registros = Registro.objects.filter(sensor_id='S01').order_by('timestamp')
    dados = {
        'labels': [registro.timestamp.strftime("%Y-%m-%d %H:%M:%S") for registro in registros],
        'values': [registro.value for registro in registros]
    }
    return render(request, 'core/grafico_sensor_s01.html', {'dados': json.dumps(dados)})

def grafico_sensor_s04(request):
    registros = Registro.objects.filter(sensor_id='S04').order_by('timestamp')
    dados = {
        'labels': [registro.timestamp.strftime("%Y-%m-%d %H:%M:%S") for registro in registros],
        'values': [registro.value for registro in registros]
    }
    return render(request, 'core/grafico_sensor_s04.html', {'dados': json.dumps(dados)})