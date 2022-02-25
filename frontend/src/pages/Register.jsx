import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("Passwords do not match");
		}
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							id="name"
							className="form-control"
							name="name"
							value={name}
							onChange={onChange}
							placeholder="Enter your name"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							name="email"
							id="email"
							className="form-control"
							value={email}
							onChange={onChange}
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							id="password"
							className="form-control"
							value={password}
							onChange={onChange}
							placeholder="Enter password"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password2"
							id="password2"
							className="form-control"
							value={password2}
							onChange={onChange}
							placeholder="Confirm password"
							required
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block">Submit</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
