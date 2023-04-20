import LineGradient2 from "../components/LineGradient2";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		console.log("~ e", e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contact" className="contact py-48">
			{/* HEADINGS */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
				className="flex justify-end w-full"
			>
				<div>
					<p className="font-sedgwick font-semibold text-4xl justify-center tracking-wider">
						<span className="text-ribcolororange">CONTACT </span>US TO GET
						<span className="text-ribcolororange"> STARTED</span>
					</p>
					<div className="flex md:justify-end my-5">
						<LineGradient2 width="w-1/2" />
					</div>
				</div>
			</motion.div>

			{/* FORM & IMAGE */}
			<div className="md:flex md:justify-between gap-16 mt-5">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className="basis-1/2 flex justify-center"
				>
					<img src="../assets/contact-image.jpeg" alt="contact" />
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
					className="basis-1/2 mt-10 md:mt-0"
				>
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
						method="POST"
					>
						<input
							className="w-full bg-midgray font-semibold placeholder-grey hover:placeholder-opacity-75 p-3 border-2 border-bluebody rounded-md"
							type="text"
							placeholder="NAME"
							{...register("name", {
								required: true,
								maxLength: 100,
							})}
						/>
						{errors.name && (
							<p className="text-red mt-1">
								{errors.name.type === "required" && "This field is required."}
								{errors.name.type === "maxLength" && "Max length is 100 char."}
							</p>
						)}

						<input
							className="w-full bg-midgray font-semibold placeholder-grey hover:placeholder-opacity-75 p-3 mt-5 border-2 border-bluebody rounded-md"
							type="text"
							placeholder="EMAIL"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<p className="text-red mt-1">
								{errors.email.type === "required" && "This field is required."}
								{errors.email.type === "pattern" && "Invalid email address."}
							</p>
						)}

						<textarea
							className="w-full bg-midgray font-semibold placeholder-grey hover:placeholder-opacity-75 p-3 mt-5 border-2 border-bluebody rounded-md"
							name="message"
							placeholder="MESSAGE"
							rows="7"
							cols="50"
							{...register("message", {
								required: true,
								maxLength: 2000,
							})}
						/>
						{errors.message && (
							<p className="text-red mt-1">
								{errors.message.type === "required" &&
									"This field is required."}
								{errors.message.type === "maxLength" &&
									"Max length is 2000 char."}
							</p>
						)}
						<br />
						<button
							className="p-5 bg-ribcolororange font-semibold text-grey mt-5 hover:bg-bluebody hover:text-ribcolororange hover:border-2 hover:border-grey rounded-md"
							type="submit"
						>
							SEND US A MESSAGE
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
