/* eslint-disable react/prop-types */
import './App.css';
/*
 * https://frontendeval.com/questions/faq-component
 *
 * Create a re-usable "Frequently Asked Questions" component
 */

const FAQ = [
	{
		id: 1,
		question: 'How many bones does a cat have?',
		answer: 'A cat has 230 bones - 6 more than a human',
	},
	{
		id: 2,
		question: 'How much do cats sleep?',
		answer: 'The average cat sleeps 12-16 hours per day',
	},
	{
		id: 3,
		question: 'How long do cats live',
		answer:
			'Outdoor cats live 5 years on average. Indoor cats live 15 years on average.',
	},
];

function FAQComponent({ questions }) {
	return (
		<div className="faq">
			<h1>Frequently Asked Questions</h1>
			{questions.map((question, index) => {
				return (
					// only opens the question by default if it's the first question
					<details key={question.id} className="question" open={index === 0}>
						<summary>{question.question}</summary>
						<strong>{question.answer}</strong>
					</details>
				);
			})}
		</div>
	);
}

function App() {
	return <FAQComponent questions={FAQ} />;
}

export default App;
