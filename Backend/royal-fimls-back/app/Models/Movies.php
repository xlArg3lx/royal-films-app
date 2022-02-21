<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movies extends Model
{
    use HasFactory;
    protected $table = 'movies';
    protected $fillable = [
        'name_movie',
        'language_movie',
        'clasification_movie',
        'duration_movie',
        'release_date_movie',
        'link_trailer_movie',
        'director_movie',
        'sipnosis_movie',
        'reparto_movie',
        'imgUrl',
    ];
}