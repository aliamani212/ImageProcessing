from django.urls import path

from apps.main.views import index, median_blur_view, gaussian_blur_view

app_name = 'main'
urlpatterns = [
    path('', index, name='home'),
    path('median_blur_view/', median_blur_view, name='median_blur_view'),
    path('gaussian_blur_view/', gaussian_blur_view, name='gaussian_blur_view'),
]
