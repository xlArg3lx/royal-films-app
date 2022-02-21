import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class EditMovie extends Component {

    // Declaración de variables
    state = {
        name_movie: '',
        language_movie: '',
        clasification_movie: '',
        duration_movie: '',
        release_date_movie: '',
        link_trailer_movie: '',
        director_movie: '',
        sipnosis_movie: '',
        reparto_movie: '',
        imgUrl: '',
        error_list: [],
    }

    // Setear valores a los input
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Función editar películas DB
    updateMovie = async (e) => {
        e.preventDefault();
        document.getElementById('updatebtn').innerText = "Proesando información";
        document.getElementById('updatebtn').disabled = true;
        const movieId = this.props.match.params.id;
        const api = `api/update-movie/${movieId}`;
        const res = await axios.put(api, this.state);
        if (res.data.status === 200) {
            swal({
                title: "Buen trabajo",
                text: "Película actualizada",
                icon: "success",
                button: "OK",
            });
            document.getElementById('updatebtn').innerText = "Editar película";
            document.getElementById('updatebtn').disabled = false;
            this.props.history.push("/")
            this.setState({
                name_movie: '',
                language_movie: '',
                clasification_movie: '',
                duration_movie: '',
                release_date_movie: '',
                link_trailer_movie: '',
                director_movie: '',
                sipnosis_movie: '',
                reparto_movie: '',
                imgUrl: '',
            });
        } else {
            document.getElementById('updatebtn').innerText = "Editar película";
            document.getElementById('updatebtn').disabled = false;
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }

    // Función que busca la movie por id y carga los datos en el formulario par su edición
    async componentDidMount() {
        const movieId = this.props.match.params.id;
        const api = `api/edit-movie/${movieId}`;
        const res = await axios.get(api)

        if (res.data.status === 200) {

            this.setState({
                name_movie: res.data.movie.name_movie,
                language_movie: res.data.movie.language_movie,
                clasification_movie: res.data.movie.clasification_movie,
                duration_movie: res.data.movie.duration_movie,
                release_date_movie: res.data.movie.release_date_movie,
                link_trailer_movie: res.data.movie.link_trailer_movie,
                director_movie: res.data.movie.director_movie,
                sipnosis_movie: res.data.movie.sipnosis_movie,
                reparto_movie: res.data.movie.reparto_movie,
                imgUrl: res.data.movie.imgUrl,
            });
        }
    }

    render() {
        return (
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="card">
                            <div className="card-header">
                                Editar película
                                <Link to={'/'} className="btn btn-primary btn-sm float-end" > Regresar </Link>
                            </div>
                            <div className="card-body">
                                <form className="row g-3" onSubmit={this.updateMovie}>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Nombre película:</label>
                                        <input type="text" name="name_movie" className="form-control" onChange={this.handleInput} value={this.state.name_movie} />
                                        <span className='text-danger'> {this.state.error_list.name_movie} </span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Idioma:</label>
                                        <select className="form-select" name="language_movie" aria-label="Default select example" onChange={this.handleInput} value={this.state.language_movie}>
                                            <option value={'Español'}>Español</option>
                                            <option value={'Ingles'}>Ingles</option>
                                            <option value={'Otro'}>Otro</option>
                                        </select>
                                        <span className='text-danger'> {this.state.error_list.language_movie} </span>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Clasificación:</label>
                                        <select className="form-select" name="clasification_movie" aria-label="Default select example" onChange={this.handleInput} value={this.state.clasification_movie}>
                                            <option value={'Todo público'}>Todo público</option>
                                            <option value={'+ 14 años'}>+ 14 años</option>
                                            <option value={'+ 12 años'}>+ 12 años</option>
                                        </select>
                                        <span className='text-danger'> {this.state.error_list.clasification_movie} </span>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="inputAddress2" className="form-label">Duración (min):</label>
                                        <input type="number" name="duration_movie" className="form-control" placeholder="Apartment, studio, or floor" onChange={this.handleInput} value={this.state.duration_movie} />
                                        <span className='text-danger'> {this.state.error_list.duration_movie} </span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">Fecha de estreno:</label>
                                        <input type="date" className="form-control" name="release_date_movie" onChange={this.handleInput} value={this.state.release_date_movie} />
                                        <span className='text-danger'> {this.state.error_list.release_date_movie} </span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputState" className="form-label">Link trailer:</label>
                                        <input type="text" name="link_trailer_movie" className="form-control" onChange={this.handleInput} value={this.state.link_trailer_movie} />
                                        <span className='text-danger'> {this.state.error_list.link_trailer_movie} </span>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputZip" className="form-label">Director:</label>
                                        <input type="text" className="form-control" name="director_movie" onChange={this.handleInput} value={this.state.director_movie} />
                                        <span className='text-danger'> {this.state.error_list.director_movie} </span>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="inputZip" className="form-label">Portada:</label>
                                        <input type="text" className="form-control" placeholder='Url de la portada' name="imgUrl" onChange={this.handleInput} value={this.state.imgUrl} />
                                        <span className='text-danger'> {this.state.error_list.imgUrl} </span>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <textarea className="form-control" name="sipnosis_movie" placeholder="Leave a comment here" id="floatingTextarea" onChange={this.handleInput} value={this.state.sipnosis_movie} />
                                            <label htmlFor="floatingTextarea">Sipnosis</label>
                                            <span className='text-danger'> {this.state.error_list.sipnosis_movie} </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <textarea className="form-control" name="reparto_movie" placeholder="Leave a comment here" id="floatingTextarea" onChange={this.handleInput} value={this.state.reparto_movie} />
                                            <label htmlFor="floatingTextarea">Reparto</label>
                                            <span className='text-danger'> {this.state.error_list.reparto_movie} </span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button id='updatebtn' type="submit" className="btn btn-primary">Editar película</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditMovie; 
