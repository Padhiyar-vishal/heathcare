from django import forms
from django.db.models import fields
from .models import *

class Addmd(forms.ModelForm):
    class Meta:
        model = AtoZMedicine
        fields = ['Cat', 'mPhoto', 'mName', 'mSell', 'mMrp', 'mUses', 'mAlter', 'mSideEffect', 'mHowtoUse', 'mCount', 'cName']