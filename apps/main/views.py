from django.conf import settings
from django.shortcuts import render
import cv2
import numpy as np
import base64
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt


def media_admin(request):
    return {'media_url': settings.MEDIA_URL}


def index(request):
    return render(request, 'index.html')


@csrf_exempt
def median_blur_view(request):
    if request.method != 'POST':
        return JsonResponse({"error": "فقط متد POST مجاز است."}, status=405)

    file = request.FILES.get("image")
    if not file:
        return JsonResponse({"error": "هیچ فایلی ارسال نشده است."}, status=400)

    # خواندن بایت‌های تصویر آپلود شده
    image_bytes = file.read()
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    if img is None:
        return JsonResponse({"error": "فرمت تصویر نامعتبر است."}, status=400)

    # اعمال فیلتر median blur
    kesize = 21
    img_blurred = cv2.medianBlur(img, kesize)

    # تبدیل به JPEG و سپس به base64 (برای ارسال در JSON)
    success, buffer = cv2.imencode('.jpg', img_blurred)
    if not success:
        return JsonResponse({"error": "خطا در پردازش تصویر."}, status=500)

    # تبدیل بایت‌ها به base64 برای ارسال در JSON
    img_base64 = base64.b64encode(buffer).decode('utf-8')

    return JsonResponse({
        "processed_image": img_base64,
        "message": "تصویر با موفقیت بلور شد."
    })
