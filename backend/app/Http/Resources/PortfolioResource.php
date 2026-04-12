<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'full_description' => $this->full_description,
            'project_date' => $this->project_date,
            'image' => $this->image ? asset('storage/' . $this->image) : null,
            'created_at' => $this->created_at,
        ];
    }
}
