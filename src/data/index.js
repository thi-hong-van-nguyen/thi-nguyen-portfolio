import ehsan from "../photos/ehsan.PNG";
import coderheroes from "../photos/coderheroes.PNG";
import fitness from "../photos/fitness.jpeg";
import pot from "../photos/pot.jfif";

export const testimonials = [
	{
		content:
			"Thi is very good at working under pressure. Thi always focuses on achieving difficult tasks and projects that are aligned to strategic management objectives. She is the type of person who will work hard and will always act as a positive role model when dealing with team members or clients.",
		img: ehsan,
		reviewer: "Ehsan Rahimi",
		reviewer_position: "Back End Engineer, Bloom Tech",
	},
	{
		content:
			"Thi Hong Van is self starter capable of handling any task. Thi has shown skills in problem solving, and humility when there was a task that reached outside of Thi's current skills. The value in that is time saved. This is a great worker.",
		img: "https://ca.slack-edge.com/ESZCHB482-U0254JJ3WAK-eba273ae6861-512",
		reviewer: "Brendon Hawkins",
		reviewer_position: "Director Manager, Bloom Tech",
	},
	{
		content:
			"After working with her on our final project, I immediately knew she was someone a team could rely on! She always came up with good ideas, and take small steps a time to complete all the bullet points.",
		img: "https://ca.slack-edge.com/ESZCHB482-U025ULZUW6P-51976ca2330e-512",
		reviewer: "Huimin Zhang",
		reviewer_position: "Front End Engineer, Bloom Tech",
	},
	{
		content:
			"Thi is one of the most driven developers I have ever met, she works well in teams, is respectable and provides knowlege and expertise.",
		img: "https://ca.slack-edge.com/ESZCHB482-U022KRWUQFM-3c00e8980e10-512",
		reviewer: "Pauline Stokes",
		reviewer_position: "Director Manager, Bloom Tech",
	},
	{
		content:
			"Thi is intelligent and hard working, I say this because the amount of work she has contributed in the past and the complexity of it. She is able to work well with others and also by herself, either way she achieves great things.",
		img: "https://ca.slack-edge.com/ESZCHB482-U01T6DMLH6C-ed73a56a66fa-512",
		reviewer: "Emmanuel Gonzalez",
		reviewer_position: "UI/UX Engineer, Bloom Tech",
	},
	{
		content: "Thi is a sweet, charismatic person who enjoys coding.",
		img: "https://ca.slack-edge.com/ESZCHB482-U01HKBN2Y7K-93841ad4e300-512",
		reviewer: "Ashley Burns",
		reviewer_position: "Back End Engineer, Bloom Tech",
	},
];

export const projects = [
	{
		title: "Coder Heroes",
		time: "12/2021",
		img_url: coderheroes,
		content:
			"Group project - A web application for a real non-profit organization, Code Your Dreams,  to aid in the cause of helping underprivileged youth in the Chicagoland area break into tech by offering coding courses",
		client: "Code Your Dream, non-profit org",
		site: "https://github.com/thi-hong-van-nguyen/coder-heroes-fe",
		code: "https://github.com/thi-hong-van-nguyen/coder-heroes-fe",
		webpage: "",
		type: "front end",
		details: [
			"Implemented Agile Methodology to constantly deliver working products after each Sprint. Closely interacted with stakeholders to have a clear vision of the product and to build backlogs. Conducted everyday stand up to keep all members up to date. All members committed to welcome any changes in the development phase",
			"Frequently communicated and collaborated with back end engineers to determine database schema and data structure, and with UX engineers to decide frameworks and design for the app",
			"Wrote codes to build payment feature using Stripe, for both front end and back end ",
			"Utilized Ant Design to ensure unified and high quality design of the application",
			"Contributed in reviewing, resolving conflicts and approving Pull Requests on GitHub",
		],
	},
	{
		title: "Anywhere Fitness",
		time: "10/2021",
		img_url: fitness,
		content:
			"An individual project covered from front end to backend whose product is a React web application for clients to register and health coaches to create fitness classes anywhere around the nation",
		client: "Bloom Tech",
		site: "https://anywhere-fitness-frontend.herokuapp.com/",
		webpage: "https://anywhere-fitness-frontend.herokuapp.com/",
		code: "https://github.com/anywhere-fitness-project",
		type: "full stack",
		details: [
			"Built a maintainable application and improved its scalability by using advanced state management tool, Redux",
			"Used relational database management systems, PostgreSQL, together with Node.js and Express framework to design a RESTful Web API and to build the entire database",
			"Created log in, sign up, class form, along with form validations using yup",
			"Deployed successfully front end with Vercel and backend with Heroku",
		],
	},
	{
		title: "Potluck Planner",
		time: "09/2021",
		img_url: pot,
		content:
			"A group project resulted in a web page that allows logged in users to create potlucks and invite guests, and logged in guests can choose to accept or refuse",
		client: "Bloom Tech",
		site: "https://github.com/Build-Week-Potluck-Planner-4",
		webpage: "",
		code: "https://github.com/Build-Week-Potluck-Planner-4",
		type: "front end",
		details: [
			"Utilized State Hook and Redux to store data locally and globally, ensuring the dynamic aspect of the page",
			"Efficiently made the codes DRY by using custom hook useForm and shared Components, and easy to debug by breaking into small different components",
		],
	},
	{
		title: "Pets Adoption",
		time: "09/2021",
		img_url:
			"https://www.litter-robot.com/blog/wp-content/uploads/2016/01/girl-and-cat-2-1080-510x339.jpg",
		content:
			"An individual project covered from front end to backend whose product is a React web application for clients to register and health coaches to create fitness classes anywhere around the nation",
		client: "Bloom Tech",
		site: "https://pets-adopt.vercel.app/",
		webpage: "https://pets-adopt.vercel.app/",
		code: "https://github.com/pets-adopt",
		type: "front end",
		details: [
			"Improved designs with advanced CSS (Flexbox, cdnjs libraries, shadows, transitions)",
		],
	},
];

export const tabs = [
	{
		title: "All",
	},
	{
		title: "Full Stack",
	},
	{
		title: "Front End",
	},
	{
		title: "Back End",
	},
];

export const work = [
	{
		position: "Full Stack Web Developer",
		company: "Sikka Software Corporation",
		time: "02/2022 - Present",
		details: [
			"Built client-side applications for two of company' new products from creating and setup GitHub repo, coding, debugging, maintaining the entire application",
			"Met with potential clients to present the demo of the new products; received feedbacks and made improvement accordingly",
			"Worked closely with the product manager, designer and backend engineers to create user stories and sprint on Jira for each period",
			"Utilized libraries fluently to create dynamic data tables, charts; customized them to fit required functionalities",
			"Implemented Redux to efficiently manage global states",
		],
	},
	{
		position: "Accounting & Tax Intern",
		company: "Wade R. Kawakami, C.P.A",
		time: "02/2021 - 06/2021",
		details: [
			"Assisted 60+ customers to prepare balance sheet, P&L, trial balance and e-file income tax return, including fiduciaries and corporations by the due date, resulting in high customer satisfactions with positive feedbacks and zero complaint",
			"Managed bookkeeping and reconciled monthly bank statements for clients' businesses",
		],
	},
	{
		position: "Assistant of General Manager",
		company: "Interfoods Shareholding Co.,",
		time: "12/2014 – 03/2017",
		details: [
			"Interpreted, reviewed and translated contracts, legal documents, and law application documents into Vietnamese-Japanese",
			"Utilized Excel skill to assisted supply chain management group to control expired/close-to-expired products, leading to a 90% reduction in unnecessary waste, along with building more efficient production plans",
		],
	},
];

export const skills = [
	{
		stack: "Front End",
		list: [
			"HTML & CSS",
			"JavaScript ES6",
			"React",
			"Redux",
			"TypeScript",
			"Stripe",
			"SASS",
			"AntDesign",
			"Bootstrap",
			"Figma",
		],
	},
	{
		stack: "Back End",
		list: [
			"Node JS",
			"Express",
			"REST API",
			"Bcrypt JS",
			"JSON Web Token",
			"Knex JS",
			"Python",
		],
	},
	{
		stack: "Database",
		list: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
	},
	{
		stack: "Version Controls",
		list: ["Git", "GitHub"],
	},
	{
		stack: "Testing",
		list: [
			"Cypress",
			"React Testing Libraries",
			"Jest",
			"Suptertest",
			"Postman/ HttPie",
		],
	},
	{
		stack: "Additional Skills",
		list: [
			"Test Driven Developement",
			"Agile Methodology Implementation",
			"Debugging",
			"Algorithms",
			"Deployment",
		],
	},
];

export const education = [
	{
		major: "BS, Information Technology",
		gpa: "4.00",
		school: "Purdue Global University",
		time: "03/2022 - Present",
	},
	{
		major: "Full Stack Web Developer",
		gpa: "",
		school: "Bloom Tech (FKA Lambda)",
		time: "6/2021 - 12/2021",
	},
	{
		major: "BS, Business Administration",
		gpa: "3.94",
		school: "San Jose State University",
		time: "10/2021 - 10/2022",
	},
	{
		major: "AA, Business Administration",
		gpa: "3.96",
		school: "De Anza College",
		time: "10/2017 - 09/2020",
	},
];
