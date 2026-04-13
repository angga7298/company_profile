<?php

namespace App\Http\Controllers\API;

use App\Models\Service;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Storage;
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
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['image'] = $path;
        }

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
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($service->image) {
                Storage::disk('public')->delete($service->image);
            }
            $path = $request->file('image')->store('services', 'public');
            $validated['image'] = $path;
        }

        $service->update($validated);
        return new ServiceResource($service);
    }

    public function destroy(Service $service)
    {
        if ($service->image) {
            Storage::disk('public')->delete($service->image);
        }
        $service->delete();
        return response()->json(['message' => 'Service deleted']);
    }
}
