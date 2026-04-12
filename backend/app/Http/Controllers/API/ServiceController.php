<?php

namespace App\Http\Controllers\API;

use App\Models\Service;
use App\Http\Resources\ServiceResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index()
    {
        return ServiceResource::collection(Service::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'icon' => 'nullable|string|max:100',
        ]);

        $service = Service::create($validated);
        return new ServiceResource($service);
    }

    public function show($id)
    {
        $service = Service::findOrFail($id);
        return new ServiceResource($service);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'icon' => 'nullable|string|max:100',
        ]);

        $service->update($validated);
        return new ServiceResource($service);
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return response()->json(['message' => 'Service deleted']);
    }
}
