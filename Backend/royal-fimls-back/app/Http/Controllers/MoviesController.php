<?php

namespace App\Http\Controllers;

use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MoviesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $movies = Movies::orderBy('id', 'desc')->get();
        return response()->json([
            'status' => 200,
            'movies' => $movies
        ]);
    }


    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'name_movie' => 'required',
            'language_movie' => 'required',
            'clasification_movie' => 'required',
            'duration_movie' => 'required',
            'release_date_movie' => 'required',
            'link_trailer_movie' => 'required',
            'director_movie' => 'required',
            'sipnosis_movie' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->getMessageBag(),
            ]);
        } else {

            $movie = new Movies;
            $movie->name_movie = $request->name_movie;
            $movie->language_movie = $request->language_movie;
            $movie->clasification_movie = $request->clasification_movie;
            $movie->duration_movie = $request->duration_movie;
            $movie->release_date_movie = $request->release_date_movie;
            $movie->link_trailer_movie = $request->link_trailer_movie;
            $movie->director_movie = $request->director_movie;
            $movie->sipnosis_movie = $request->sipnosis_movie;

            $movie->save();
            return response()->json([
                'status' => 200,
                'message' => 'Movie agregada'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $movie = Movies::findOrFail($id);
        return response()->json($movie);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $movie = Movies::find($id);
        return response()->json([
            'status' => 200,
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $movie = Movies::findOrFail($id);

        $movie->name_movie = $request->name_movie;
        $movie->language_movie = $request->language_movie;
        $movie->clasification_movie = $request->clasification_movie;
        $movie->duration_movie = $request->duration_movie;
        $movie->release_date_movie = $request->release_date_movie;
        $movie->link_trailer_movie = $request->link_trailer_movie;
        $movie->director_movie = $request->director_movie;
        $movie->sipnosis_movie = $request->sipnosis_movie;

        $movie->save();
        return response()->json([
            'status' => 200,
            'movie' => $movie,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $movie = Movies::findOrFail($id);
        $movie->delete();
        return response()->json([
            'status' => 200,
            'movie' => $movie,
        ]);
    }
}