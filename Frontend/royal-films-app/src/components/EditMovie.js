import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class EditMovie extends Component {

    state = {
        name_movie: '',
        language_movie: '',
        clasification_movie: '',
        duration_movie: '',
        release_date_movie: '',
        link_trailer_movie: '',
        director_movie: '',
        sipnosis_movie: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

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
            });
        }
    }

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
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Idioma:</label>
                                        <select className="form-select" name="language_movie" aria-label="Default select example" onChange={this.handleInput} value={this.state.language_movie}>
                                            <option value={'Español'}>Español</option>
                                            <option value={'Ingles'}>Ingles</option>
                                            <option value={'Otro'}>Otro</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Clasificación:</label>
                                        <select className="form-select" name="clasification_movie" aria-label="Default select example" onChange={this.handleInput} value={this.state.clasification_movie}>
                                            <option value={'Todo público'}>Todo público</option>
                                            <option value={'+ 14 años'}>+ 14 años</option>
                                            <option value={'+ 12 años'}>+ 12 años</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="inputAddress2" className="form-label">Duración (min):</label>
                                        <input type="number" name="duration_movie" className="form-control" placeholder="Apartment, studio, or floor" onChange={this.handleInput} value={this.state.duration_movie} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">Fecha de estreno:</label>
                                        <input type="date" className="form-control" name="release_date_movie" onChange={this.handleInput} value={this.state.release_date_movie} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputState" className="form-label">Link trailer:</label>
                                        <input type="text" name="link_trailer_movie" className="form-control" onChange={this.handleInput} value={this.state.link_trailer_movie} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputZip" className="form-label">Director:</label>
                                        <input type="text" className="form-control" name="director_movie" onChange={this.handleInput} value={this.state.director_movie} />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" name="sipnosis_movie" placeholder="Leave a comment here" id="floatingTextarea" onChange={this.handleInput} value={this.state.sipnosis_movie} />
                                            <label htmlFor="floatingTextarea">Sipnosis</label>
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