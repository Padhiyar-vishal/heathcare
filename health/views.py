from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from .models import AtoZMedicine,Products,BeautyCare, AllProducts
from math import ceil
from .form import Addmd
from django.contrib.auth.models import User, auth

# Create your views here.

def index(request):
    personalCare = Products.objects.all()
    Beautycare = BeautyCare.objects.all()
    allItem = {'personalCare':personalCare, 'Beautycare':Beautycare}
    return render(request, 'homepage.html',allItem)

def login(request):
    if request.method == 'POST':
        emailId = request.POST['uemail']
        pass1 = request.POST['upassword']

        user = auth.authenticate(username = emailId, password = pass1)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            return HttpResponse("not found")

def signUp(request):
    if request.method == 'POST':
        userName = request.POST['email']
        firstName = request.POST['fname']
        lastName = request.POST['lname']
        emailId = request.POST['email']
        pass1 = request.POST['password1']
        pass2 = request.POST['password2']

        if pass1 == pass2:
            huser = User.objects.create_user(userName, emailId, pass1)
            huser.first_name = firstName
            huser.last_name = lastName
            huser.save()
            return redirect('/')
def logout(request):
    auth.logout(request)
    return redirect('/')
        
def allMedicine(request):
    
    medicine = AtoZMedicine.objects.all().order_by('mName')
    return render(request, 'medicines.html', {'medicine':medicine})

def buymedicine(request, myid):
    medicine = AtoZMedicine.objects.filter(id=myid)
    print(medicine)
    return render(request, 'buymd.html', {'medicine':medicine})

def docterCon(request):
    return render(request, "dcon.html")

def doctorcon(request):
    return render(request, "dcc.html")

def productItems(request, prdname):
    allprod = AllProducts.objects.filter(APCat=prdname)
    return render(request, 'prd.html', {'allpord': allprod})

def logintoaddmd(request):
    if request.method == 'POST':
        mobileno = request.POST['uanumber']
        pass1 = request.POST['uapassword']
        user = auth.authenticate(username = mobileno, password = pass1)
        if user is not None:
            auth.login(request, user)
            return redirect('/AddMedicines')
        else:
            return HttpResponse("not found")
    return render(request, 'login.html')

def addmd(request):

    if request.method == 'POST':

        form = Addmd(request.POST, request.FILES)
        if form.is_valid():

            form.save()
            return redirect('/AddMedicines')
    else:
        form = Addmd()

    fname = request.user.username

    addmdbyUser = AtoZMedicine.objects.filter(cName = fname)
    
    if request.user.is_authenticated and request.user.last_name == "":
        return render(request, "AddMedicines.html", {'lastname':request.user.last_name,'medicines':addmdbyUser } )
    else:
        return redirect('/loginUser')


def deletmedicine(request, mdid):
    deletmd = AtoZMedicine.objects.filter(id = mdid)
    deletmd.delete()
    return redirect('/AddMedicines')