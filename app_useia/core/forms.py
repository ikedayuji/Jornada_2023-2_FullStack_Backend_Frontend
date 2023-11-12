from django import forms
from .models import Formula

class FormulaForm(forms.ModelForm):
    class Meta:
        model = Formula
        fields = ['nome', 'descricao', 'conteudo']


