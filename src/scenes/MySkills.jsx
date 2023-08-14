import LineGradient2 from "../components/LineGradient2";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
	const isAboveLarge = useMediaQuery("(min-width: 1060px)");
	return (
		<section id="skills" className="pt-10 pb-24">
			{/* HEADER AND IMAGE SECTION */}
			<div className="md:flex md:justify-between md:gap-16 mt-32">
				<motion.div
					className="md:w-1/3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="font-cinzeldecorative_bold font-semibold text-4xl mb-5 tracking-wide">
						What MAKES US{" "}
						<span className="text-ribcolororange font-cinzeldecorative_bold">Icarian</span>
					</p>
					<LineGradient2 width="w-1/3" />
					<p className="mt-10 mb-7 text-base">
						We use cutting-edge tools and techniques to create visually stunning
						websites that engage users, optimize your viewership, and leave a
						lasting impression.
					</p>
				</motion.div>

				<div className="mt-16 md:mt-0">
					{isAboveLarge ? (
						<div
							className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
						>
							<img
								alt="skills"
								className="z-10"
								src="assets/skills-image.png"
							/>
						</div>
					) : (
						<img alt="skills" className="z-10" src="assets/skills-image.png" />
					)}
				</div>
			</div>

			{/* SKILLS */}
			<div className="md:flex md:justify-between mt-16 gap-32">
				{/* EXPERIENCE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-cinzeldecorative_bold font-semibold text-5xl">01</p>
							<p className="font-playfair font-semibold text-2xl mt-3">
								Experienced
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-[#fdd474] absolute right-0 top-0 z-[-1] animate-pulse" />
					</div>
					<p className="mt-5">
						Our team of developers has a vast array of experience in different
						software development practices, ensuring that we deliver the best
						possible product. With our diverse skill set, we are able to tackle
						any project, no matter the scope.
					</p>
				</motion.div>

				{/* INNOVATIVE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-cinzeldecorative_bold font-semibold text-5xl">02</p>
							<p className="font-playfair font-semibold text-2xl mt-3">
								Innovative
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-sunyellow absolute right-0 top-0 z-[-1] animate-pulse" />
					</div>
					<p className="mt-5">
						We use cutting-edge technologies like Next.js, Tailwind, React,
						Prisma, Redux and many others to stay ahead of the curve and deliver
						the best possible product.
					</p>
				</motion.div>
				{/* IMAGINATIVE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-cinzeldecorative_bold font-semibold text-5xl">03</p>
							<p className="font-playfair font-semibold text-2xl mt-3">
								Creative
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-ribcolororange absolute right-0 top-0 z-[-1] animate-pulse" />
					</div>
					<p className="mt-5">
						We use our creativity to make your website stand out from the crowd.
						We consider every detail, from the color scheme to the layout, to
						ensure that your website is unique and memorable.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
