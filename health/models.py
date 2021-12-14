from django.db import models
from django.db.models.base import Model

# Create your models here.

class AtoZMedicine(models.Model):
    Cat = models.CharField(max_length=5, default='A')
    mPhoto = models.ImageField(upload_to='medicine/')
    mName = models.TextField()
    mSell = models.TextField()
    mMrp = models.TextField()
    mUses = models.TextField()
    mAlter = models.TextField(default="")
    mSideEffect = models.TextField()
    mHowtoUse = models.TextField()
    mCount = models.TextField(default="")
    cName = models.TextField(default="")
    def __str__(self):
        return self.mName
    
class Products(models.Model):
    PcImage = models.ImageField(upload_to='Products/')
    PcName = models.TextField()
    def __str__(self):
        return self.PcName

class BeautyCare(models.Model):
    BcImage = models.ImageField(upload_to='Products/')
    BcName = models.TextField()
    def __str__(self):
        return self.BcName

class AllProducts(models.Model):
    APCat = models.TextField()
    APImage = models.ImageField(upload_to='AllProducts/')
    APName = models.TextField()
    APDetails = models.TextField()
    APPrice = models.TextField()
    def __str__(self):
        return self.APName
    
# MensCare
# Gillette India Ltd