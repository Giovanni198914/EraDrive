import React, { useState } from "react"
import { useNavigate } from "react-router"


function Register() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        photo: "",
    })
    const handleAvatarChange = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', newUser.firstName);
        formData.append('lastName', newUser.lastName);
        formData.append('email', newUser.email);
        formData.append('password', newUser.password);
        if (newUser.avatar) {
            formData.append('photo', newUser.photo);
        }

        try {
            const response = await fetch("http://localhost:3030/api/register", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                let data = await response.json();
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.payload));
                navigate("/");
            } else {
                console.log("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration process", error);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 bg-light rounded-4 mt-3 p-5 border">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstNam" className="form-label">Nome</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome"
                                    value={newUser.firstName}
                                    required
                                    onChange={(e) =>
                                        setNewUser({
                                            ...newUser,
                                            firstName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Cognome</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Cognome"
                                    value={newUser.lastName}
                                    required
                                    onChange={(e) =>
                                        setNewUser({
                                            ...newUser,
                                            lastName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={newUser.email}
                                    required
                                    onChange={(e) =>
                                        setNewUser({
                                            ...newUser,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Crea Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={newUser.password}
                                    required
                                    onChange={(e) =>
                                        setNewUser({
                                            ...newUser,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label"> Foto Profilo</label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    className="form-control"
                                    onChange={handleAvatarChange}
                                />
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                                <button type="submit" className="btn btn-danger text-white fw-bold rounded-4">
                                    REGISTRATI
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register