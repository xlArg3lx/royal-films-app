<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('name_movie');
            $table->string('language_movie');
            $table->string('clasification_movie');
            $table->integer('duration_movie');
            $table->date('release_date_movie');
            $table->text('link_trailer_movie');
            $table->string('director_movie');
            $table->text('sipnosis_movie');
            $table->text('reparto_movie');
            $table->text('imgUrl');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}