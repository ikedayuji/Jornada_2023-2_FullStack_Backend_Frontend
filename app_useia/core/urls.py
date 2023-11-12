from django.contrib import admin
from django.urls import path, include
from .views import home, salvar, editar, update, delete
from . import views
#adicionado para comunicar com React
from django.conf import settings
from django.conf.urls.static import static
from .views import previsao_do_tempo
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET
from core import views




urlpatterns = [
    path('', home),
    path('salvar/', salvar, name= "salvar"),
    path('editar/<int:id>', editar, name= "editar"),
    path('update/<int:id>', update, name= "update"),
    path('delete/<int:id>', delete, name= "delete"),
    path('previsao_do_tempo/', views.previsao_do_tempo, name='previsao_do_tempo'),
    path('cadastrar-formula/', views.cadastrar_formula, name='cadastrar_formula'),
    path('listar-formulas/', views.listar_formulas, name='listar_formulas'),
    path('graficos/', views.get_docs_from_mongo, name='get_mongo'), 
    path('sensors04/', views.grafico_sensor_s04, name='grafico_sensor_s04'),
    path('grafico-sensor-s01/', views.grafico_sensor_s01, name='grafico_sensor_s01'),
    path('grafico-sensor-s04/', views.grafico_sensor_s04, name='grafico_sensor_s04'),
]

#adicionado para comunicação 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
#fims