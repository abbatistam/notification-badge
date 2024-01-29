from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.shortcuts import render
import os, json
from .models import NotifyModel
from django.core.serializers import serialize

def process_json(request):
    notifications = NotifyModel.objects.all()

    json_data = serialize('json', notifications)

    return JsonResponse(json_data, safe=False)


def show_results(request):
    return render(request, "notifapi/demo.html")


class SimpleWebSocketTestView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'notifapi/simple_ws_test.html')

    
