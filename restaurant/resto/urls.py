from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_order),
    path('list/', views.get_orders),
    path('update/<int:order_id>/', views.update_status),
    path('delete/<int:order_id>/', views.delete_order),
]