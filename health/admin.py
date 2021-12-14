from django.contrib import admin
from .models  import AtoZMedicine, Products,BeautyCare, AllProducts

# Register your models here.

admin.site.register(AtoZMedicine)
admin.site.register(Products)
admin.site.register(BeautyCare)
admin.site.register(AllProducts)

