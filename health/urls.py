from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.index, name="homepage"),
    path('home',views.index, name="homepage"),
    path('signup',views.signUp),
    path('logout', views.logout),
    path('login',views.login),
    path('medicine', views.allMedicine, name="medicine"),
    path('medicine', views.allMedicine, name="medicine"),
    path('doctor consultation', views.docterCon, name="doctor consultation"),
    path('<int:myid>', views.buymedicine, name="buymedicine"),
    path('doctor', views.doctorcon),
    path('product/<prdname>', views.productItems),
    path('loginUser', views.logintoaddmd),
    path('AddMedicines', views.addmd),
    path('delete/<int:mdid>', views.deletmedicine),

    
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)