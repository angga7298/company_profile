<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    //
    protected $fillable = ['title', 'description', 'full_description', 'image', 'project_date'];
}
