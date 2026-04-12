<?php

namespace App\Http\Controllers\API;

use App\Models\Page;
use App\Http\Resources\PageResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    // Menampilkan semua page yang status = true (untuk publik)
    public function index()
    {
        return PageResource::collection(Page::where('status', true)->get());
    }

    // Menyimpan page baru (admin)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'featured_image' => 'nullable|image|mimes:jpg,png|max:2048',
            'status' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('featured_image')) {
            $path = $request->file('featured_image')->store('pages', 'public');
            $validated['featured_image'] = $path;
        }

        $page = Page::create($validated);
        return new PageResource($page);
    }

    // Menampilkan satu page berdasarkan slug atau id (bisa pakai route model binding)
    public function show($slug)
{
    // Cari berdasarkan slug dengan case-insensitive
    $page = Page::whereRaw('LOWER(slug) = ?', [strtolower($slug)])->firstOrFail();
    return new PageResource($page);
}

public function showById($id)
{
    $page = Page::findOrFail($id);
    return new PageResource($page);
}

    // Update page (admin)
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required',
            'featured_image' => 'nullable|image|mimes:jpg,png|max:2048',
            'status' => 'boolean',
        ]);

        if (isset($validated['title'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        if ($request->hasFile('featured_image')) {
            // Hapus gambar lama
            if ($page->featured_image) {
                Storage::disk('public')->delete($page->featured_image);
            }
            $path = $request->file('featured_image')->store('pages', 'public');
            $validated['featured_image'] = $path;
        }

        $page->update($validated);
        return new PageResource($page);
    }

    // Hapus page (admin)
    public function destroy(Page $page)
    {
        if ($page->featured_image) {
            Storage::disk('public')->delete($page->featured_image);
        }
        $page->delete();
        return response()->json(['message' => 'Page deleted successfully']);
    }
}
