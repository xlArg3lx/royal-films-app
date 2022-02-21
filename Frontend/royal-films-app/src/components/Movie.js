import React, { Component, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


class Movies extends Component {

    state = {
        movies: [],
        search: ''
    }

    async componentDidMount() {
        const api = 'api/movies';
        const res = await axios.get(api);

        if (res.data.status === 200) {
            this.setState({
                movies: res.data.movies,
            })
            console.table(res.data.movies);
        }
    }

    deleteMovie = (e, id) => {
        swal({
            title: "Estás seguro?",
            text: "Una vez eliminado, no volverás a recuperar el registro",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const api = `api/delete-movie/${id}`;
                    const res = axios.delete(api);
                    this.componentDidMount();
                    swal("Película eliminada correctamente", {
                        icon: "success",
                    });
                    this.props.history.push("/add-movie");
                    this.props.history.push("/");
                } else {
                    swal("Acción cancelada");
                }
            });
    }

    render() {
        var moviesCards = "";
        moviesCards = this.state.movies.map((item) => {
            return (
                <div className="col" key={item.id} >
                    <div className="card h-100">
                        <img style={{ height: '300px' }} src={item.imgUrl} className="card-img-top" alt={item.movie_name} />
                        <div className="card-body">
                            <h5 className="card-title"> {item.name_movie} </h5>
                            <h6 class="card-subtitle mb-2 text-muted">Clasificación: {item.clasification_movie} </h6>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Idioma: {item.language_movie} </li>
                            <li class="list-group-item">Director: {item.director_movie} </li>
                        </ul>
                        <div class="card-body">
                            <a target={'_blank'} className="card-link btn btn-dark" href={item.link_trailer_movie}> Ver trailer </a>
                            <Link className="card-link btn btn-secondary" to={`edit-movie/${item.id}`}> Editar </Link>
                            <button className="card-link btn btn-danger" onClick={(e) => this.deleteMovie(e, item.id)}>Eliminar</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Fecha de estreno: {item.release_date_movie}</small>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <>
                <div className='container-fluid py-5'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input onChange={this.handleInput} value={this.state.search} type="text" className="form-control" placeholder="¿Que deseas buscar?" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {moviesCards}
                    </div>
                </div>
            </>
        );
    }
}

export default Movies; 