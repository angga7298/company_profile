<?php

namespace App\Http\Controllers\API;

use App\Models\Portfolio;
use App\Http\Resources\PortfolioResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class PortfolioController extends Controller
{
    public function index()
    {
        return PortfolioResource::collection(Portfolio::latest()->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'full_description' => 'required|string',
            'project_date' => 'required|date',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('portfolios', 'public');
            $validated['image'] = $path;
        }

        $portfolio = Portfolio::create($validated);
        return new PortfolioResource($portfolio);
    }

    public function show(Portfolio $portfolio)
    {
        return new PortfolioResource($portfolio);
    }

    public function update(Request $request, Portfolio $portfolio)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'full_description' => 'sometimes|required|string',
            'project_date' => 'sometimes|required|date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($portfolio->image) {
                Storage::disk('public')->delete($portfolio->image);
            }
            $path = $request->file('image')->store('portfolios', 'public');
            $validated['image'] = $path;
        }

        $portfolio->update($validated);
        return new PortfolioResource($portfolio);
    }

    public function destroy(Portfolio $portfolio)
    {
        if ($portfolio->image) {
            Storage::disk('public')->delete($portfolio->image);
        }
        $portfolio->delete();
        return response()->json(['message' => 'Portfolio deleted']);
    }
}
