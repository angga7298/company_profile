<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::first();

        if (!$about) {
            return response()->json([
                'success' => false,
                'message' => 'Data not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $about
        ]);
    }

    public function update(Request $request)
    {
        $about = About::first();

        if (!$about) {
            $about = new About();
        }

        $about->description = $request->description;
        $about->vision = $request->vision;
        $about->mission = $request->mission;
        $about->values = json_encode($request->values);
        $about->hero_title = $request->hero_title;
        $about->hero_subtitle = $request->hero_subtitle;
        $about->hero_image = $request->hero_image;
        $about->save();

        return response()->json([
            'success' => true,
            'data' => $about
        ]);
    }
}
