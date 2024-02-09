import React from "react"
import { useNavigate } from "react-router"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [body, setBody] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch(`http://localhost:3030/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            let data = await response.json();

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.payload));

            navigate("/");
        } else {
            document.getElementById("error").innerHTML = "Wrong Credentials!";
            setBody({ ...body, password: "" });
        }
    };
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="p-4 border rounded-4" style={{ backgroundColor: "#f8f9fa" }}>
                            <div className="mb-4">
                                <h3> Accedi al tuo account </h3>
                            </div>
                            <form onSubmit={(event) => handleSubmit(event)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        id="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="Inserisci la tua email"
                                        value={body.email}
                                        required
                                        onInput={(e) =>
                                            setBody({
                                                ...body,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Inserisci la tua password"
                                        value={body.password}
                                        required
                                        onInput={(e) =>
                                            setBody({
                                                ...body,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn w-50 rounded-4 bg-danger text-white fw-bold">
                                        LOGIN
                                    </button>
                                </div>
                                <p className="mt-3 text-center">
                                    Not a member?{" "}
                                    <Link to="/register" className="fw-bold text-danger">
                                        Register
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
