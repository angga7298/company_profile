<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ContactMessage; // <- tambahkan ini

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);
        $contact = ContactMessage::create($validated);
        return response()->json(['message' => 'Pesan terkirim'], 201);
    }

    public function index()
    {
        return ContactMessage::latest()->get();
    }

    // Tambahkan method markAsRead untuk route put /admin/contacts/{id}/read
    public function markAsRead($id)
    {
        $contact = ContactMessage::findOrFail($id);
        $contact->update(['is_read' => true]);
        return response()->json(['message' => 'Pesan ditandai sudah dibaca']);
    }
}
